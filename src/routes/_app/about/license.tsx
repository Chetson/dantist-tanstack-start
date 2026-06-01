import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Separator } from '~/components/ui/separator'
import { Download, ShieldCheck } from 'lucide-react'
import { Button } from '~/components/ui/button'

export const Route = createFileRoute('/_app/about/license')({
	component: RouteComponent,
})

const licenses = [
	{
		number: 'Л041-01156-45/00323582',
		date: '26 декабря 2019 г.',
		org: 'Департамент здравоохранения Курганской области',
		image: '/licenses/medical-license.png',
		file: '/licenses/additional-license.pdf',
		fileSize: '382 КБ',
		activities: [
			'Доврачебная медицинская помощь',
			'Врачебная медицинская помощь',
			'Стоматология терапевтическая',
			'Стоматология ортопедическая',
			'Стоматология хирургическая',
			'Рентгенологические исследования',
		],
	},
]

function RouteComponent() {
	return (
		<div className="container mx-auto px-6 py-16 sm:px-12">
			<div className="mx-auto max-w-3xl">
				<h1 className="mb-8 text-3xl font-bold sm:text-4xl">Лицензии</h1>

				<div className="space-y-6">
					{licenses.map((license) => (
						<Card key={license.number}>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<ShieldCheck className="size-5 text-primary" />
									Лицензия № {license.number}
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div>
									<img
										src={license.image}
										alt={`Лицензия № ${license.number}`}
										className="aspect-2/3 object-cover"
									/>
								</div>
								<div>
									<a href={license.file} download>
										<Button variant="link">
											<Download className="size-4" />
											Скачать приложение к лицензии
											<span className="ml-1 text-xs text-muted-foreground">
												({license.fileSize})
											</span>
										</Button>
									</a>
								</div>
								<div className="space-y-2 text-sm">
									<div className="flex justify-between">
										<span className="text-muted-foreground">Дата выдачи:</span>
										<span className="font-medium">{license.date}</span>
									</div>
									<div className="flex justify-between">
										<span className="text-muted-foreground">
											Выдавший орган:
										</span>
										<span className="max-w-[60%] text-right font-medium">
											{license.org}
										</span>
									</div>
								</div>

								<Separator />

								<div>
									<h3 className="mb-2 text-sm font-semibold">
										Виды деятельности:
									</h3>
									<ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
										{license.activities.map((a) => (
											<li key={a}>{a}</li>
										))}
									</ul>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</div>
	)
}
