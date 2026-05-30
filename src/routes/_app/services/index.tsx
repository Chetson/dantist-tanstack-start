import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/services/')({
	component: RouteComponent,
})

/* ------------------------------------------------------------------ */
/*  Данные                                                             */
/* ------------------------------------------------------------------ */

const airFlow = {
	title: 'Профессиональная гигиена полости рта аппаратом Air Flow',
	intro:
		'Профессиональная чистка зубов, при которой смесь из воды, воздуха и мелкодисперсного порошка (бикарбоната натрия, глицина или эритритола) под давлением удаляет мягкий налёт, пигментацию от кофе, чая, табака и другие отложения. Процедура безопасна для эмали, не вызывает вибрации и дискомфорта, подходит для чувствительных зубов.',
	stages: [
		'Осмотр и оценка состояния полости рта.',
		'Изоляция и защита (очки, слюноотсос, ретракторы, пелёнка, нагрудник).',
		'Обработка зубов струёй смеси под заданным углом. Особое внимание уделяется межзубным промежуткам.',
		'При необходимости — полировка щёточками и пастами, нанесение фторирующего или реминерализующего геля для укрепления эмали и снижения чувствительности.',
	],
	advantages: [
		'Удаление налёта в труднодоступных местах (межзубные промежутки, фиссуры, вокруг ортодонтических конструкций и имплантов).',
		'Осветление эмали на 1–2 тона за счёт снятия пигмента.',
		'Снижение бактериальной нагрузки благодаря разрушению биоплёнки.',
		'Гладкая поверхность зубов, к которой медленнее прилипает новый налёт.',
		'Отсутствие боли и необходимости в анестезии в большинстве случаев.',
	],
	indications: [
		'Удаление пятен от красящих продуктов, курения.',
		'Чистка ортодонтических конструкций (брекетов, ретейнеров).',
		'Подготовка к отбеливанию зубов, установке брекетов или имплантов.',
		'Проблемы с дёснами (первые признаки пародонтоза).',
	],
	contraindications: [
		'Аллергия на компоненты полирующих смесей.',
		'Обострение заболеваний дёсен.',
		'Бронхиальная астма (проводится с осторожностью).',
		'Вирусные заболевания (простуда, грипп, герпес).',
		'Активный воспалительный процесс в полости рта.',
		'Ранний послеоперационный период.',
	],
	recommendations: [
		'Воздержаться от приёма пищи в течение нескольких часов.',
		'Заменить зубную щётку.',
		'Полоскать рот антисептическим раствором первые 2 дня.',
		'Избегать курения и красящих продуктов (кофе, чай, ягоды и т. д.) в первые 24–48 часов.',
		'Использовать мягкую щётку и неабразивную пасту, аккуратно чистить зубы.',
	],
	frequency:
		'1 раз в 6 месяцев для профилактики кариеса или 1 раз в год при хорошей гигиене полости рта. При наличии твёрдого зубного камня его сначала удаляют ультразвуком, а затем используют Air Flow для окончательной очистки.',
}

const prosthetics = {
	title: 'Протезирование зубов',
	intro:
		'Протезирование — не просто эстетическое решение, а важная мера для сохранения здоровья зубочелюстной системы и организма в целом.',
	reasons: [
		{
			title: 'Нарушение жевания',
			desc: 'Отсутствие зубов мешает качественно пережёвывать пищу — это может привести к проблемам с пищеварением (гастриту и др.).',
		},
		{
			title: 'Смещение зубов',
			desc: 'Соседние зубы начинают сдвигаться в сторону пустого пространства, нарушается прикус.',
		},
		{
			title: 'Атрофия костной ткани',
			desc: 'Без жевательной нагрузки кость в области отсутствующего зуба истончается и рассасывается — это осложняет последующее протезирование или имплантацию.',
		},
		{
			title: 'Повышенная нагрузка на оставшиеся зубы',
			desc: 'Они быстрее стираются, расшатываются, повышается риск их потери.',
		},
		{
			title: 'Проблемы с ВНЧС',
			desc: 'Неравномерная нагрузка вызывает дисфункцию височно-нижнечелюстного сустава: боли, хруст, щелчки при открывании рта, головные боли.',
		},
	],
	appearanceChanges: [
		'Западение губ и щёк.',
		'Углубление носогубных складок.',
		'Опущение уголков рта — лицо выглядит старше.',
	],
	refusalConsequences: [
		'Ухудшается состояние соседних зубов.',
		'Усложняется лечение — может потребоваться ортодонтическая коррекция (брекеты), костная пластика (наращивание кости), лечение у пародонтолога и терапевта.',
		'Лечение становится дольше и дороже.',
	],
	whenToApply:
		'Рекомендуется обратиться к стоматологу-ортопеду как можно скорее после потери зуба — оптимально в течение нескольких месяцев. Это позволяет сохранить объём костной ткани, избежать смещения соседних зубов, восстановить жевательную функцию и эстетику с минимальными затратами.',
	conclusion:
		'Протезирование помогает не только вернуть красивую улыбку, но и предотвратить серьёзные проблемы со здоровьем — от заболеваний ЖКТ до деформаций лица. Своевременное обращение к врачу упрощает и удешевляет лечение.',
}

