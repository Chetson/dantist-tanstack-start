import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Clock, MapPin, Phone } from 'lucide-react'

export const Route = createFileRoute('/_app/contacts/')({
	component: RouteComponent,
})

const contactInfo = {
	phones: ['8 (3522) 290-007'],
	email: 'pacientdantist@yandex.ru',
	hours: ['Пн–Пт: 09:00 – 19:00', 'Сб: 09:00 – 14:00', 'Вс: выходной день'],
	addresses: [
		{
			name: 'Клиника №1',
			address: 'г. Курган, ул. Коли Мяготина, д. 90',
		},
	],
}

function RouteComponent() {
	return (
		<div className="container mx-auto px-6 py-16 sm:px-12">
			<div className="mx-auto max-w-3xl">
				<h1 className="mb-4 text-3xl font-bold sm:text-4xl">Контакты</h1>
				<p className="mb-12 text-lg leading-relaxed text-muted-foreground">
					Свяжитесь с нами удобным способом. Мы всегда рады помочь вам.
				</p>

				<div className="space-y-6">
					{/* Телефоны */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Phone className="size-5 text-primary" />
								Телефоны
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-2">
							{contactInfo.phones.map((phone) => (
								<a
									key={phone}
									href={`tel:${phone.replace(/\s+/g, '')}`}
									className="block text-lg font-semibold text-primary transition hover:text-primary/80"
								>
									{phone}
								</a>
							))}
						</CardContent>
					</Card>

					{/* Режим работы */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<Clock className="size-5 text-primary" />
								Режим работы
							</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className="space-y-2 text-muted-foreground">
								{contactInfo.hours.map((h) => (
									<li key={h}>{h}</li>
								))}
							</ul>
						</CardContent>
					</Card>

					{/* Адреса */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<MapPin className="size-5 text-primary" />
								Адреса клиник
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							{contactInfo.addresses.map((addr) => (
								<div key={addr.name}>
									<h3 className="font-semibold">{addr.name}</h3>
									<p className="text-muted-foreground">{addr.address}</p>
								</div>
							))}
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
