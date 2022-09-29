import Layout from "../components/Layout.tsx";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="front-page.css" />
      </Head>
      <Layout>
        <section class="intro">
          <h1>Save the date!</h1>
          <p>For our wedding</p>
          <p>Ole Skaar & Nae Nishimura</p>
          <time>July 1, 2023</time>
        </section>
        <address>
            2 Osakajo,<br />
            Chuo Ward,<br />
            Osaka,<br />
            540-0002,<br />
            Japan
          </address>
        <p>Invitation to follow.</p>
        <a href="#">Add to calendar</a>
      </Layout>
    </>
  );
}
