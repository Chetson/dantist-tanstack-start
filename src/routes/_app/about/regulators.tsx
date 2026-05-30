import { createFileRoute } from '@tanstack/react-router'

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
			<h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-slate-100">
				{title}
			</h2>
			{children}
		</section>
	)
}

function BodyCard({ body }: { body: Regulator }) {
	return (
		<div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
			<h3 className="mb-1 text-lg font-bold text-slate-800 dark:text-slate-100">
				{body.title}
			</h3>

			{body.fullName && (
				<p className="mb-3 text-sm text-slate-600 dark:text-slate-400">
					{body.fullName}
				</p>
			)}

			<h4 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
				Основные функции:
			</h4>
			<ul className="mb-4 list-inside list-disc space-y-1 text-sm text-slate-600 dark:text-slate-400">
				{body.functions.map((fn) => (
					<li key={fn}>{fn}</li>
				))}
			</ul>

			<div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800">
				<h4 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
					Контакты
				</h4>
				<div className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
					{body.address && <p>📍 {body.address}</p>}
					{body.phone && <p>📞 {body.phone}</p>}
					{body.site && (
						<p>
							🌐{' '}
							<a
								className="text-pink-500 underline transition hover:text-pink-600"
								href={body.site}
								rel="noopener noreferrer"
								target="_blank"
							>
								{body.siteLabel ?? body.site}
							</a>
						</p>
					)}
				</div>
			</div>
		</div>
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
			<h3 className="mb-3 text-base font-semibold text-slate-700 dark:text-slate-300">
				{title}
			</h3>
			<div className="overflow-x-auto">
				<table className="w-full text-left text-sm">
					<thead>
						<tr className="border-b border-slate-200 dark:border-slate-700">
							<th className="pb-2 pr-4 font-semibold text-slate-600 dark:text-slate-400">
								Документ
							</th>
							<th className="pb-2 font-semibold text-slate-600 dark:text-slate-400">
								Ссылка
							</th>
						</tr>
					</thead>
					<tbody>
						{items.map((doc) => (
							<tr
								key={doc.title}
								className="border-b border-slate-100 dark:border-slate-800"
							>
								<td className="py-3 pr-4 text-slate-700 dark:text-slate-300">
									{doc.title}
								</td>
								<td className="py-3">
									<a
										className="text-pink-500 underline transition hover:text-pink-600"
										href={doc.url}
										rel="noopener noreferrer"
										target="_blank"
									>
										Ссылка
									</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

function RouteComponent() {
	return (
		<main className="container mx-auto px-8 py-16 sm:px-12">
			<h1 className="mb-2 text-3xl font-bold text-slate-800 dark:text-slate-100 sm:text-4xl">
				Контролирующие органы в сфере здравоохранения
			</h1>
			<p className="mb-2 text-lg font-medium text-slate-500 dark:text-slate-400">
				Важная информация для пациентов
			</p>
			<p className="mb-12 max-w-3xl leading-relaxed text-slate-600 dark:text-slate-400">
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