const implantation = {
	title: 'Имплантация зубов',
	intro:
		'Имплантация — современный способ восстановить утраченные зубы. Вместо отсутствующего зуба в кость устанавливают титановый имплантат (искусственный корень), а на него — коронку.',
	indications: [
		'Потеря одного или нескольких зубов.',
		'Невозможность носить съёмные протезы (из‑за аллергии, рвотного рефлекса и т. д.).',
		'Желание избежать обточки соседних здоровых зубов (в отличие от мостовидного протеза).',
		'Полная адентия (отсутствие всех зубов) — с опорой на несколько имплантов фиксируют полный протез.',
	],
	advantages: [
		{
			title: 'Естественность',
			desc: 'Имплантат выглядит и ощущается как настоящий зуб, сохраняет контуры десны.',
		},
		{
			title: 'Полная жевательная функция',
			desc: 'Жевательная нагрузка распределяется как обычно — можно есть привычную пищу.',
		},
		{
			title: 'Защита костной ткани',
			desc: 'Имплантат замещает корень зуба и предотвращает атрофию кости, которая начинается после потери зуба.',
		},
		{
			title: 'Сохранение соседних зубов',
			desc: 'Не нужно обтачивать здоровые зубы, как при установке моста.',
		},
		{
			title: 'Долговечность',
			desc: 'При правильном уходе импланты служат десятки лет (коронку со временем можно заменить).',
		},
		{
			title: 'Эстетика',
			desc: 'Особенно важно при восстановлении фронтальной группы зубов — зона улыбки выглядит естественно.',
		},
		{
			title: 'Комфорт',
			desc: 'Нет необходимости снимать протез, не возникает дискомфорта, характерного для съёмных конструкций.',
		},
	],
	refusalConsequences: [
		'Кость в зоне дефекта постепенно рассасывается, меняется контур лица.',
		'Соседние зубы смещаются, нарушается прикус.',
		'Возрастает нагрузка на оставшиеся зубы — они быстрее изнашиваются.',
		'Ухудшается качество пережёвывания пищи, что может привести к проблемам с пищеварением.',
		'Возможны нарушения дикции.',
		'Снижается эстетика улыбки и уверенность в себе.',
	],
	stages: [
		'Диагностика (осмотр, КТ для оценки состояния кости).',
		'Санация полости рта (лечение кариеса, воспалений).',
		'Установка имплантата (под местной анестезией).',
		'Период остеоинтеграции (приживления) — 3–6 месяцев.',
		'Установка абатмента и постоянной коронки.',
	],
	conclusion:
		'Имплантация — надёжный и долгосрочный способ вернуть жевательную функцию, эстетику улыбки и сохранить здоровье зубочелюстной системы.',
}

/* ------------------------------------------------------------------ */
/*  Вспомогательные компоненты                                         */
/* ------------------------------------------------------------------ */

function SectionHeading({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="mb-6 text-2xl font-bold text-slate-800 sm:text-3xl dark:text-slate-100">
			{children}
		</h2>
	)
}

function SubHeading({ children }: { children: React.ReactNode }) {
	return (
		<h3 className="mb-3 text-lg font-semibold text-slate-700 dark:text-slate-200">
			{children}
		</h3>
	)
}

function TextBlock({ children }: { children: React.ReactNode }) {
	return (
		<p className="leading-relaxed text-slate-600 dark:text-slate-400">
			{children}
		</p>
	)
}

