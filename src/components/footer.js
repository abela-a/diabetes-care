import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
    return (
        <>
            <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4 md:justify-between justify-center">
                <aside className="items-center">
                    <Logo />
                </aside>

                <nav className="md:place-self-center md:justify-self-end">
                    Know your risk, know your response.
                </nav>
            </footer>
        </>
    );
}
