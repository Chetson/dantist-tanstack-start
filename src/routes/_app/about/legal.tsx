import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Separator } from '~/components/ui/separator'

export const Route = createFileRoute('/_app/about/legal')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className="container mx-auto px-6 py-16 sm:px-12">
			<div className="mx-auto max-w-3xl">
				<h1 className="mb-8 text-3xl font-bold sm:text-4xl">
					Политика конфиденциальности
				</h1>

				<Card>
					<CardHeader>
						<CardTitle>Политика обработки персональных данных</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
						<p>
							Настоящая Политика конфиденциальности определяет порядок обработки
							и защиты персональных данных пациентов ООО «Дантист».
						</p>

						<Separator />

						<div className="space-y-3">
							<h3 className="font-semibold text-foreground">1. Сбор данных</h3>
							<p>
								Мы собираем только те персональные данные, которые необходимы
								для оказания медицинских услуг: ФИО, контактный телефон, адрес
								электронной почты, данные о состоянии здоровья.
							</p>
						</div>

						<div className="space-y-3">
							<h3 className="font-semibold text-foreground">
								2. Использование
							</h3>
							<p>
								Персональные данные используются исключительно для записи на
								приём, ведения медицинской документации и информирования о
								результатах лечения.
							</p>
						</div>

						<div className="space-y-3">
							<h3 className="font-semibold text-foreground">3. Защита</h3>
							<p>
								Мы принимаем все необходимые организационные и технические меры
								для защиты персональных данных от несанкционированного доступа,
								изменения, раскрытия или уничтожения.
							</p>
						</div>

						<div className="space-y-3">
							<h3 className="font-semibold text-foreground">
								4. Передача третьим лицам
							</h3>
							<p>
								Мы не передаём персональные данные пациентов третьим лицам, за
								исключением случаев, предусмотренных законодательством РФ.
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}
