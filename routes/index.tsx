import Layout from "../components/Layout.tsx";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  const title = "Ole & Nae | Save the date";
  const description =
    "Save the date for Ole and Nae's wedding on July 1st 2023.";
  const image = "/osaka-castle.webp";

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="stylesheet" href="front-page.css" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`https://oleandnae2023.com/${image}`}
        />
      </Head>
      <Layout>
        <section class="frame">
          <h1>Ole & Nae</h1>
          <p class="heading-sub">are getting married!</p>
          <time>
            <strong>July 1st 2023</strong>
          </time>
          <p>Osaka Geihinkan, Japan</p>
          <img
            width="450"
            height="607"
            class="image"
            src={image}
            alt="A line drawing of Osaka Castle."
          />
          <p>Invitation to follow.</p>
          <p>Send us your email so we know how to reach you.</p>
          <form action="/thanks" method="POST">
            <input
              name="firstName"
              id="firstName"
              autoComplete="given-name"
              placeholder="First name"
              type="text"
              required
            />
            <input
              name="lastName"
              id="lastName"
              autoComplete="family-name"
              placeholder="Last name"
              type="text"
              required
            />
            <input
              name="email"
              type="email"
              id="email"
              autoComplete="email"
              placeholder="E-mail"
              required
            />
            <button>Submit</button>
          </form>
          <p>We hope you're able to attend!</p>
        </section>
      </Layout>
    </>
  );
}
