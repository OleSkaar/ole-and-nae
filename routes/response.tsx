import { config } from "https://deno.land/std@0.159.0/dotenv/mod.ts";
import { Head } from "https://deno.land/x/fresh@1.1.1/runtime.ts";
import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.1/server.ts";
import { Client } from "https://deno.land/x/notion_sdk@v1.0.4/src/mod.ts";
import Layout from "../components/Layout.tsx";
import {
  enThankYouPageTranslations,
  Japanese,
  jpThankYouPageTranslations,
  LanguageParameter,
} from "../components/translations.ts";

export interface ResponsePageTranslations {
  titleTag: string;
  mainHeading: string;
}

interface Data extends ResponsePageTranslations {
  email: string;
}

export const handler: Handlers = {
  async POST(req, ctx) {
    const body = await req.formData();

    const id = body.get("id")?.toString();
    const email = body.get("email")?.toString();
    const attending = body.get("attending")?.toString();
    const plusOne = body.get("plusOne")?.toString();
    const welcomeParty = body.get("welcomeParty")?.toString()
    const afterParty = body.get("afterParty")?.toString();
    const children = body.get("children")?.toString();
    const dietaryRequirements = body.get("dietaryRequirements")?.toString();
    const greetings = body.get("greetings")?.toString()

    config({ export: true });

    const notion = new Client({
      auth: Deno.env.get("NOTION_TOKEN"),
    });

    const response = await notion.pages.update({
      page_id: id as string,
      properties: {
        'Attending': {
          select: {
            id: attending === 'yes' ? '@hOr' : 'Y>XL'
          }
        },
        'Plus one': {
          rich_text: [
            {
              "text": {
                "content": plusOne ?? "",
              },
            },
          ],
        },
        'Welcome party': {
          checkbox: welcomeParty === 'on'
        },
        'Afterparty': {
          checkbox: afterParty === 'on'
        },
        'Children': {
          rich_text: [
            {
              "text": {
                "content": children ?? "",
              },
            },
          ],
        },
        'Dietary requirements': {
          rich_text: [
            {
              "text": {
                "content": dietaryRequirements ?? "",
              },
            },
          ],
        },
        'Greetings': {
          rich_text: [
            {
              "text": {
                "content": greetings ?? "",
              },
            },
          ],
        },
      },
    });

    const parameter = `?${LanguageParameter}=${Japanese}`;
    const translations = req.url.includes(parameter)
      ? jpThankYouPageTranslations
      : enThankYouPageTranslations;

    const props = {
      email,
      ...translations,
    };

    const resp = await ctx.render(props);

    return resp;
  },
};

export default function Response(props: PageProps<Data>) {
  return (
    <>
      <Head>
        <title>{props.data?.titleTag}</title>
      </Head>
      <Layout>
        <section className="frame">
          <h1>{props.data?.mainHeading}</h1>
          <address>{props.data?.email}</address>
        </section>
      </Layout>
    </>
  );
}
