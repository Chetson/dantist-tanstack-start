const specialists = [
	{
		title: 'Стоматологи-терапевты',
		note: 'в т.ч. детские',
	},
	{
		title: 'Ортопеды',
	},
	{
		title: 'Хирурги',
		note: 'в т.ч. хирург-имплантолог',
	},
]

export default function TeamSection() {
	return (
		<section className="py-16 sm:py-20">
			<div className="container mx-auto px-8 sm:px-12">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-slate-100 sm:text-3xl">
						Команда профессионалов
					</h2>
					<p className="mb-8 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
						У нас ведут приём опытные специалисты. Благодаря широкому спектру
						компетенций наших врачей вы можете получить комплексную консультацию
						по лечению, протезированию, удалению или имплантации.
					</p>

					<div className="flex flex-wrap justify-center gap-4">
						{specialists.map((spec) => (
							<div
								key={spec.title}
								className="rounded-xl border border-slate-200 bg-white px-6 py-4 shadow-sm dark:border-slate-700 dark:bg-slate-800"
							>
								<p className="font-semibold text-slate-800 dark:text-slate-100">
									{spec.title}
								</p>
								{spec.note && (
									<p className="text-sm text-slate-500 dark:text-slate-400">
										{spec.note}
									</p>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
