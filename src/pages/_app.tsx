import "@/pages/globals.scss";
import "@/pages/theme.scss";
import type { AppProps } from "next/app";
import '../styles/globals.css'
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { ThemeProvider } from "next-themes";

import en from "@/i18n/en.json";
import ro from "@/i18n/ro.json";
import kg from "@/i18n/kg.json";

const messages: any = {
	en,
	ro,
	kg
};

function getDirection(locale: any): "ltr" {
	return "ltr";
}

export default function App({ Component, pageProps }: AppProps) {
	const { locale }: any = useRouter();

	return (
		// @ts-ignore
		<IntlProvider locale={locale} messages={messages[locale]}>
			<div className="bg-black">sdfggsdfgsd</div>
			<ThemeProvider>
				<Component {...pageProps} dir={getDirection(locale)} />
			</ThemeProvider>
		</IntlProvider>
	);
}
