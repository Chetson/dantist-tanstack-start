import { Clock, Phone } from 'lucide-react'
import goodPlaceYandex from '~/assets/good-place-yandex.svg'

export default function Hero() {
	return (
		<section className="relative overflow-hidden bg-linear-to-br from-[#6AA8D9]/15 to-[#C1DEF2]/15 py-20 sm:py-28">
			<div className="container mx-auto px-6 sm:px-12 relative">
				<div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
					{/* Левая колонка — текст */}
					<div className="flex-1 text-left relative z-10">
						<h1 className="mb-4 leading-tight tracking-tight">
							<span className="text-3xl font-semibold">
								Стоматологические клиники
							</span>

							<br />
							<span className="text-primary text-4xl sm:text-5xl md:text-6xl font-extrabold">
								«Дантист»
							</span>
						</h1>
						<p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
							Более 20 лет помогаем жителям Кургана обрести здоровую и красивую
							улыбку. Современное оборудование, опытные врачи, индивидуальный
							подход.
						</p>

						<section className="space-y-4">
							<span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/60">
								Запись по телефонам
							</span>

							<div className="flex gap-4 items-center">
								<a
									className="group inline-flex items-center gap-3 text-2xl font-bold tracking-wide transition-colors hover:text-primary"
									href="tel:+73522290007"
								>
									<span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-sm">
										<Phone className="size-5" />
									</span>
									8 (3522) 290-007
								</a>

								<a
									className="group inline-flex items-center gap-3 text-2xl font-bold tracking-wide transition-colors hover:text-primary"
									href="tel:+79025920007"
								>
									<span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-sm">
										<Phone className="size-5" />
									</span>
									8 (902) 592-00-00
								</a>
							</div>

							<div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted-foreground/80">
								<span className="inline-flex items-center gap-1.5">
									<Clock className="size-3.5" />
									Пн–Пт: 09:00 – 19:00
								</span>
								<span className="inline-flex items-center gap-1.5">
									<Clock className="size-3.5" />
									Сб: 09:00 – 14:00
								</span>
							</div>
						</section>

						<article className="bg-[#6AA8D9]/15 w-1/2 rounded-lg px-6 py-4 my-6 border-l-5 border-[#5F4ACB]">
							<h2 className="text-2xl font-semibold ">
								Изменение режима работы
							</h2>
							<div className="text-sm">
								<p>
									Уважаемые пациенты, время работы клиник в праздничные дни
									будет изменено.
								</p>
								<p>
									9, 10, 11 мая работаем с 09:00 до 19:00. 12, 13 выходные дни,
									с 14 мая работаем в обычном режиме.
								</p>
							</div>
						</article>

						<div className="flex gap-4 mt-6">
							<div className="pt-2">
								<img src={goodPlaceYandex} alt="Яндекс Хорошее место 2026" />
							</div>

							<div>
								<a
									href="https://yandex.ru/project/maps/goodplace/"
									target="_blank"
									className="text font-semibold text-shadow-black hover:text-primary leading-3"
								>
									Хорошее место 2026
								</a>
								<p className="text-sm text-muted-foreground leading-2 mt-1">
									Награда для любимых мест пользователей Яндекс Карт
								</p>
								<a
									href="https://yandex.ru/maps/org/dantist/1117022926"
									target="_blank"
									className="text-xs leading-0 text-gray-400 hover:text-primary hover:underline"
								>
									Посмотреть на Яндекс.Картах
								</a>
							</div>
						</div>

						<div className="flex gap-4 mt-6">
							<div className="pt-1 w-10.5">
								<img src="/pin-silver.png" alt="Премия 2ГИС" />
							</div>

							<div>
								<a
									href="https://awards.2gis.ru/"
									target="_blank"
									className="text font-semibold text-shadow-black hover:text-primary leading-3"
								>
									Номинант 2026
								</a>
								<p className="text-sm text-muted-foreground leading-2 mt-1">
									Победителей определяет народная любовь
								</p>
								<a
									href="https://2gis.ru/kurgan/firm/1407903164535921"
									target="_blank"
									className="text-xs leading-0 text-gray-400 hover:text-primary hover:underline"
								>
									Посмотреть в 2ГИС
								</a>
							</div>
						</div>
					</div>

					<div className="size-150 bg-[#6AA8D9]/25 rounded-full absolute right-0" />
					{/* Правая половина — фоновая картинка */}
					<img
						src="/doctor.png"
						alt="Стоматологические клиники Дантист"
						className="w-full max-w-md rounded-2xl lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-1/2 lg:max-w-none lg:object-cover lg:rounded-none"
					/>
				</div>
			</div>
		</section>
	)
}
