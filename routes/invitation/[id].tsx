import Layout from "../../components/Layout.tsx";
import { asset, Head } from "$fresh/runtime.ts";
import { Handlers } from "https://deno.land/x/fresh@1.1.1/server.ts";
import {
  enInvitationPageTranslations,
  jpInvitationPageTranslations,
} from "../../components/translations.tsx";

import { PageProps } from "$fresh/server.ts";
import { config } from "https://deno.land/std@0.159.0/dotenv/mod.ts";
import { Client } from "https://deno.land/x/notion_sdk@v1.0.4/src/mod.ts";
import {
  getCheckboxProperty,
  getResultEmailProperty,
  getResultTextProperty,
} from "../../utils/getResultProperty.ts";
import Information from "../../components/Information.tsx";
import Fleuron from "../../components/Fleuron.tsx";
import {
  FunctionComponent,
  VNode,
} from "https://esm.sh/v94/preact@10.11.0/src/index";

export interface InvitationPageTranslations {
  titleTag: string;
  metaDescription: string;
  mainHeading: string;
  headingSub: string;
  personalizedIntro: (name: string) => string;
  firstName: string;
  lastName: string;
  email: string;
  submit: string;
  plusOne: string;
  plusOnePlaceholder: string;
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
  isJapanese: boolean;
  hasResponded: boolean;
}

interface Data extends InvitationPageTranslations {
  response: InviteeResponse;
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

    const pageId = result.id;

    const response = {
      firstName: getResultTextProperty(result, "First name"),
      lastName: getResultTextProperty(result, "Last name"),
      email: getResultEmailProperty(result),
      isJapanese: getCheckboxProperty(result, "Is Japanese"),
      hasResponded: getCheckboxProperty(result, "Has responded"),
    };

    // const response: InviteeResponse = {
    //   firstName: "Test",
    //   lastName: "User",
    //   email: "testuser@test.com",
    //   isJapanese: false,
    // };

    //const pageId = "2084de0e70e3443d88220dcf2be9a944";

    const translations = response.isJapanese
      ? jpInvitationPageTranslations
      : enInvitationPageTranslations;

    return ctx.render({ response, ...translations, pageId });
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
        <link rel="stylesheet" href={asset("/invitation.css")} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`https://oleandnae2023.com${image}`}
        />
      </Head>
      <Layout renderHeader={false} mainClass="invitation">
        <section class="frame" id="top">
          <h1 class="decorative-heading">{data.mainHeading}</h1>
          <p className="heading-sub">{data.headingSub}</p>
          <div class="info">
            <p class="intro">
              {data.personalizedIntro(response.firstName)}
            </p>
            <p class="intro">
              We're very excited and hope you're able to attend!
            </p>
          </div>
          <Fleuron />
          <nav class="links">
            <a href="#information">Info</a>
            <a href="#form">RSVP</a>
          </nav>
        </section>
        <div class="parallax"></div>
        <section class="frame">
          <div class="info" id="information">
            <Information isJapanese={response.isJapanese} />
          </div>
          <Fleuron />
          <nav class="links">
            <a href="#top">Top</a>
            <a href="#form">RSVP</a>
          </nav>
        </section>
        <section class="frame">
          <div class="info">
            {response.hasResponded
              ? <div>
                  <p>You have already responded!</p>
                  <p>If you want to change something on your invite, just send me a message or an email at:</p>
                  <a href="mailto:olejohska@gmail.com">olejohska@gmail.com</a>
                </div>
              : (
                <form action={"/response"} method="POST" id="form">
                  <h2>RSVP</h2>
                  <p>Please respond by February 28.</p>
                  <h3>Your information</h3>
                  <p>
                    {response.firstName} {response.lastName}
                  </p>
                  <p>{response.email}</p>
                  <hr />
                  <div class="radio-buttons">
                    <div class="radio-button">
                      <input
                        name="attending"
                        type="radio"
                        id="yesAttending"
                        value="yes"
                        required
                      >
                      </input>
                      <label for="attending">
                        {data.yesAttending}
                      </label>
                    </div>
                    <div class="radio-button">
                      <input
                        name="attending"
                        type="radio"
                        id="notAttending"
                        value="no"
                      >
                      </input>
                      <label for="attending">
                        {data.notAttending}
                      </label>
                    </div>
                  </div>
                  {
                    <div>
                      <label for="plusOne">{data.plusOne}</label>
                      <input
                        name="plusOne"
                        type="text"
                        placeholder={data.plusOnePlaceholder}
                      />
                    </div>
                  }
                  <div class="checkbox">
                    <label for="welcomeParty">
                      {data.welcomeParty}
                    </label>
                    <input name="welcomeParty" type="checkbox" />
                  </div>
                  <div class="checkbox">
                    <label for="afterParty">
                      {data.afterParty}
                    </label>
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
                  <input
                    name="id"
                    type="hidden"
                    value={data.pageId}
                  />
                  <button>{data.submit}</button>
                </form>
              )}
          </div>
        </section>
      </Layout>
    </>
  );
}