function BulletItem({ children }: { children: React.ReactNode }) {
	return (
		<li className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400">
			<span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-pink-500" />
			<span>{children}</span>
		</li>
	)
}

function BulletList({ children }: { children: React.ReactNode }) {
	return <ul className="mt-2 space-y-2">{children}</ul>
}

/* ------------------------------------------------------------------ */
/*  Секции услуг                                                       */
/* ------------------------------------------------------------------ */

function AirFlowSection() {
	return (
		<section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10 dark:border-slate-700 dark:bg-slate-900">
			<SectionHeading>{airFlow.title}</SectionHeading>
			<TextBlock>{airFlow.intro}</TextBlock>

			{/* Основные этапы */}
			<div className="mt-8">
				<SubHeading>Основные этапы</SubHeading>
				<ol className="mt-2 space-y-2">
					{airFlow.stages.map((s, i) => (
						<li
							key={i}
							className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400"
						>
							<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pink-100 text-xs font-semibold text-pink-600 dark:bg-pink-900 dark:text-pink-300">
								{i + 1}
							</span>
							<span>{s}</span>
						</li>
					))}
				</ol>
			</div>

			{/* Преимущества */}
			<div className="mt-8">
				<SubHeading>Преимущества</SubHeading>
				<BulletList>
					{airFlow.advantages.map((a, i) => (
						<BulletItem key={i}>{a}</BulletItem>
					))}
				</BulletList>
			</div>

			{/* Показания и Противопоказания */}
			<div className="mt-8 grid gap-6 sm:grid-cols-2">
				<div>
					<SubHeading>Показания</SubHeading>
					<BulletList>
						{airFlow.indications.map((item, i) => (
							<BulletItem key={i}>{item}</BulletItem>
						))}
					</BulletList>
				</div>
				<div>
					<SubHeading>Противопоказания</SubHeading>
					<BulletList>
						{airFlow.contraindications.map((item, i) => (
							<BulletItem key={i}>{item}</BulletItem>
						))}
					</BulletList>
				</div>
			</div>

			{/* Рекомендации */}
			<div className="mt-8">
				<SubHeading>Рекомендации после процедуры</SubHeading>
				<BulletList>
					{airFlow.recommendations.map((r, i) => (
						<BulletItem key={i}>{r}</BulletItem>
					))}
				</BulletList>
			</div>

			{/* Частота */}
			<div className="mt-8 rounded-lg bg-slate-50 p-4 dark:bg-slate-800">
				<p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
					<span className="font-semibold text-slate-700 dark:text-slate-300">
						Частота проведения процедуры:
					</span>{' '}
					{airFlow.frequency}
				</p>
			</div>
		</section>
	)
}

function ProstheticsSection() {
	return (
		<section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10 dark:border-slate-700 dark:bg-slate-900">
			<SectionHeading>{prosthetics.title}</SectionHeading>
			<TextBlock>{prosthetics.intro}</TextBlock>

			{/* Основные причины */}
			<div className="mt-8">
				<SubHeading>Основные причины для протезирования</SubHeading>
				<div className="mt-3 space-y-4">
					{prosthetics.reasons.map((r, i) => (
						<div
							key={i}
							className="rounded-lg border border-slate-100 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800"
						>
							<h4 className="font-semibold text-slate-700 dark:text-slate-200">
								{r.title}
							</h4>
							<p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
								{r.desc}
							</p>
						</div>
					))}
				</div>
			</div>

			{/* Изменения внешности */}
			<div className="mt-8">
				<SubHeading>Изменения внешности</SubHeading>
				<TextBlock>Атрофия кости и смещение зубов могут вызвать:</TextBlock>
				<BulletList>
					{prosthetics.appearanceChanges.map((item, i) => (
						<BulletItem key={i}>{item}</BulletItem>
					))}
				</BulletList>
			</div>

			{/* К чему приводит отказ */}
			<div className="mt-8 rounded-lg border border-red-100 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950">
				<h3 className="mb-3 text-lg font-semibold text-red-700 dark:text-red-400">
					К чему приводит отказ от протезирования?
				</h3>
				<p className="mb-3 text-sm leading-relaxed text-red-600 dark:text-red-400">
					Если не восстановить утраченные зубы вовремя, последствия нарастают
					постепенно:
				</p>
				<ol className="space-y-2">
					{prosthetics.refusalConsequences.map((item, i) => (
						<li
							key={i}
							className="flex items-start gap-2.5 text-sm text-red-600 dark:text-red-400"
						>
							<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-200 text-xs font-semibold text-red-700 dark:bg-red-900 dark:text-red-300">
								{i + 1}
							</span>
							<span>{item}</span>
						</li>
					))}
				</ol>
			</div>

			{/* Когда нужно протезировать */}
			<div className="mt-8">
				<SubHeading>Когда нужно протезировать?</SubHeading>
				<TextBlock>{prosthetics.whenToApply}</TextBlock>
			</div>

			{/* Заключение */}
			<div className="mt-8 rounded-lg bg-pink-50 p-4 dark:bg-pink-950">
				<p className="text-sm leading-relaxed text-pink-700 dark:text-pink-300">
					{prosthetics.conclusion}
				</p>
			</div>
		</section>
	)
}

