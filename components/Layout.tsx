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
      <header><a href="/">💍 Ole + Nae</a></header>
      <main>
        {children}
      </main>
      <footer>
        <hr />
      </footer>
    </>
  );
}
