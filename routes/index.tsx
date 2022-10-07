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
          <section class="intro">
            <h1>Ole & Nae</h1>
            <p class="heading-aside">are getting married!</p>
            <div class="info">
              <time>
                <strong>July 1st 2023</strong>
              </time>
              <p>Osaka Gehisinkan, Japan</p>
              <img src="/castle.png" />
            </div>
            <div class="info fine-print">
              <p>Invitation to follow.</p>
              <p>We hope you're able to attend!</p>
            </div>
            {/* <button class="add-to-calendar" href="#">Add to calendar</button> */}
          </section>
        </section>
      </Layout>
    </>
  );
}
