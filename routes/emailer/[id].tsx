import { config } from "https://deno.land/std@0.159.0/dotenv/mod.ts";
import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.1/server.ts";
import { Client } from "https://deno.land/x/notion_sdk@v1.0.4/src/mod.ts";
import Layout from "../../components/Layout.tsx";
import EmailCopyer from "../../islands/EmailCopyer.jsx";
import {
    getCheckboxProperty,
    getResultEmailProperty,
    getResultTextProperty,
  } from "../../utils/getResultProperty.ts";

interface Data {
    response: InviteeResponse;
}

interface InviteeResponse {
    firstName: string;
    email: string;
    pageId: string;
}

export const handler: Handlers<Data> = {
    async GET(req, ctx) {
      const { id } = ctx.params;
  
      config({ export: true });
  
      const notion = new Client({
        auth: Deno.env.get("NOTION_TOKEN"),
      });
  
      const invitee = await notion.databases.query({
        database_id: Deno.env.get("NOTION_DATABASE_ID") as string,
        filter: {
          property: "ID",
          formula: {
            string: {
              equals: id,
            },
          },
        },
      });
  
      const result = invitee.results[0];
  
      const response = {
        firstName: getResultTextProperty(result, "First name"),
        email: getResultEmailProperty(result),
        pageId: id
      };

      return ctx.render({ response });
    },
  };

export default function Invitation(props: PageProps<Data>) {
    const { data } = props;
    const { response } = data;
    const { email, firstName, pageId } = response;
    const subject = "Ole and Nae 2023";

    return (
        <Layout renderHeader={true}>
            <script src="/email-copyer.js"></script>
            <section>
                <div id="email" style={{ width: "750px", height: "500px" }}>
                    <p>Dear {firstName},</p>
                    <p>We're very happy to invite you to our wedding, and we would love for you to join us as we celebrate this special occasion.</p>
                    <p>It means a lot to us being able to gather all of you in Nae's hometown of Osaka. The ceremony will take place in a venue next to the city's historical castle. We're hoping to experience this epic day with you, the most important people in our life.</p>
                    <p>Please let us know on our website if you're able to attend, and feel free to bring a plus one if you'd like.</p>
                    <p><a href={`https://oleandnae2023.com/invitation/${pageId}`}>https://oleandnae2023.com/invitation/{pageId}</a></p>
                    <p>Best,<br/>Ole and Nae</p>
                </div>
                <div style={{display: "flex", gap: "50px"}}>
                <EmailCopyer />
                {<a
                    href={`mailto:${email}?subject=${subject}`}
                    target="_blank"
                    style={{display: "block"}}
                >
                    Send email
                </a>}
                </div>
            </section>
        </Layout>
    );
}
