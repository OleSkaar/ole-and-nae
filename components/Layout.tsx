import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";

export default function Layout(children: ComponentChildren) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="global.css" />
      </Head>
      <main>
        {children}
      </main>
    </>
  );
}
