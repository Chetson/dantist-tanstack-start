import { Link } from '@tanstack/react-router'
import { Button } from '~/components/ui/button'
import { Separator } from '~/components/ui/separator'

type FooterLinkItem =
	| { title: string; to: string; href?: never }
	| { title: string; to?: never; href: string }

const clinicLinks: FooterLinkItem[] = [
	{ title: 'Главная', to: '/' },
	{ title: 'О клинике', to: '/about' },
	{ title: 'Врачи', to: '/doctors' },
	{ title: 'Услуги', to: '/services' },
]

const patientLinks: FooterLinkItem[] = [
	{ title: 'Контакты', to: '/contacts' },
	{ title: 'Запись на приём', href: '#' },
	{ title: 'Вопрос-ответ', href: '#' },
]

const infoLinks: FooterLinkItem[] = [
	{ title: 'Контролирующие органы', to: '/about/regulators' },
	{ title: 'Политика конфиденциальности', to: '/about/legal' },
	{ title: 'Лицензии', to: '/about/license' },
]

function FooterLink({ item }: { item: FooterLinkItem }) {
	if ('to' in item) {
		return (
			<Link
				className="text-muted-foreground underline decoration-transparent underline-offset-4 transition hover:text-foreground hover:decoration-foreground"
				to={item.to}
			>
				{item.title}
			</Link>
		)
	}

	return (
		<a
			className="text-muted-foreground underline decoration-transparent underline-offset-4 transition hover:text-foreground hover:decoration-foreground"
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
		<footer className="mt-28 bg-muted/50">
			<div className="container mx-auto flex flex-col items-start gap-8 px-6 py-12 sm:px-12 md:flex-row">
				<div className="flex w-full flex-col gap-4 text-center md:w-2/5 md:text-left">
					<div className="text-lg font-extrabold">
						<span className="text-primary">Дантист</span>
					</div>
					<p className="text-sm text-muted-foreground">
						Пн-пт 09:00 – 19:00
						<br />
						Сб 09:00 – 14:00
						<br />
						Вс – выходной день
						<br />
						Эл.почта для обращений: pacientdantist@yandex.ru
					</p>
				</div>

				<FooterLinkGroup title="Клиника" links={clinicLinks} />
				<FooterLinkGroup title="Пациенту" links={patientLinks} />
				<FooterLinkGroup title="Информация" links={infoLinks} />
			</div>

			<Separator />

			<div className="container mx-auto px-6 py-8 text-center text-sm text-muted-foreground sm:px-12">
				&copy; 2003 &mdash; {new Date().getFullYear()} Стоматологические клиники
				«Дантист». Все права защищены.
			</div>
		</footer>
	)
}

function FooterLinkGroup({
	title,
	links,
}: {
	title: string
	links: FooterLinkItem[]
}) {
	return (
		<div className="w-full text-center md:w-1/5 md:text-left">
			<div className="text-sm font-semibold">{title}</div>
			<ul className="text-sm">
				{links.map((item, index) => (
					<li className="pt-3" key={index}>
						<FooterLink item={item} />
					</li>
				))}
			</ul>
		</div>
	)
}
