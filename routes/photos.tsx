import { asset, Head } from "https://deno.land/x/fresh@1.1.1/runtime.ts";
import Layout from "../components/Layout.tsx";

export default function Photos() {
  const title = "Ole and Nae | Upload your photos!";
  const image = "/osaka-castle.webp";

  return (
    <>
      <Head>
        <title>{title}</title>

        <link rel="stylesheet" href={asset("/photos.css")} />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content={title} />
        <meta
          property="og:image"
          content={`https://oleandnae2023.com${image}`}
        />
      </Head>
      <Layout renderHeader={true} mainClass="outer-frame">
        <div class="container">
          <h1>Share your photos!</h1>
          <p>
            If you have any photos from the wedding you'd like to share, you can upload them here.
          </p>
          <form action={"/upload"} method="POST" encType="multipart/form-data">
            <label for="upload">Choose your images (up to 20)</label>
            <input
              type="file"
              id="upload"
              name="photos"
              accept=".jpg, .jpeg, .png, .heic"
              multiple
              max="20"
            />
            <button type="submit">Upload</button>
          </form>
        </div>
      </Layout>
    </>
  );
}
