import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { ClipboardCheck, Heart, ShieldCheck, Smile, Zap } from 'lucide-react'

const benefits = [
	{
		title: 'Комплексный подход',
		description:
			'Лечим не симптомы, а причину проблемы — разрабатываем индивидуальный план лечения с учётом особенностей здоровья каждого пациента.',
		icon: <ShieldCheck className="size-6" />,
	},
	{
		title: 'Современные технологии',
		description:
			'Используем оборудование и материалы последнего поколения — это повышает точность диагностики и эффективность лечения.',
		icon: <Zap className="size-6" />,
	},
	{
		title: 'Безопасность',
		description:
			'Строго соблюдаем протоколы стерилизации и дезинфекции, чтобы исключить любые риски для здоровья.',
		icon: <Heart className="size-6" />,
	},
	{
		title: 'Комфорт',
		description:
			'Создаём доброжелательную атмосферу: от зоны ожидания до безболезненных процедур.',
		icon: <Smile className="size-6" />,
	},
	{
		title: 'Прозрачность',
		description:
			'Перед началом лечения подробно рассказываем о методах, сроках и стоимости — никаких неожиданных платежей.',
		icon: <ClipboardCheck className="size-6" />,
	},
]

export default function WhyUsSection() {
	return (
		<section className="py-16 sm:py-20">
			<div className="container mx-auto px-6 sm:px-12">
				<h2 className="mb-4 text-center text-2xl font-bold sm:text-3xl">
					Почему стоит выбрать нас?
				</h2>
				<p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-muted-foreground">
					Мы оказываем высококлассную медицинскую помощь при сложных
					стоматологических патологиях, сводя к минимуму возможные риски и
					обеспечивая долгосрочный результат.
				</p>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{benefits.map((benefit) => (
						<Card
							key={benefit.title}
							className="transition-shadow hover:shadow-md"
						>
							<CardHeader>
								<div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
									{benefit.icon}
								</div>
								<CardTitle className="text-base">{benefit.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm leading-relaxed text-muted-foreground">
									{benefit.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
