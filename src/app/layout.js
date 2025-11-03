import { Providers } from "./providers";

export const metadata = {
  title: "Naijabreads",
  description: "Online bakery selling freshly baked breads",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
