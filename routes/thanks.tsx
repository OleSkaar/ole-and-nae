import { config } from "https://deno.land/std@0.159.0/dotenv/mod.ts";
import { Head } from "https://deno.land/x/fresh@1.1.1/runtime.ts";
import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.1/server.ts";
import { Client } from "https://deno.land/x/notion_sdk@v1.0.4/src/mod.ts";
import Layout from "../components/Layout.tsx";
import { enThankYouPageTranslations, Japanese, jpThankYouPageTranslations, LanguageParameter } from "../components/translations.ts";

export interface ThankYouPageTranslations {
  titleTag: string;
  mainHeading: string;
  invitationWillBeSentTo: string;
}

interface Data extends ThankYouPageTranslations {
  email: string;
}

export const handler: Handlers = {
  async POST(req, ctx) {
    const body = await req.formData();

    const email = body.get("email")?.toString();
    const firstName = body.get("firstName")?.toString();
    const lastName = body.get("lastName")?.toString();

    config({ export: true });

    const notion = new Client({
      auth: Deno.env.get("NOTION_TOKEN"),
    });

    async function addItem() {
      try {
        const response = await notion.pages.create({
          parent: { database_id: Deno.env.get("NOTION_DATABASE_ID") as string },
          properties: {
            title: {
              title: [
                {
                  "text": {
                    "content": email ?? "",
                  },
                },
              ],
            },
            "First name": {
              rich_text: [
                {
                  "text": {
                    "content": firstName ?? "",
                  },
                },
              ],
            },
            "Last name": {
              rich_text: [
                {
                  "text": {
                    "content": lastName ?? "",
                  },
                },
              ],
            },
          },
        });
        console.log(response);
        console.log("Success! Entry added.");
      } catch (error) {
        console.error(error.body);
      }
    }

    addItem();

    const parameter = `?${LanguageParameter}=${Japanese}`
    const translations = req.url.includes(parameter) ? jpThankYouPageTranslations : enThankYouPageTranslations;

    const props = {
        email,
        ...translations
    }

    const resp = await ctx.render(props);

    return resp;
  },
};

export default function Thanks(props: PageProps<Data>) {
  return (
    <>
      <Head>
        <title>{props.data?.titleTag}</title>
      </Head>
      <Layout>
        <section className="frame">
          <h1>{props.data?.mainHeading}</h1>
          <p>{props.data?.invitationWillBeSentTo}</p>
          <address>{props.data?.email}</address>
        </section>
      </Layout>
    </>
  );
}
