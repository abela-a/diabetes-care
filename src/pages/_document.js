import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en" data-theme="winter">
            <Head />
            <body className="antialiased bg-gradient-to-b from-sky-100 to-sky-200">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
