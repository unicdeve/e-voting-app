import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/css/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta
					name='viewport'
					content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
				/>
				<meta name='description' content='E-voting' />
				<meta name='keywords' content='Keywords' />
				<title>E-voting app</title>

				<meta name='theme-color' content='#2B7C54' />
			</Head>
			<div className='my-app-container'>
				<main>
					<Component {...pageProps} />
				</main>
			</div>
		</>
	);
}

export default MyApp;
