import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";

interface LayoutProps {
    children: ComponentChildren;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="global.css" />
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
      </Head>
      {<header><a href="/">SAVE THE DATE</a></header>}
      <main>
        {children}
      </main>
    </>
  );
}
