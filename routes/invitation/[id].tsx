import Layout from "../../components/Layout.tsx";
import { asset, Head } from "$fresh/runtime.ts";
import { Handlers } from "https://deno.land/x/fresh@1.1.1/server.ts";
import {
  enInvitationPageTranslations,
  Japanese,
  jpInvitationPageTranslations,
  LanguageParameter,
} from "../../components/translations.ts";

import { PageProps } from "$fresh/server.ts";
import { config } from "https://deno.land/std@0.159.0/dotenv/mod.ts";
import { Client } from "https://deno.land/x/notion_sdk@v1.0.4/src/mod.ts";
import {
  getResultEmailProperty,
  getResultTextProperty,
} from "../../utils/getResultProperty.ts";

export interface InvitationPageTranslations {
  titleTag: string;
  metaDescription: string;
  mainHeading: string;
  headingSub: string;
  firstName: string;
  lastName: string;
  email: string;
  submit: string;
  plusOne: string;
  dietaryRequirements: string;
  children: string;
  welcomeParty: string;
  afterParty: string;
  greetings: string;
  yesAttending: string;
  notAttending: string;
}

interface InviteeResponse {
  firstName: string;
  lastName: string;
  email: string;
}

interface Data extends InvitationPageTranslations {
  languageParameter: string;
  response: InviteeResponse;
}

export const handler: Handlers<Data> = {
  async GET(req, ctx) {
    const parameter = `?${LanguageParameter}=${Japanese}`;
    const translations = req.url.includes(parameter)
      ? jpInvitationPageTranslations
      : enInvitationPageTranslations;

    const languageParameter = req.url.includes(parameter) ? parameter : "";

    const { id } = ctx.params;

    config({ export: true });

    const notion = new Client({
      auth: Deno.env.get("NOTION_TOKEN"),
    });

    // const invitee = await notion.databases.query({
    //   database_id: Deno.env.get("NOTION_DATABASE_ID") as string,
    //   filter: {
    //     property: "ID",
    //     formula: {
    //       string: {
    //         equals: id,
    //       },
    //     },
    //   },
    // });

    // const result = invitee.results[0];

    // const response = {
    //   firstName: getResultTextProperty(result, "First name"),
    //   lastName: getResultTextProperty(result, "Last name"),
    //   email: getResultEmailProperty(result),
    // };

    const response: InviteeResponse = {
      firstName: "Test",
      lastName: "User",
      email: "testuser@test.com",
    };

    return ctx.render({ languageParameter, response, ...translations });
  },
};

export default function Invitation(props: PageProps<Data>) {
  const { data } = props;
  const { response } = data;
  const title = data.titleTag;
  const description = data.metaDescription;
  const image = "/osaka-castle.webp";

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="stylesheet" href={asset("/front-page.css")} />
        <link rel="stylesheet" href={asset("/invitation.css")} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`https://oleandnae2023.com${image}`}
        />
      </Head>
      <Layout>
        <section class="frame">
          <h1>{data.mainHeading}</h1>
          <p className="heading-sub">{data.headingSub}</p>
          <div class="info">
            <p>
              {`Dear ${response.firstName}, you're invited to our wedding on July 1 2023.`}
            </p>
            <p>We're very excited and hope you're able to attend!</p>
          </div>
          <form action={`/responses${data.languageParameter}`} method="POST">
            <h2>RSVP</h2>
            <p>Please respond by February 28.</p>
            <h3>Your information</h3>
            <p>{response.firstName} {response.lastName}</p>
            <p>{response.email}</p>
            <hr />
            <div class="radio-buttons">
              <div class="radio-button">
                <input name="attending" type="radio" id="yesAttending" required>
                </input>
                <label for="attending">{data.yesAttending}</label>
              </div>
              <div class="radio-button">
                <input name="attending" type="radio" id="notAttending"></input>
                <label for="attending">{data.notAttending}</label>
              </div>
            </div>
            <div class="checkbox">
              <label for="plusOne">{data.plusOne}</label>
              <input name="plusOne" type="checkbox" />
            </div>
            <div class="checkbox">
              <label for="welcomeParty">{data.welcomeParty}</label>
              <input name="welcomeParty" type="checkbox" />
            </div>
            <div class="checkbox">
              <label for="afterParty">{data.afterParty}</label>
              <input name="afterParty" type="checkbox" />
            </div>
            <textarea
              name="children"
              placeholder={data.children}
            />
            <textarea
              name="dietaryRequirements"
              placeholder={data.dietaryRequirements}
            />
            <textarea
              name="greetings"
              placeholder={data.greetings}
            />
            <button>{data.submit}</button>
          </form>
        </section>
      </Layout>
    </>
  );
}
