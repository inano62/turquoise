import "./globals.css";
import BrandSwitcher from "@/components/ui/BrandSwitcher";

export default function RootLayout({ children }: any) {
  return (
    <html lang="ja">
      <body>
        <BrandSwitcher />
        {children}
      </body>
    </html>
  );
}