function ImplantationSection() {
	return (
		<section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10 dark:border-slate-700 dark:bg-slate-900">
			<SectionHeading>{implantation.title}</SectionHeading>
			<TextBlock>{implantation.intro}</TextBlock>

			{/* Показания */}
			<div className="mt-8">
				<SubHeading>Когда нужна имплантация?</SubHeading>
				<BulletList>
					{implantation.indications.map((item, i) => (
						<BulletItem key={i}>{item}</BulletItem>
					))}
				</BulletList>
			</div>

			{/* Ключевые преимущества */}
			<div className="mt-8">
				<SubHeading>Ключевые преимущества</SubHeading>
				<div className="mt-3 grid gap-4 sm:grid-cols-2">
					{implantation.advantages.map((a, i) => (
						<div
							key={i}
							className="rounded-lg border border-slate-100 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800"
						>
							<h4 className="font-semibold text-slate-700 dark:text-slate-200">
								{a.title}
							</h4>
							<p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
								{a.desc}
							</p>
						</div>
					))}
				</div>
			</div>

			{/* К чему приводит отказ */}
			<div className="mt-8 rounded-lg border border-red-100 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950">
				<h3 className="mb-3 text-lg font-semibold text-red-700 dark:text-red-400">
					К чему приводит отказ от имплантации?
				</h3>
				<p className="mb-3 text-sm leading-relaxed text-red-600 dark:text-red-400">
					Если не восстановить утраченный зуб:
				</p>
				<ul className="space-y-2">
					{implantation.refusalConsequences.map((item, i) => (
						<li
							key={i}
							className="flex items-start gap-2.5 text-sm text-red-600 dark:text-red-400"
						>
							<span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
							<span>{item}</span>
						</li>
					))}
				</ul>
			</div>

			{/* Как проходит процедура */}
			<div className="mt-8">
				<SubHeading>Как проходит процедура?</SubHeading>
				<ol className="mt-2 space-y-2">
					{implantation.stages.map((s, i) => (
						<li
							key={i}
							className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400"
						>
							<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pink-100 text-xs font-semibold text-pink-600 dark:bg-pink-900 dark:text-pink-300">
								{i + 1}
							</span>
							<span>{s}</span>
						</li>
					))}
				</ol>
			</div>

			{/* Заключение */}
			<div className="mt-8 rounded-lg bg-pink-50 p-4 dark:bg-pink-950">
				<p className="text-sm leading-relaxed text-pink-700 dark:text-pink-300">
					{implantation.conclusion}
				</p>
			</div>
		</section>
	)
}

/* ------------------------------------------------------------------ */
/*  Страница                                                           */
/* ------------------------------------------------------------------ */

function RouteComponent() {
	return (
		<div className="container mx-auto px-6 py-16 sm:px-12">
			{/* Заголовок страницы */}
			<section className="mx-auto mb-16 max-w-3xl text-center">
				<h1 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
					Услуги клиники «Дантист»
				</h1>
				<p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
					Полный спектр стоматологических услуг: от профессиональной гигиены до
					протезирования и имплантации зубов.
				</p>
			</section>

			{/* Секции услуг */}
			<div className="mx-auto flex max-w-4xl flex-col gap-12">
				<AirFlowSection />
				<ProstheticsSection />
				<ImplantationSection />
			</div>
		</div>
	)
}
