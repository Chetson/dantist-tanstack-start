export default function ImportantNotice() {
	return (
		<section className="container mx-auto px-8 py-16 sm:px-12">
			<div className="mx-auto max-w-3xl rounded-xl border border-yellow-200 bg-yellow-50 p-6 text-slate-700 shadow-sm dark:border-yellow-800 dark:bg-yellow-950 dark:text-slate-300 sm:p-8">
				<h2 className="mb-4 text-xl font-bold text-yellow-800 dark:text-yellow-200 sm:text-2xl">
					Уважаемые пациенты, обращаем ваше внимание на важную информацию:
				</h2>

				<p className="mb-4 leading-relaxed">
					Приём всех специалистов осуществляется по предварительной записи. Для
					уточнения полной стоимости лечения необходима консультация врача.
				</p>

				<p className="mb-2">
					Данные площадки распространяют некорректную информацию о клинике,
					просьба не доверять этим источникам. Мы не несём ответственности за
					информацию, размещённую на этих ресурсах без нашего согласия.
				</p>
				<ul className="mb-4 list-inside list-disc space-y-1 pl-2">
					<li>ПроДокторов</li>
					<li>Докту.ру</li>
					<li>СберЗдоровье</li>
					<li>наПоправку</li>
				</ul>
				<p className="mb-4 leading-relaxed"></p>

				<p className="mb-2 font-semibold">
					Официальные источники информации о нашей организации:
				</p>
				<ul className="mb-4 list-inside list-disc space-y-1 pl-2">
					<li>2ГИС</li>
					<li>Яндекс</li>
					<li>Наш официальный сайт</li>
				</ul>

				<p className="font-medium text-yellow-800 dark:text-yellow-200">
					Берегите своё время и доверяйте проверенным ресурсам!
				</p>
			</div>
		</section>
	)
}
