import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/about/')({
	component: RouteComponent,
})

/* ------------------------------------------------------------------ */
/*  Данные                                                             */
/* ------------------------------------------------------------------ */

const directions = [
	{
		title: 'Терапевтическая стоматология',
		desc: 'Лечение кариеса и его осложнений, восстановление зубов.',
	},
	{
		title: 'Детская стоматология',
		desc: 'Бережный подход и комфортная атмосфера для маленьких пациентов.',
	},
	{
		title: 'Ортопедическая стоматология',
		desc: 'Протезирование и реставрация зубов с использованием современных материалов.',
	},
	{
		title: 'Хирургическая стоматология и имплантология',
		desc: 'Удаление зубов, костная пластика, установка имплантатов.',
	},
	{
		title: 'Профессиональная гигиена полости рта',
		desc: 'Профилактика заболеваний дёсен, удаление налёта и зубного камня.',
	},
]

const specialists = [
	'Стоматологи‑терапевты (в т.ч. детские)',
	'Ортопеды',
	'Хирурги (в т.ч. хирург‑имплантолог)',
]

const developmentItems = [
	'Посещают всероссийские и международные симпозиумы',
	'Участвуют в профильных конференциях и выставках',
	'Проходят специализированные курсы и тренинги',
	'Осваивают новейшие методики и технологии',
]

const advantages = [
	{
		title: 'Комплексный подход',
		desc: 'Лечим не симптомы, а причину проблемы — разрабатываем индивидуальный план лечения с учётом особенностей здоровья каждого пациента.',
	},
	{
		title: 'Современные технологии',
		desc: 'Используем оборудование и материалы последнего поколения — это повышает точность диагностики и эффективность лечения.',
	},
	{
		title: 'Безопасность',
		desc: 'Строго соблюдаем протоколы стерилизации и дезинфекции, чтобы исключить любые риски для здоровья.',
	},
	{
		title: 'Комфорт',
		desc: 'Создаём доброжелательную атмосферу: от зоны ожидания до безболезненных процедур.',
	},
	{
		title: 'Прозрачность',
		desc: 'Перед началом лечения подробно рассказываем о методах, сроках и стоимости — никаких неожиданных платежей.',
	},
]

const highlights = [
	'Свой цифровой цех',
	'Микроскопия Leica',
	'Пожизненная гарантия',
	'Лечение во сне',
]

/* ------------------------------------------------------------------ */
/*  Вспомогательные компоненты                                         */
/* ------------------------------------------------------------------ */

function SectionTitle({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="mb-8 text-center text-2xl font-bold text-slate-800 sm:text-3xl dark:text-slate-100">
			{children}
		</h2>
	)
}

function CheckIcon() {
	return (
		<svg
			className="mt-0.5 h-5 w-5 shrink-0"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M5 13l4 4L19 7"
			/>
		</svg>
	)
}

/* ------------------------------------------------------------------ */
/*  Страница                                                           */
/* ------------------------------------------------------------------ */

function RouteComponent() {
	return (
		<div className="container mx-auto px-6 py-16 sm:px-12">
			{/* ------ О клинике ------ */}
			<section className="mx-auto mb-20 max-w-3xl text-center">
				<h1 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
					О клинике «Дантист»
				</h1>
				<p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
					Стоматология «Дантист» успешно работает в Кургане с 2003 года. За
					более чем 20 лет практики мы помогли тысячам пациентов обрести
					здоровую и красивую улыбку.
				</p>
			</section>

			{/* ------ Наши направления ------ */}
			<section className="mb-20">
				<SectionTitle>Наши направления</SectionTitle>
				<p className="mx-auto mb-8 max-w-2xl text-center text-slate-600 dark:text-slate-400">
					Мы предлагаем полный спектр стоматологических услуг:
				</p>
				<div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{directions.map((d) => (
						<div
							key={d.title}
							className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
						>
							<h3 className="mb-2 text-base font-semibold text-slate-800 dark:text-slate-100">
								{d.title}
							</h3>
							<p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
								{d.desc}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* ------ Команда профессионалов ------ */}
			<section className="mb-20">
				<SectionTitle>Команда профессионалов</SectionTitle>
				<p className="mx-auto mb-6 max-w-2xl text-center text-slate-600 dark:text-slate-400">
					У нас ведут приём опытные специалисты:
				</p>
				<ul className="mx-auto max-w-md space-y-3">
					{specialists.map((s) => (
						<li
							key={s}
							className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
						>
							<span className="flex h-2 w-2 shrink-0 rounded-full bg-violet-500" />
							{s}
						</li>
					))}
				</ul>
				<p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-slate-500 dark:text-slate-400">
					Благодаря широкому спектру компетенций наших врачей вы можете получить
					комплексную консультацию по лечению, протезированию, удалению или
					имплантации.
				</p>
			</section>

			{/* ------ Постоянное развитие ------ */}
			<section className="mb-20 rounded-2xl bg-slate-50 px-6 py-14 sm:px-12 dark:bg-slate-900">
				<SectionTitle>Постоянное развитие</SectionTitle>
				<p className="mx-auto mb-6 max-w-2xl text-center text-slate-600 dark:text-slate-400">
					Наши врачи регулярно повышают квалификацию:
				</p>
				<ul className="mx-auto max-w-lg space-y-3">
					{developmentItems.map((item) => (
						<li
							key={item}
							className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
						>
							<CheckIcon />
							{item}
						</li>
					))}
				</ul>
			</section>

			{/* ------ Почему стоит выбрать нас? ------ */}
			<section className="mb-20">
				<SectionTitle>Почему стоит выбрать нас?</SectionTitle>
				<div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{advantages.map((a) => (
						<div
							key={a.title}
							className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
						>
							<h3 className="mb-2 text-base font-semibold text-slate-800 dark:text-slate-100">
								{a.title}
							</h3>
							<p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
								{a.desc}
							</p>
						</div>
					))}
				</div>
				<p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-slate-500 dark:text-slate-400">
					Мы оказываем высококлассную медицинскую помощь при сложных
					стоматологических патологиях, сводя к минимуму возможные риски и
					обеспечивая долгосрочный результат.
				</p>
			</section>

			{/* ------ Ключевые преимущества (плитки) ------ */}
			<section className="mx-auto max-w-4xl">
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{highlights.map((h) => (
						<div
							key={h}
							className="flex items-center justify-center rounded-xl bg-violet-50 px-4 py-6 text-center text-sm font-semibold text-violet-700 shadow-sm dark:bg-violet-950 dark:text-violet-300"
						>
							{h}
						</div>
					))}
				</div>
			</section>
		</div>
	)
}
