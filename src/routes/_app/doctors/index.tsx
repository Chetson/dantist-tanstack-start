import { createFileRoute } from '@tanstack/react-router'
import { getOffices } from '../../../server-fns/doctors'
import type { Doctor, Office } from '@prisma/client'

export const Route = createFileRoute('/_app/doctors/')({
	loader: async () => {
		const offices = await getOffices()

		return offices
	},
	component: DoctorsPage,
})

type OfficeWithDoctors = Office & {
	doctors: { doctor: Doctor }[]
}

function DoctorsPage() {
	const offices = Route.useLoaderData() as OfficeWithDoctors[]

	return (
		<div className="container mx-auto px-6 py-8">
			<h1 className="mb-8 text-3xl font-bold dark:text-slate-100">
				Врачи и филиалы
			</h1>

			<div className="space-y-8">
				{offices.map((office) => (
					<section
						key={office.id}
						className="rounded-xl border border-slate-200 p-6 dark:border-slate-700 dark:bg-slate-800"
					>
						{/* Заголовок филиала */}
						<h2 className="text-xl font-bold dark:text-slate-100">
							🏢 {office.name}
						</h2>
						<p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
							{office.fullAddress}
						</p>
						<div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm dark:text-slate-300">
							{office.phones.map((phone, i) => (
								<span key={i}>📞 {phone}</span>
							))}
							<span>✉️ {office.email}</span>
							<span>
								🕐 Пн–Пт:{' '}
								{String(
									(office.workingHours as Record<string, string>).monday_friday,
								)}
							</span>
							<span>
								🕐 Сб:{' '}
								{String(
									(office.workingHours as Record<string, string>).saturday,
								)}
							</span>
						</div>

						{/* Список врачей филиала */}
						<div className="mt-5">
							<h3 className="mb-3 text-lg font-semibold dark:text-slate-200">
								👨‍⚕️ Врачи
							</h3>
							{office.doctors.length === 0 ? (
								<p className="text-sm text-slate-400">
									Нет врачей в этом филиале
								</p>
							) : (
								<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
									{office.doctors.map(({ doctor }) => (
										<div
											key={doctor.id}
											className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-600 dark:bg-slate-700"
										>
											<div className="flex items-start justify-between">
												<h4 className="font-semibold dark:text-slate-100">
													{doctor.fullName}
													{doctor.isHeadDoctor && (
														<span className="ml-2 text-xs font-normal text-amber-500">
															зав.
														</span>
													)}
												</h4>
												{!doctor.isActive && (
													<span className="rounded bg-red-100 px-2 py-0.5 text-xs text-red-700 dark:bg-red-900/40 dark:text-red-400">
														не активен
													</span>
												)}
											</div>
											<p className="text-sm text-slate-500 dark:text-slate-400">
												{doctor.position}
											</p>
											<div className="mt-2 flex flex-wrap gap-1">
												{doctor.specializations.map((spec) => (
													<span
														key={spec}
														className="rounded bg-violet-100 px-1.5 py-0.5 text-xs text-violet-700 dark:bg-violet-900/30 dark:text-violet-300"
													>
														{spec}
													</span>
												))}
											</div>
										</div>
									))}
								</div>
							)}
						</div>
					</section>
				))}
			</div>
		</div>
	)
}
