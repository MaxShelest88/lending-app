import '../styles/globals.css';
import { Footer, Header, Providers } from '@/components';
import { fetchFromSanity } from '@/utils/fetchFromSanity';
import { Analytics } from '@vercel/analytics/react';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const socialIcons = await fetchFromSanity<SocialIcon[]>(`
  *[_type=="socialIcons"]{
  		_id, name, url
	}`);
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <Header socialIcons={socialIcons} />
          <main className="bg-primary-white overflow-hidden overflow-y-scroll text-zinc-900 scrollbar-hide dark:bg-zinc-900 dark:text-white">
            {children}
          </main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
