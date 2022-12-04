import Layout from "../components/Layout.tsx";
import { asset, Head } from "$fresh/runtime.ts";
import { Handlers } from "https://deno.land/x/fresh@1.1.1/server.ts";
import {
  enHomePageTranslations,
  Japanese,
  jpHomePageTranslations,
  LanguageParameter,
} from "../components/translations.ts";

import { PageProps } from "$fresh/server.ts";

export interface HomePageTranslations {
  titleTag: string;
  metaDescription: string;
  mainHeading: string;
  headingSub: string;
  date: string;
  locationLine1: string;
  locationLine2?: string;
  invitationToFollow: string;
  sendUsYourEmail: string;
  firstName: string;
  lastName: string;
  email: string;
  submit: string;
  weHopeYouCanAttend: string;
}

interface Data extends HomePageTranslations {
  languageParameter: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const parameter = `?${LanguageParameter}=${Japanese}`;
    const translations = req.url.includes(parameter)
      ? jpHomePageTranslations
      : enHomePageTranslations;

    const languageParameter = req.url.includes(parameter) ? parameter : '';
    
    return ctx.render({languageParameter, ...translations});
  },
};

export default function Home(props: PageProps<Data>) {
  const { data } = props;
  const title = data.titleTag;
  const description = data.metaDescription;
  const image = "/osaka-castle.webp";

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="stylesheet" href={asset("front-page.css")} />
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
          <h1 class="decorative-heading">{data.mainHeading}</h1>
          <p class="heading-sub">{data.headingSub}</p>
          <time>
            <strong>{data.date}</strong>
          </time>
          <p>{data.locationLine1}{data?.locationLine2 && <br/>}{data?.locationLine2}</p>
          <img
            width="450"
            height="607"
            class="image"
            src={image}
            alt="A line drawing of Osaka Castle."
          />
          <p>{data.invitationToFollow}</p>
          <p>{data.sendUsYourEmail}</p>
          <form action={`/thanks${data.languageParameter}`} method="POST">
            <input
              name="firstName"
              autoComplete="given-name"
              placeholder={data.firstName}
              type="text"
              required
            />
            <input
              name="lastName"
              autoComplete="family-name"
              placeholder={data.lastName}
              type="text"
              required
            />
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder={data.email}
              required
            />
            <button>{data.submit}</button>
          </form>
          <p>{data.weHopeYouCanAttend}</p>
        </section>
      </Layout>
    </>
  );
}
