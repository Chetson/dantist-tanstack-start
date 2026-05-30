import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import type { Prisma } from '@prisma/client'

type DoctorWithOffices = Prisma.DoctorGetPayload<{
	include: {
		offices: {
			include: {
				office: true
			}
		}
	}
}>

function DoctorCard({ doctor }: { doctor: DoctorWithOffices }) {
	const photoUrl = doctor.photoUrl

	return (
		<div className="h-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
			<div className="flex h-48 items-center justify-center bg-slate-100 dark:bg-slate-800">
				{photoUrl ? (
					<img
						alt={doctor.fullName}
						className="h-full w-full object-cover"
						src={photoUrl}
					/>
				) : (
					<div className="text-center text-slate-400">
						<svg
							className="mx-auto mb-2 h-16 w-16"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1}
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/>
						</svg>
						<span className="text-sm">Нет фото</span>
					</div>
				)}
			</div>

			<div className="p-4">
				<h3 className="mb-1 text-lg font-bold text-slate-800 dark:text-slate-100">
					{doctor.fullName}
				</h3>
				<p className="mb-2 text-sm font-medium text-pink-500">
					{doctor.position}
				</p>

				{doctor.specializations.length > 0 && (
					<div className="mb-3 flex flex-wrap gap-1">
						{doctor.specializations.map((spec: string) => (
							<span
								key={spec}
								className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400"
							>
								{spec}
							</span>
						))}
					</div>
				)}

				{doctor.offices.length > 0 && (
					<div className="border-t border-slate-100 pt-3 dark:border-slate-700">
						<p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
							Ведёт приём в филиалах:
						</p>
						<ul className="space-y-0.5">
							{doctor.offices.map(
								({ office }: { office: { id: string; name: string } }) => (
									<li
										key={office.id}
										className="text-sm text-slate-600 dark:text-slate-400"
									>
										{office.name}
									</li>
								),
							)}
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}

export function DoctorsList({ doctors }: { doctors: DoctorWithOffices[] }) {
	if (doctors.length === 0) {
		return null
	}

	return (
		<section className="py-16">
			<div className="container mx-auto px-8 sm:px-12">
				<h2 className="mb-8 text-center text-2xl font-bold text-slate-800 dark:text-slate-100 sm:text-3xl">
					Наши врачи
				</h2>

				<Swiper
					modules={[Navigation, Pagination]}
					navigation
					pagination={{ clickable: true }}
					slidesPerView={1}
					spaceBetween={20}
					breakpoints={{
						640: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
						1280: { slidesPerView: 4 },
					}}
				>
					{doctors.map((doctor) => (
						<SwiperSlide key={doctor.id}>
							<DoctorCard doctor={doctor} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}
