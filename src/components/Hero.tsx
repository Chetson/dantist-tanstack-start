export default function Hero() {
	return (
		<section className="relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-pink-50 py-28 dark:from-slate-950 dark:via-slate-900 dark:to-pink-950 sm:py-36">
			<div className="container mx-auto px-8 sm:px-12">
				<div className="mx-auto max-w-3xl text-center">
					<span className="mb-4 inline-block rounded-full bg-pink-100 px-4 py-1 text-sm font-medium text-pink-700 dark:bg-pink-900 dark:text-pink-300">
						С 2003 года
					</span>
					<h1 className="mb-4 text-4xl font-extrabold leading-tight text-slate-800 dark:text-slate-100 sm:text-5xl md:text-6xl">
						Стоматология
						<br />
						<span className="text-pink-500">«Дантист»</span>
					</h1>
					<p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
						Более 20 лет помогаем жителям Кургана обрести здоровую и красивую
						улыбку. Современное оборудование, опытные врачи, индивидуальный
						подход.
					</p>
					<div className="inline-flex flex-col items-center gap-1 rounded-xl border border-pink-200 bg-pink-50 px-8 py-4 shadow-sm dark:border-pink-800 dark:bg-pink-950">
						<span className="text-sm text-slate-600 dark:text-slate-400">
							Запись по телефону
						</span>
						<a
							className="text-2xl font-bold tracking-wide text-pink-500 transition hover:text-pink-600"
							href="tel:+73522290007"
						>
							8 (3522) 290-007
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
