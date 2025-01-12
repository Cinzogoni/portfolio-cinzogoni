import type { Metadata } from "next";

import "../[locale]/styles/globals.scss";
import styles from "../[locale]/styles/layout.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, Locale } from "src/i18n/routing";

import Sidebar from "../components/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Cinzogoni Portfolio",
  description: "A showcase of front-end projects and skills by Cinzogoni.",
  openGraph: {
    title: "Cinzogoni Portfolio",
    description: "Explore front-end development projects by Cinzogoni.",
    url: "",
    images: [
      {
        url: "",
        width: "1200",
        height: "630",
        alt: "Custom image",
      },
    ],
    type: "website",
    siteName: "Cinzogoni Portfolio",
    locale: "vi_VN",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className={cx("container")}>
            <div className={cx("sidebar")}>
              <Sidebar />
            </div>
            <main className={cx("content")}>{children}</main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
