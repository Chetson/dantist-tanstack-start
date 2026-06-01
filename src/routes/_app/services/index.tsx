import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Badge } from '~/components/ui/badge'
import { Separator } from '~/components/ui/separator'
import { Circle } from 'lucide-react'

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
		'Полная адентия.',
		'Невозможность или нежелание устанавливать съёмные протезы.',
		'Аллергия на материалы съёмных протезов.',
	],
	advantages: [
		{
			title: 'Естественный вид и функция',
			desc: 'Имплантат полностью имитирует натуральный зуб.',
		},
		{
			title: 'Сохранение костной ткани',
			desc: 'В отличие от мостовидных и съёмных протезов имплантат нагружает кость и предотвращает её атрофию.',
		},
		{
			title: 'Не затрагивает соседние зубы',
			desc: 'Нет необходимости обтачивать соседние здоровые зубы, как в случае с мостовидным протезом.',
		},
		{
			title: 'Долговечность',
			desc: 'При правильной гигиене имплантат служит десятилетиями.',
		},
		{
			title: 'Надёжность',
			desc: 'Имплантаты изготавливаются из биосовместимого титана, который не отторгается организмом.',
		},
		{
			title: 'Удобство и комфорт',
			desc: 'Не требует специального ухода — достаточно обычной гигиены полости рта.',
		},
		{
			title: 'Уверенность и свобода',
			desc: 'Нет ограничений в еде — можно есть любую пищу.',
		},
	],
	refusalConsequences: [
		'Атрофия костной ткани в области отсутствующего зуба.',
		'Смещение и расшатывание соседних зубов.',
		'Изменение прикуса, проблемы с ВНЧС.',
		'Нарушение жевания, проблемы с ЖКТ.',
		'Изменение внешности — западение губ и щёк, углубление носогубных складок.',
	],
	stages: [
		'Консультация, осмотр, составление плана лечения.',
		'Установка имплантата в костную ткань (хирургический этап).',
		'Период остеоинтеграции — от 3 до 6 месяцев (приживление имплантата).',
		'Установка формирователя десны и снятие слепков.',
		'Фиксация постоянной коронки.',
	],
	conclusion:
		'Имплантация — самый надёжный и долговечный способ восстановления зубов. Позволяет полностью восстановить функцию и эстетику улыбки на долгие годы.',
}

/* ------------------------------------------------------------------ */
/*  Вспомогательные компоненты                                         */
/* ------------------------------------------------------------------ */

function SectionHeading({ children }: { children: React.ReactNode }) {
	return <h2 className="mb-6 text-2xl font-bold sm:text-3xl">{children}</h2>
}

function SubHeading({ children }: { children: React.ReactNode }) {
	return <h3 className="mb-3 text-lg font-semibold">{children}</h3>
}

function TextBlock({ children }: { children: React.ReactNode }) {
	return <p className="leading-relaxed text-muted-foreground">{children}</p>
}

function BulletList({ children }: { children: React.ReactNode }) {
	return <ul className="mt-2 space-y-2">{children}</ul>
}

function BulletItem({ children }: { children: React.ReactNode }) {
	return (
		<li className="flex items-start gap-2.5 text-muted-foreground">
			<Circle className="mt-1.5 size-1.5 shrink-0 fill-primary text-primary" />
			<span>{children}</span>
		</li>
	)
}

function NumberedBullet({
	num,
	children,
}: {
	num: number
	children: React.ReactNode
}) {
	return (
		<li className="flex items-start gap-2.5 text-muted-foreground">
			<Badge
				variant="secondary"
				className="mt-0.5 size-5 shrink-0 justify-center p-0 text-xs"
			>
				{num}
			</Badge>
			<span>{children}</span>
		</li>
	)
}

/* ------------------------------------------------------------------ */
/*  Секции услуг                                                       */
/* ------------------------------------------------------------------ */

function AirFlowSection() {
	return (
		<Card className="shadow-sm sm:p-4">
			<CardHeader>
				<CardTitle>{airFlow.title}</CardTitle>
			</CardHeader>
			<CardContent className="space-y-8">
				<TextBlock>{airFlow.intro}</TextBlock>

				<div>
					<SubHeading>Основные этапы</SubHeading>
					<ol className="mt-2 space-y-2">
						{airFlow.stages.map((s, i) => (
							<NumberedBullet key={i} num={i + 1}>
								{s}
							</NumberedBullet>
						))}
					</ol>
				</div>

				<div>
					<SubHeading>Преимущества</SubHeading>
					<BulletList>
						{airFlow.advantages.map((a, i) => (
							<BulletItem key={i}>{a}</BulletItem>
						))}
					</BulletList>
				</div>

				<div className="grid gap-6 sm:grid-cols-2">
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

				<div>
					<SubHeading>Рекомендации после процедуры</SubHeading>
					<BulletList>
						{airFlow.recommendations.map((r, i) => (
							<BulletItem key={i}>{r}</BulletItem>
						))}
					</BulletList>
				</div>

				<div className="rounded-lg bg-muted p-4">
					<p className="text-sm leading-relaxed text-muted-foreground">
						<span className="font-semibold text-foreground">
							Частота проведения процедуры:
						</span>{' '}
						{airFlow.frequency}
					</p>
				</div>
			</CardContent>
		</Card>
	)
}

