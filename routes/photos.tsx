import { asset, Head } from "https://deno.land/x/fresh@1.1.1/runtime.ts";
import Layout from "../components/Layout.tsx";

export default function Photos() {
  const title = "Ole and Nae 2023 | Upload your photos!";
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
          <h1>Upload your photos!</h1>
          <p>
            This is a shared photo album for guests to upload their photos from
            today.
          </p>
          <p>Images will be published after the wedding 😃</p>
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
