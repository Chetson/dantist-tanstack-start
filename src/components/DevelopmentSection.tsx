const developmentItems = [
	{
		title: 'Всероссийские и международные симпозиумы',
	},
	{
		title: 'Профильные конференции и выставки',
	},
	{
		title: 'Специализированные курсы и тренинги',
	},
	{
		title: 'Новейшие методики и технологии',
	},
]

export default function DevelopmentSection() {
	return (
		<section className="bg-slate-50 py-16 dark:bg-slate-900 sm:py-20">
			<div className="container mx-auto px-8 sm:px-12">
				<div className="mx-auto max-w-3xl">
					<h2 className="mb-6 text-center text-2xl font-bold text-slate-800 dark:text-slate-100 sm:text-3xl">
						Постоянное развитие
					</h2>
					<p className="mb-8 text-center text-lg leading-relaxed text-slate-600 dark:text-slate-400">
						Наши врачи регулярно повышают квалификацию:
					</p>

					<div className="grid gap-4 sm:grid-cols-2">
						{developmentItems.map((item) => (
							<div
								key={item.title}
								className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800"
							>
								<div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-300">
									<svg
										className="h-4 w-4"
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<span className="text-slate-700 dark:text-slate-300">
									{item.title}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
