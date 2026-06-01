import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '~/components/ui/table'
import { MapPin, Phone, Globe } from 'lucide-react'

export const Route = createFileRoute('/_app/about/regulators')({
	component: RouteComponent,
})

type Regulator = {
	title: string
	fullName?: string
	functions: string[]
	address?: string
	phone?: string
	site?: string
	siteLabel?: string
}

const regulatoryBodies: Regulator[] = [
	{
		title: 'Территориальный орган Росздравнадзора',
		fullName:
			'Территориальный орган Федеральной службы по надзору в сфере здравоохранения по Курганской области',
		functions: [
			'Контроль качества и безопасности медицинской деятельности',
			'Надзор за соблюдением стандартов медицинской помощи',
			'Лицензионный контроль медицинских организаций',
			'Контроль за обращением лекарственных средств',
		],
		address: '640018, г. Курган, ул. Ленина, д. 5, оф. 501',
		phone: '8 (3522) 46-68-66',
		site: 'https://45reg.roszdravnadzor.gov.ru',
		siteLabel: '45reg.roszdravnadzor.gov.ru',
	},
	{
		title: 'Управление Роспотребнадзора',
		fullName:
			'Управление Федеральной службы по надзору в сфере защиты прав потребителей и благополучия человека по Курганской области',
		functions: [
			'Защита прав потребителей медицинских услуг',
			'Санитарно-эпидемиологический надзор',
			'Контроль соблюдения санитарных норм в медицинских организациях',
		],
		address: '640020, г. Курган, ул. Куйбышева, д. 46',
		phone: '8 (3522) 46-63-42',
		site: 'http://45.rospotrebnadzor.ru',
		siteLabel: '45.rospotrebnadzor.ru',
	},
	{
		title: 'Департамент здравоохранения Курганской области',
		fullName: 'Департамент здравоохранения Курганской области',
		functions: [
			'Организация оказания медицинской помощи на территории области',
			'Реализация территориальной программы государственных гарантий',
			'Контроль деятельности государственных медицинских организаций',
		],
		address: '640000, г. Курган, ул. Томина, д. 49',
		phone: '8 (3522) 49-55-00',
		site: 'https://kurgan-obl.ru/zdravohranenie',
		siteLabel: 'kurgan-obl.ru',
	},
	{
		title: 'Прокуратура Курганской области',
		fullName: undefined,
		functions: [
			'Надзор за соблюдением прав граждан в сфере здравоохранения',
			'Проверка исполнения законодательства медицинскими организациями',
		],
		address: '640000, г. Курган, ул. Красина, д. 57',
		phone: '8 (3522) 49-56-00',
	},
]

const documents = {
	federal: [
		{
			title:
				'Федеральный закон от 21.11.2011 № 323-ФЗ «Об основах охраны здоровья граждан в Российской Федерации»',
			url: 'https://docs.cntd.ru/document/902312566',
		},
		{
			title: 'Закон РФ от 07.02.1992 № 2300-1 «О защите прав потребителей»',
			url: 'https://docs.cntd.ru/document/9005388',
		},
	],
	government: [
		{
			title:
				'Постановление Правительства РФ от 04.10.2012 № 1006 «Об утверждении Правил предоставления медицинскими организациями платных медицинских услуг»',
			url: 'https://docs.cntd.ru/document/902374618',
		},
	],
	regional: [
		{
			title:
				'Постановление Правительства Курганской области от 30.12.2016 № 451 «О Территориальной программе государственных гарантий бесплатного оказания гражданам на территории Курганской области медицинской помощи»',
			url: 'https://docs.cntd.ru/document/445080489',
		},
	],
}

function Section({
	title,
	children,
}: {
	title: string
	children: React.ReactNode
}) {
	return (
		<section className="mb-12">
			<h2 className="mb-6 text-2xl font-bold">{title}</h2>
			{children}
		</section>
	)
}

function BodyCard({ body }: { body: Regulator }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{body.title}</CardTitle>
				{body.fullName && (
					<p className="text-sm text-muted-foreground">{body.fullName}</p>
				)}
			</CardHeader>
			<CardContent className="space-y-4">
				<div>
					<h4 className="mb-2 text-sm font-semibold">Основные функции:</h4>
					<ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
						{body.functions.map((fn) => (
							<li key={fn}>{fn}</li>
						))}
					</ul>
				</div>

				<Card className="bg-muted/50 shadow-none">
					<CardContent className="p-4 space-y-1 text-sm">
						<h4 className="font-semibold">Контакты</h4>
						{body.address && (
							<p className="flex items-center gap-1.5 text-muted-foreground">
								<MapPin className="size-3.5 shrink-0" /> {body.address}
							</p>
						)}
						{body.phone && (
							<p className="flex items-center gap-1.5 text-muted-foreground">
								<Phone className="size-3.5 shrink-0" /> {body.phone}
							</p>
						)}
						{body.site && (
							<p className="flex items-center gap-1.5">
								<Globe className="size-3.5 shrink-0 text-muted-foreground" />
								<a
									className="text-primary underline transition hover:text-primary/80"
									href={body.site}
									rel="noopener noreferrer"
									target="_blank"
								>
									{body.siteLabel ?? body.site}
								</a>
							</p>
						)}
					</CardContent>
				</Card>
			</CardContent>
		</Card>
	)
}

function DocTable({
	title,
	items,
}: {
	title: string
	items: { title: string; url: string }[]
}) {
	return (
		<div className="mb-6">
			<h3 className="mb-3 text-base font-semibold">{title}</h3>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Документ</TableHead>
						<TableHead className="w-[100px]">Ссылка</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{items.map((doc) => (
						<TableRow key={doc.title}>
							<TableCell className="whitespace-normal">{doc.title}</TableCell>
							<TableCell>
								<a
									className="text-primary underline transition hover:text-primary/80"
									href={doc.url}
									rel="noopener noreferrer"
									target="_blank"
								>
									Ссылка
								</a>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}

function RouteComponent() {
	return (
		<main className="container mx-auto px-6 py-16 sm:px-12">
			<h1 className="mb-2 text-3xl font-bold sm:text-4xl">
				Контролирующие органы в сфере здравоохранения
			</h1>
			<p className="mb-2 text-lg font-medium text-muted-foreground">
				Важная информация для пациентов
			</p>
			<p className="mb-12 max-w-3xl leading-relaxed text-muted-foreground">
				Уважаемые пациенты! Ниже представлены контролирующие органы, которые
				осуществляют надзор за деятельностью медицинских организаций в
				Курганской области. Вы можете обратиться в эти инстанции по вопросам
				соблюдения законодательства в сфере здравоохранения, защиты прав
				пациентов, качества оказания медицинской помощи.
			</p>

			<Section title="Контролирующие органы">
				<div className="grid gap-6 lg:grid-cols-2">
					{regulatoryBodies.map((body) => (
						<BodyCard key={body.title} body={body} />
					))}
				</div>
			</Section>

			<Section title="Нормативно-правовые акты в сфере здравоохранения">
				<DocTable title="Федеральные законы" items={documents.federal} />
				<DocTable
					title="Постановления Правительства"
					items={documents.government}
				/>
				<DocTable title="Региональные документы" items={documents.regional} />
			</Section>
		</main>
	)
}
