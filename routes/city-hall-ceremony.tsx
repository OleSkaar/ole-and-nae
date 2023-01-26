import Layout from "../components/Layout.tsx";
import { asset, Head } from "$fresh/runtime.ts";
import Fleuron from "../components/Fleuron.tsx";

export default function CeremonyInvite() {
  const title = "Ole and Nae 2023 | City Hall Ceremony";
  const description =
    "An invitation to Ole and Nae's wedding ceremony at Oslo City Hall.";
  const image = "/osaka-castle.webp";

  return (
    <>
      <Head>
        <title>{title}</title>

        <link rel="stylesheet" href={asset("/city-hall-invitation.css")} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`https://oleandnae2023.com${image}`}
        />
      </Head>
      <Layout renderHeader={false} mainClass="outer-frame">
        <div class="booklet">
          <section class="frame invitation-text">
            <h1 class="decorative-heading">You are cordially invited</h1>
            <p>to our wedding ceremony.</p>
            <address>The Munch Room</address>
            <address>Oslo City Hall</address>
            <time>April 29 2023, 14:30</time>
            <p>
              This will be a short, official ceremony, with our family,
              groomsmen, and bridesmaids.
            </p>
            <Fleuron />
            <p>
              After the ceremony, we will walk over to{" "}
              <a href="https://www.engebret-cafe.no/">Engebret Café</a>{" "}
              and enjoy a three-course dinner.
            </p>
            <p>
              <em>
                Please let us know if you have any dietary considerations we
                should inform the restaurant about.
              </em>
            </p>
            <p>We hope to see you there!</p>
            <p>
              Best, <br />Ole & Nae
            </p>
          </section>
          <section class="frame invitation-image">
            <img src="https://ik.imagekit.io/ixlnm8yvt/DSC_0888.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674760285594" />
          </section>
        </div>
      </Layout>
    </>
  );
}
