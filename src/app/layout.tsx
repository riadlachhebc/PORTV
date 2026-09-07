import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalCTA from "@/components/GlobalCTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iptvportugaltv.net"),
  title: "IPTV Portugal — Melhor Serviço IPTV 4K | Lista IPTV Premium | Teste Grátis",
  description: "O melhor IPTV em Portugal em 2026. Lista IPTV completa com canais ao vivo em 4K. Melhor IPTV com canais portugueses, filmes e séries. Compre IPTV Portugal com teste grátis.",
  keywords: "iptv portugal, melhor iptv portugal, lista iptv, serviço iptv, melhor serviço iptv, comprar iptv portugal, assinatura iptv portugal, iptv 4k, canais portugueses, canais ao vivo, iptv premium",
  openGraph: {
    title: "IPTV Portugal — Melhor Serviço IPTV 4K | Lista IPTV Premium",
    description: "O melhor IPTV em Portugal em 2026. Lista IPTV completa com canais ao vivo em 4K.",
    url: "https://iptvportugaltv.net",
    type: "website",
    locale: "pt_PT",
    siteName: "IPTV Portugal TV",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Portugal — Melhor Serviço IPTV 4K | Lista IPTV Premium",
    description: "O melhor IPTV em Portugal em 2026. Lista IPTV completa com canais ao vivo em 4K.",
  }
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "IPTV Portugal TV",
  "url": "https://iptvportugaltv.net",
  "description": "O melhor serviço IPTV Portugal com servidores de alto desempenho e suporte 24/7.",
  "knowsAbout": ["IPTV", "Streaming", "Canais Portugueses", "4K Ultra HD", "EPG"]
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "IPTV Portugal TV",
  "url": "https://iptvportugaltv.net",
  "description": "O Melhor IPTV Portugal em 2026. Canais em 4K.",
  "inLanguage": "pt-PT"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-PT"
      className={`dark ${inter.variable} ${plusJakartaSans.variable} scroll-smooth antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script id="material-symbols-loader" strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var l1 = document.createElement('link'); l1.rel = 'stylesheet'; l1.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap'; document.head.appendChild(l1);
              var l2 = document.createElement('link'); l2.rel = 'stylesheet'; l2.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap'; document.head.appendChild(l2);
            `
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="bg-obsidian text-slate-200 selection:bg-emerald-500 selection:text-white flex flex-col min-h-screen">
        <Header />
        {children}
        <GlobalCTA />
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
