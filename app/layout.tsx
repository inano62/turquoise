import "./globals.css";
import { Header } from "@/components/ui/Header";

export default function RootLayout({ children }) {
    return (
        <html lang="ja">
        <body>
        <Header />
        {children}
        </body>
        </html>
    );
}
