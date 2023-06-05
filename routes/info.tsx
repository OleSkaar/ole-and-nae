import { asset, Head } from "https://deno.land/x/fresh@1.1.1/runtime.ts";
import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.1/server.ts";
import Information from "../components/Information.tsx";
import Layout from "../components/Layout.tsx";
import { Japanese, LanguageParameter } from "../components/translations.tsx";

interface Data {
  isJapanese: boolean;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const parameter = `?${LanguageParameter}=${Japanese}`;
    const isJapanese = req.url.includes(parameter);

    return ctx.render({ isJapanese });
  },
};

export default function Info({ data }: PageProps<Data>) {
  const description = "Information about Ole and Nae's wedding";
  const title = "Ole and Nae | Information";
  const image = "/osaka-castle.webp";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`https://oleandnae2023.com${image}`}
        />
      </Head>
      <Layout>
        <div class="frame">
          <Information
            isJapanese={data.isJapanese}
          />
        </div>
      </Layout>
    </>
  );
}
