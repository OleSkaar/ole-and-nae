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
  isJapanese: boolean;
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
      pageId: id,
      isJapanese: getCheckboxProperty(result, "Is Japanese"),
    };

    return ctx.render({ response });
  },
};

export default function Invitation(props: PageProps<Data>) {
  const { data } = props;
  const { response } = data;
  const { email, firstName, pageId, isJapanese } = response;
  const subject = "Ole and Nae 2023";

  return (
    <Layout renderHeader={true}>
      <script src="/email-copyer.js"></script>
          <section>
            <div id="email" style={{ width: "750px" }}>
              {isJapanese
                ? (
                  <>
                    <p>様</p>
                    <p>拝啓　毎日寒い日が続いております。</p>
                    <p>皆様におかれましては</p>
                    <p>ご健やかにお過ごしのこととお慶び申し上げます。</p>
                    <p>かねてより婚約中の私たちは</p>
                    <p>この度　結婚式を挙げることとなりました。</p>
                    <p>つきましては　日頃お世話になっている皆様に</p>
                    <p>新たなる旅立ちの証人となっていただき</p>
                    <p>人前結婚式を行いたく存じます。</p>
                    <p>挙式後は　心ばかりの小宴をご用意いたしました。</p>
                    <p>ご多用中　誠に恐縮ではございますが</p>
                    <p>ご出席賜りますよう　お願い申し上げます。</p>
                    <p>下記のリンクから招待状をご覧ください。</p>
                    <p>
                      <a
                        href={`https://oleandnae2023.com/invitation/${pageId}`}
                      >
                        https://oleandnae2023.com/invitation/{pageId}
                      </a>
                    </p>
                    <p style={{ fontSize: '14px' }}>お手数ながらご都合の程３月１５日までにウェブサイトより</p>
                    <p style={{ fontSize: '14px' }}>ご一報お願い申し上げます。</p>
                    <p style={{ textAlign: 'right' }}>敬白</p>
                    <p>令和５年２月吉日</p>
                    <p>ウーレ・ヨハネス・スコール</p>
                    <p>西村奈恵</p>
                  </>
                )
                : (
                  <>
                    <p>Dear {firstName},</p>
                    <p>
                      We're very happy to invite you to our wedding, and we
                      would love for you to join us as we celebrate this special
                      occasion.
                    </p>
                    <p>
                      It means a lot to us being able to gather all of you in
                      Nae's hometown of Osaka. The ceremony will take place in a
                      venue next to the city's historical castle. We're hoping
                      to experience this epic day with you, the most important
                      people in our life.
                    </p>
                    <p>
                      Please let us know on our website if you're able to
                      attend, and feel free to bring a plus one if you'd like.
                    </p>
                    <p>
                      <a
                        href={`https://oleandnae2023.com/invitation/${pageId}`}
                      >
                        https://oleandnae2023.com/invitation/{pageId}
                      </a>
                    </p>
                    <p>
                      Best,<br />Ole and Nae
                    </p>
                  </>
                )}
            </div>
            <div style={{ display: "flex", gap: "50px" }}>
              <EmailCopyer />
              {
                <a
                  href={`mailto:${email}?subject=${isJapanese ? 'ウーレ & 奈恵 2023 招待状' : subject}`}
                  target="_blank"
                  style={{ display: "block" }}
                >
                  Send email
                </a>
              }
            </div>
          </section>
    </Layout>
  );
}
