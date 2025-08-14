// This file is no longer needed as the project has been converted to static HTML.
// The main content is now in /public/index.html.
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Static HTML Page',
  description: 'This project has been converted to static HTML.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
