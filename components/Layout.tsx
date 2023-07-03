import { asset, Head } from "$fresh/runtime.ts";
import { render } from "https://deno.land/x/fresh@1.1.1/src/server/render.ts";
import { ComponentChildren } from "preact";
import LanguageButton from "../islands/LanguageButton.tsx";

interface LayoutProps {
    children: ComponentChildren;
    renderHeader?: boolean;
    mainClass?: string;
}

export default function Layout({
    children,
    renderHeader = true,
    mainClass,
}: LayoutProps) {
    return (
        <>
            <Head>
                <link rel="stylesheet" href={asset("/global.css")} />
                <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
            </Head>
            {renderHeader && (
                <header>
                    {/* <a href="/">SAVE THE DATE</a> */}
                    <nav class="nav">
                        <ul>
                            <li>
                                <a href={"/"}>Home</a>
                            </li>
                            <li>
                                <a href={"/info"}>Info</a>
                            </li>
                            <li>
                                <a href={"/photos"}>Photos</a>
                            </li>
                        </ul>
                    </nav>
                    <LanguageButton />
                </header>
            )}
            <main class={mainClass}>{children}</main>
        </>
    );
}
