import { config } from "https://deno.land/std@0.159.0/dotenv/mod.ts";
import { Head } from "https://deno.land/x/fresh@1.1.1/runtime.ts";
import { Handlers } from "https://deno.land/x/fresh@1.1.1/server.ts";
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm"
import Layout from "../components/Layout.tsx";

export const handler: Handlers = {
  async POST(req, ctx) {
    config({ export: true });
    const body = await req.formData();
    const files = body.getAll("photos");

    const supabaseUrl = Deno.env.get("SUPABASE_URL") as string;
    const supabaseKey = Deno.env.get("SUPABASE_KEY") as string;

    const supabase = createClient(supabaseUrl, supabaseKey, {});

    async function upload(file: FormDataEntryValue) {
      const { data, error } = await supabase.storage.from('photos').upload(file?.name, file, {})
      if (error) {
        console.log("Upload failed", error);
      } else {
        console.log("Upload succesful!")
      }
    }

    files?.forEach((file) => {
      try {
        upload(file);
      } catch {
        console.error(`Could not upload file with name: ${file?.name}`)
      }
    })

    const resp = await ctx.render();

    return resp;
  },
  
};

export default function Upload() {
  return (
    <>
      <Head>
        <title>Ole and Nae 2023 | Thanks for uploading!</title>
      </Head>
      <Layout>
        <section className="frame">
          <h1>Thanks for your upload!</h1>
        </section>
      </Layout>
    </>
  );
}