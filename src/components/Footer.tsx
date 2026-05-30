import { Link } from '@tanstack/react-router'

type FooterLinkItem =
	| { title: string; to: string; href?: never }
	| { title: string; to?: never; href: string }

const clinicLinks: FooterLinkItem[] = [
	{
		title: 'Главная',
		to: '/',
	},
	{
		title: 'О клинике',
		to: '/about',
	},
	{
		title: 'Врачи',
		to: '/doctors',
	},
	{
		title: 'Услуги',
		to: '/services',
	},
]

const patientLinks: FooterLinkItem[] = [
	{
		title: 'Контакты',
		to: '/contacts',
	},
	{
		title: 'Запись на приём',
		href: '#',
	},
	{
		title: 'Вопрос-ответ',
		href: '#',
	},
]

const infoLinks: FooterLinkItem[] = [
	{
		title: 'Контролирующие органы',
		to: '/about/regulators',
	},
	{
		title: 'Политика конфиденциальности',
		to: '/about/legal',
	},
	{
		title: 'Лицензии',
		to: '/about/license',
	},
]

function Logo() {
	return (
		<div className="w-full text-lg font-extrabold md:w-fit md:text-left">
			<span className="text-violet-500">Unique</span>{' '}
			<span className="dark:text-slate-400">Fund</span>
		</div>
	)
}

function FooterLink({ item }: { item: FooterLinkItem }) {
	if ('to' in item) {
		return (
			<Link
				className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
				to={item.to}
			>
				{item.title}
			</Link>
		)
	}

	return (
		<a
			className="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
			href={item.href}
			rel="noopener noreferrer"
			target="_blank"
		>
			{item.title}
		</a>
	)
}

export const Footer = () => {
	return (
		<footer className="mt-28 bg-slate-50 dark:bg-black">
			<div className="container mx-auto flex flex-col items-start space-y-12 px-8 pb-8 pt-12 md:flex-row md:space-y-0 md:space-x-12 md:px-12">
				<div className="flex w-full flex-col space-y-4 text-center md:w-2/5 md:text-left">
					<Logo />
					<p className="text-sm text-slate-600">
						Пн-пт 09:00 – 19:00
						<br />
						Сб 09:00 – 14:00
						<br />
						Вс – выходной день
						<br />
						Эл.почта для обращений: pacientdantist@yandex.ru
					</p>
				</div>
				<div className="w-full text-center text-slate-600 md:w-1/5 md:text-left">
					<div className="text-sm font-semibold">Клиника</div>
					<ul className="text-sm">
						{clinicLinks.map((item, index) => (
							<li className="pt-3" key={index}>
								<FooterLink item={item} />
							</li>
						))}
					</ul>
				</div>
				<div className="w-full text-center text-slate-600 md:w-1/5 md:text-left">
					<div className="text-sm font-semibold">Пациенту</div>
					<ul className="text-sm">
						{patientLinks.map((item, index) => (
							<li className="pt-3" key={index}>
								<FooterLink item={item} />
							</li>
						))}
					</ul>
				</div>
				<div className="w-full text-center text-slate-600 md:w-1/5 md:text-left">
					<div className="text-sm font-semibold text-slate-600">Информация</div>
					<ul className="text-sm">
						{infoLinks.map((item, index) => (
							<li className="pt-3" key={index}>
								<FooterLink item={item} />
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className="container mx-auto border-t border-slate-200 p-8 text-center text-sm text-slate-600 dark:border-slate-900 md:flex-row md:px-12">
				&copy; 2003 &mdash; {new Date().getFullYear()} Стоматологические клиники
				«Дантист». Все права защищены.
			</div>
		</footer>
	)
}