function ProstheticsSection() {
	return (
		<Card className="shadow-sm sm:p-4">
			<CardHeader>
				<CardTitle>{prosthetics.title}</CardTitle>
			</CardHeader>
			<CardContent className="space-y-8">
				<TextBlock>{prosthetics.intro}</TextBlock>

				<div>
					<SubHeading>Основные причины для протезирования</SubHeading>
					<div className="mt-3 space-y-4">
						{prosthetics.reasons.map((r, i) => (
							<Card key={i} className="bg-muted/50 shadow-none">
								<CardContent className="p-4">
									<h4 className="font-semibold">{r.title}</h4>
									<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
										{r.desc}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>

				<div>
					<SubHeading>Изменения внешности</SubHeading>
					<TextBlock>Атрофия кости и смещение зубов могут вызвать:</TextBlock>
					<BulletList>
						{prosthetics.appearanceChanges.map((item, i) => (
							<BulletItem key={i}>{item}</BulletItem>
						))}
					</BulletList>
				</div>

				<Card className="border-destructive/20 bg-destructive/5 shadow-none">
					<CardContent className="p-5 space-y-3">
						<h3 className="text-lg font-semibold text-destructive">
							К чему приводит отказ от протезирования?
						</h3>
						<p className="text-sm leading-relaxed text-destructive/80">
							Если не восстановить утраченные зубы вовремя, последствия
							нарастают постепенно:
						</p>
						<ol className="space-y-2">
							{prosthetics.refusalConsequences.map((item, i) => (
								<li
									key={i}
									className="flex items-start gap-2.5 text-sm text-destructive/80"
								>
									<Badge
										variant="destructive"
										className="mt-0.5 size-5 shrink-0 justify-center p-0 text-xs"
									>
										{i + 1}
									</Badge>
									<span>{item}</span>
								</li>
							))}
						</ol>
					</CardContent>
				</Card>

				<div>
					<SubHeading>Когда нужно протезировать?</SubHeading>
					<TextBlock>{prosthetics.whenToApply}</TextBlock>
				</div>

				<div className="rounded-lg bg-primary/5 p-4">
					<p className="text-sm leading-relaxed text-primary/80">
						{prosthetics.conclusion}
					</p>
				</div>
			</CardContent>
		</Card>
	)
}

function ImplantationSection() {
	return (
		<Card className="shadow-sm sm:p-4">
			<CardHeader>
				<CardTitle>{implantation.title}</CardTitle>
			</CardHeader>
			<CardContent className="space-y-8">
				<TextBlock>{implantation.intro}</TextBlock>

				<div>
					<SubHeading>Когда нужна имплантация?</SubHeading>
					<BulletList>
						{implantation.indications.map((item, i) => (
							<BulletItem key={i}>{item}</BulletItem>
						))}
					</BulletList>
				</div>

				<div>
					<SubHeading>Ключевые преимущества</SubHeading>
					<div className="mt-3 grid gap-4 sm:grid-cols-2">
						{implantation.advantages.map((a, i) => (
							<Card key={i} className="bg-muted/50 shadow-none">
								<CardContent className="p-4">
									<h4 className="font-semibold">{a.title}</h4>
									<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
										{a.desc}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>

				<Card className="border-destructive/20 bg-destructive/5 shadow-none">
					<CardContent className="p-5 space-y-3">
						<h3 className="text-lg font-semibold text-destructive">
							К чему приводит отказ от имплантации?
						</h3>
						<p className="text-sm leading-relaxed text-destructive/80">
							Если не восстановить утраченный зуб:
						</p>
						<ul className="space-y-2">
							{implantation.refusalConsequences.map((item, i) => (
								<li
									key={i}
									className="flex items-start gap-2.5 text-sm text-destructive/80"
								>
									<Circle className="mt-1.5 size-1.5 shrink-0 fill-destructive text-destructive" />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</CardContent>
				</Card>

				<div>
					<SubHeading>Как проходит процедура?</SubHeading>
					<ol className="mt-2 space-y-2">
						{implantation.stages.map((s, i) => (
							<NumberedBullet key={i} num={i + 1}>
								{s}
							</NumberedBullet>
						))}
					</ol>
				</div>

				<div className="rounded-lg bg-primary/5 p-4">
					<p className="text-sm leading-relaxed text-primary/80">
						{implantation.conclusion}
					</p>
				</div>
			</CardContent>
		</Card>
	)
}

/* ------------------------------------------------------------------ */
/*  Страница                                                           */
/* ------------------------------------------------------------------ */

function RouteComponent() {
	return (
		<div className="container mx-auto px-6 py-16 sm:px-12">
			<section className="mx-auto mb-16 max-w-3xl text-center">
				<h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
					Услуги клиники «Дантист»
				</h1>
				<p className="text-lg leading-relaxed text-muted-foreground">
					Полный спектр стоматологических услуг: от профессиональной гигиены до
					протезирования и имплантации зубов.
				</p>
			</section>

			<div className="mx-auto flex max-w-4xl flex-col gap-12">
				<AirFlowSection />
				<ProstheticsSection />
				<ImplantationSection />
			</div>
		</div>
	)
}
