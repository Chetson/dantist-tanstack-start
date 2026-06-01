import { Card, CardContent } from '~/components/ui/card'
import { CheckCircle } from 'lucide-react'

const developmentItems = [
	{ title: 'Всероссийские и международные симпозиумы' },
	{ title: 'Профильные конференции и выставки' },
	{ title: 'Специализированные курсы и тренинги' },
	{ title: 'Новейшие методики и технологии' },
]

export default function DevelopmentSection() {
	return (
		<section className="bg-muted/50 py-16 sm:py-20">
			<div className="container mx-auto px-6 sm:px-12">
				<div className="mx-auto max-w-3xl">
					<h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl">
						Постоянное развитие
					</h2>
					<p className="mb-8 text-center text-lg leading-relaxed text-muted-foreground">
						Наши врачи регулярно повышают квалификацию:
					</p>

					<div className="grid gap-4 sm:grid-cols-2">
						{developmentItems.map((item) => (
							<Card
								key={item.title}
								className="flex items-start gap-3 p-5 shadow-sm"
							>
								<CheckCircle className="mt-0.5 size-5 shrink-0 text-primary" />
								<span>{item.title}</span>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
