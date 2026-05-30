const services = [
	{
		title: 'Терапевтическая стоматология',
		description:
			'Лечение кариеса и его осложнений, восстановление зубов.',
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
		description:
			'Удаление зубов, костная пластика, установка имплантатов.',
	},
	{
		title: 'Профессиональная гигиена',
		description:
			'Профилактика заболеваний дёсен, удаление налёта и зубного камня.',
	},
]

export default function ServicesSection() {
	return (
		<section className="bg-slate-50 py-16 dark:bg-slate-900 sm:py-20">
			<div className="container mx-auto px-8 sm:px-12">
				<h2 className="mb-10 text-center text-2xl font-bold text-slate-800 dark:text-slate-100 sm:text-3xl">
					Наши направления
				</h2>
				<p className="mx-auto mb-12 max-w-2xl text-center text-slate-600 dark:text-slate-400">
					Мы предлагаем полный спектр стоматологических услуг
				</p>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{services.map((service) => (
						<div
							key={service.title}
							className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
						>
							<div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-300">
								<svg
									className="h-5 w-5"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 className="mb-2 font-semibold text-slate-800 dark:text-slate-100">
								{service.title}
							</h3>
							<p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
								{service.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
