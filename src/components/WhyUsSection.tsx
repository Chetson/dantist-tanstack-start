const benefits = [
	{
		title: 'Комплексный подход',
		description:
			'Лечим не симптомы, а причину проблемы — разрабатываем индивидуальный план лечения с учётом особенностей здоровья каждого пациента.',
		icon: (
			<svg
				className="h-6 w-6"
				fill="none"
				stroke="currentColor"
				strokeWidth={2}
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
				/>
			</svg>
		),
	},
	{
		title: 'Современные технологии',
		description:
			'Используем оборудование и материалы последнего поколения — это повышает точность диагностики и эффективность лечения.',
		icon: (
			<svg
				className="h-6 w-6"
				fill="none"
				stroke="currentColor"
				strokeWidth={2}
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M13 10V3L4 14h7v7l9-11h-7z"
				/>
			</svg>
		),
	},
	{
		title: 'Безопасность',
		description:
			'Строго соблюдаем протоколы стерилизации и дезинфекции, чтобы исключить любые риски для здоровья.',
		icon: (
			<svg
				className="h-6 w-6"
				fill="none"
				stroke="currentColor"
				strokeWidth={2}
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
				/>
			</svg>
		),
	},
	{
		title: 'Комфорт',
		description:
			'Создаём доброжелательную атмосферу: от зоны ожидания до безболезненных процедур.',
		icon: (
			<svg
				className="h-6 w-6"
				fill="none"
				stroke="currentColor"
				strokeWidth={2}
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		),
	},
	{
		title: 'Прозрачность',
		description:
			'Перед началом лечения подробно рассказываем о методах, сроках и стоимости — никаких неожиданных платежей.',
		icon: (
			<svg
				className="h-6 w-6"
				fill="none"
				stroke="currentColor"
				strokeWidth={2}
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
				/>
			</svg>
		),
	},
]

export default function WhyUsSection() {
	return (
		<section className="py-16 sm:py-20">
			<div className="container mx-auto px-8 sm:px-12">
				<h2 className="mb-4 text-center text-2xl font-bold text-slate-800 dark:text-slate-100 sm:text-3xl">
					Почему стоит выбрать нас?
				</h2>
				<p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-slate-600 dark:text-slate-400">
					Мы оказываем высококлассную медицинскую помощь при сложных
					стоматологических патологиях, сводя к минимуму возможные риски и
					обеспечивая долгосрочный результат.
				</p>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{benefits.map((benefit) => (
						<div
							key={benefit.title}
							className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
						>
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-300">
								{benefit.icon}
							</div>
							<h3 className="mb-2 font-semibold text-slate-800 dark:text-slate-100">
								{benefit.title}
							</h3>
							<p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
								{benefit.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
