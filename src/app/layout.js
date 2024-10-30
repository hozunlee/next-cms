import { exo2, orbitron } from "./fonts";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
    title: {
        default: "Hojun Gamer",
        template: "%s | Hojun Gamer",
    },

    description: "Hojun's game reviews",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${exo2.variable} ${orbitron.variable}`}>
            <body className="px-4 py-2 flex flex-col min-h-screen bg-fuchsia-50">
                <header>
                    <NavBar />
                </header>
                <main className="py-3 grow">{children}</main>
                <footer className="text-center text-xs py-3 border-t">
                    [footer]
                </footer>
            </body>
        </html>
    );
}
