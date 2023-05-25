import { config } from "https://deno.land/std@0.159.0/dotenv/mod.ts";
import { Head } from "https://deno.land/x/fresh@1.1.1/runtime.ts";
import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.1/server.ts";
import Client from "https://deno.land/x/notion_sdk@v1.0.4/src/Client.ts";
import Layout from "../components/Layout.tsx";
import {
  enThankYouPageTranslations,
  Japanese,
  jpThankYouPageTranslations,
  LanguageParameter,
} from "../components/translations.tsx";

interface Data {
  name: string;
}

export const handler: Handlers = {
  async POST(req, ctx) {
    const body = await req.formData();

    const name = body.get("name")?.toString();
    const attending = body.get("attending")?.toString();
    const message = body.get("message")?.toString();

    config({ export: true });

    const notion = new Client({
      auth: Deno.env.get("NOTION_TOKEN"),
    });

    async function addItem() {
      try {
        const response = await notion.pages.create({
          parent: { database_id: Deno.env.get("NOTION_AFTERPARTY_DB_ID") as string },
          properties: {
            title: {
              title: [
                {
                  "text": {
                    "content": name ?? "",
                  },
                },
              ],
            },
            "Attending": {
              checkbox: attending === "yes",
            },
            "Message": {
              rich_text: [
                {
                  "text": {
                    "content": message ?? "",
                  },
                },
              ],
            },
          },
        });
      } catch (error) {
        console.error(error.body);
      }
    }

    addItem();

    const props = { name };

    const resp = await ctx.render(props);

    return resp;
  },
};

export default function AfterpartyJpResponse(props: PageProps<Data>) {
  return (
    <>
      <Head>
        <title>{"Ole and Nae | Afterparty signup"}</title>
      </Head>
      <Layout renderHeader={false} mainClass={"response"}>
        <section className="frame">
          <h1>{"Thanks for signing up!"}</h1>
          <address>{props.data?.name}</address>
        </section>
      </Layout>
    </>
  );
}
