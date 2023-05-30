import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Music World",
  description: "Enjoy the taste of unlimited music",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
