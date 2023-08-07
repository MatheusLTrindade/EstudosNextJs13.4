import Link from 'next/link';
import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
	title: 'Front-End Insights',
	description: 'Mergulhe no mundo do Front-End: Receba as últimas tendências, dicas e truques toda semana!',
};

export default function RootLayout({ children }) {
	return (
		<html lang='pt-BR'>
			<body className={poppins.className}>
				<div className='flex min-h-screen flex-col items-center justify-between max-w-5xl mx-auto'>
					<header className='flex items-center justify-between w-full py-10'>
						<span className='text-2xl font-black cursor-default'>INSIGHTS</span>
						<nav className='flex gap-10'>
							<Link href='/'>início</Link>
							<Link href='/about'>sobre</Link>
							<Link href='/admin/subscribers'>inscritos</Link>
						</nav>
					</header>

					{children}

					<footer className='p-10'>
            <p>Feito com Next.js 13.4</p>
          </footer>
				</div>
			</body>
		</html>
	);
}
