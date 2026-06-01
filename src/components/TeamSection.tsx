import { Card, CardContent } from '~/components/ui/card'
import { Badge } from '~/components/ui/badge'

const specialists = [
	{ title: 'Стоматологи-терапевты', note: 'в т.ч. детские' },
	{ title: 'Ортопеды' },
	{ title: 'Хирурги', note: 'в т.ч. хирург-имплантолог' },
]

export default function TeamSection() {
	return (
		<section className="py-16 sm:py-20">
			<div className="container mx-auto px-6 sm:px-12">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="mb-6 text-2xl font-bold sm:text-3xl">
						Команда профессионалов
					</h2>
					<p className="mb-8 text-lg leading-relaxed text-muted-foreground">
						У нас ведут приём опытные специалисты. Благодаря широкому спектру
						компетенций наших врачей вы можете получить комплексную консультацию
						по лечению, протезированию, удалению или имплантации.
					</p>

					<div className="flex flex-wrap justify-center gap-4">
						{specialists.map((spec) => (
							<Card key={spec.title} className="px-6 py-4 shadow-sm">
								<CardContent className="p-0 text-center">
									<p className="font-semibold">{spec.title}</p>
									{spec.note && (
										<Badge variant="secondary" className="mt-1">
											{spec.note}
										</Badge>
									)}
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
