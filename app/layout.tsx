import '../styles/globals.css';
import { fetchSocialIcons } from '@/utils/fetchSocialIcons';
import { Header, Providers } from '@/components';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const socialIcons = await fetchSocialIcons();
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <Header socialIcons={socialIcons} />
          <main className="bg-primary-white overflow-hidden overflow-y-scroll text-zinc-900 scrollbar-hide dark:bg-zinc-900 dark:text-white">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
