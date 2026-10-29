import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { siteConfig } from '../data/siteConfig';

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'CK Coin',
    'CK',
    'The Crown Is Coming',
    'Gorilla Mascot Coin',
    'Cryptocurrency',
    'Community Token',
    'Crypto',
    'Static Crypto Website',
  ],
  authors: [{ name: 'CK Coin Community' }],
  creator: 'CK Coin Community',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/assets/ck-hero-reference.jpg',
        width: 1024,
        height: 1024,
        alt: 'CK Coin Royal Purple Gorilla Mascot wearing Gold Crown & Sunglasses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ['/assets/ck-hero-reference.jpg'],
  },
  icons: {
    icon: '/assets/ck-hero-reference.jpg',
  },
};

export const viewport = {
  themeColor: '#080510',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/ck-hero-reference.jpg" type="image/jpeg" />
      </head>
      <body>
        <Header />
        <main className="main-content" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
