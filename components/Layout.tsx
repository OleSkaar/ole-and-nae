import { asset, Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";
import LanguageButton from "../islands/LanguageButton.tsx";

interface LayoutProps {
  children: ComponentChildren;
  renderLanguageButton?: boolean;
}

export default function Layout({ children, renderLanguageButton = true }: LayoutProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href={asset("/global.css")} />
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
      </Head>
      {
        <header>
          <a href="/">SAVE THE DATE</a>
          {renderLanguageButton && <LanguageButton />}
        </header>
      }
      <main>
        {children}
      </main>
    </>
  );
}
