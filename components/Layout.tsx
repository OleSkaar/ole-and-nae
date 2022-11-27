import { asset, Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";
import LanguageButton from "../islands/LanguageButton.tsx";

interface LayoutProps {
  children: ComponentChildren;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href={asset("/global.css")} />
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
      </Head>
      {
        <header>
          <a href="/">SAVE THE DATE</a>
          <LanguageButton />
        </header>
      }
      <main>
        {children}
      </main>
    </>
  );
}
