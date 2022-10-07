import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";
import LanguageButton from "./LanguageButton.tsx";

interface LayoutProps {
    children: ComponentChildren;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="global.css" />
      </Head>
      <header><a href="/">SAVE THE DATE</a></header>
      <main>
        {children}
      </main>
      {/* <footer>
        <p>Made by <a href="https://github.com/OleSkaar/">Ole Skaar</a> with <a href="https://fresh.deno.dev/">Fresh.</a></p>
      </footer> */}
    </>
  );
}
