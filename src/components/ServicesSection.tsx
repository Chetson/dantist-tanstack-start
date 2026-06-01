import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '~/components/ui/card'
import { CheckCircle } from 'lucide-react'

const services = [
	{
		title: 'Терапевтическая стоматология',
		description: 'Лечение кариеса и его осложнений, восстановление зубов.',
	},
	{
		title: 'Детская стоматология',
		description:
			'Бережный подход и комфортная атмосфера для маленьких пациентов.',
	},
	{
		title: 'Ортопедическая стоматология',
		description:
			'Протезирование и реставрация зубов с использованием современных материалов.',
	},
	{
		title: 'Хирургия и имплантология',
		description: 'Удаление зубов, костная пластика, установка имплантатов.',
	},
	{
		title: 'Профессиональная гигиена',
		description:
			'Профилактика заболеваний дёсен, удаление налёта и зубного камня.',
	},
]

export default function ServicesSection() {
	return (
		<section className="bg-muted/50 py-16 sm:py-20">
			<div className="container mx-auto px-6 sm:px-12">
				<h2 className="mb-4 text-center text-2xl font-bold sm:text-3xl">
					Наши направления
				</h2>
				<p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
					Мы предлагаем полный спектр стоматологических услуг
				</p>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{services.map((service) => (
						<Card
							key={service.title}
							className="transition-shadow hover:shadow-md"
						>
							<CardHeader>
								<CheckCircle className="mb-2 size-5 text-primary" />
								<CardTitle className="text-base">{service.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription>{service.description}</CardDescription>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
