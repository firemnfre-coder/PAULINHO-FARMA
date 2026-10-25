import "./globals.css";

export const metadata = {
  title: "Drogaria Paulinho Farma",
  description: "Drogaria Paulinho Farma — qualidade tem nome!"
};

export default function RootLayout({ children }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}