import Layout from "../components/Layout.tsx";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="front-page.css" />
      </Head>
      <Layout>
        <section class="card">
          <h1>Ole & Nae</h1>
          <p class="heading-sub">are getting married!</p>
          <div class="info">
            <time>
              <strong>July 1st 2023</strong>
            </time>
            <p>Osaka Geihinkan, Japan</p>
            <img class="image" src="/castle.png" />
          </div>
          <div class="info">
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
          </div>
        </section>
      </Layout>
    </>
  );
}
