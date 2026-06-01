import { createFileRoute } from '@tanstack/react-router'
import { getOffices } from '../../../server-fns/doctors'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Badge } from '~/components/ui/badge'
import { Separator } from '~/components/ui/separator'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
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
		<div className="container mx-auto px-6 py-16 sm:px-12">
			<h1 className="mb-8 text-3xl font-bold">Врачи и филиалы</h1>

			<div className="space-y-8">
				{offices.map((office) => (
					<Card key={office.id}>
						<CardHeader>
							<CardTitle className="flex items-center gap-2 text-xl">
								{office.name}
							</CardTitle>
							<div className="space-y-1.5">
								<div className="flex items-start gap-2 text-sm text-muted-foreground">
									<MapPin className="mt-0.5 size-4 shrink-0" />
									<span>{office.fullAddress}</span>
								</div>
								<div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
									{office.phones.map((phone, i) => (
										<span key={i} className="flex items-center gap-1.5">
											<Phone className="size-3.5" />
											{phone}
										</span>
									))}
									<span className="flex items-center gap-1.5">
										<Mail className="size-3.5" />
										{office.email}
									</span>
								</div>
								<div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
									<span className="flex items-center gap-1.5">
										<Clock className="size-3.5" />
										Пн–Пт:{' '}
										{String(
											(office.workingHours as Record<string, string>)
												.monday_friday,
										)}
									</span>
									<span className="flex items-center gap-1.5">
										<Clock className="size-3.5" />
										Сб:{' '}
										{String(
											(office.workingHours as Record<string, string>).saturday,
										)}
									</span>
								</div>
							</div>
						</CardHeader>

						<CardContent>
							{office.doctors.length === 0 ? (
								<p className="text-sm text-muted-foreground">
									Нет врачей в этом филиале
								</p>
							) : (
								<>
									<Separator className="mb-4" />
									<h3 className="mb-3 text-lg font-semibold">Врачи</h3>
									<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
										{office.doctors.map(({ doctor }) => (
											<Card key={doctor.id} className="bg-muted/50 shadow-none">
												<CardContent className="p-4 space-y-2">
													<div className="flex items-start justify-between gap-2">
														<h4 className="font-semibold">
															{doctor.fullName}
															{doctor.isHeadDoctor && (
																<Badge
																	variant="secondary"
																	className="ml-2 text-xs"
																>
																	зав.
																</Badge>
															)}
														</h4>
														{!doctor.isActive && (
															<Badge variant="destructive" className="text-xs">
																не активен
															</Badge>
														)}
													</div>
													<p className="text-sm text-muted-foreground">
														{doctor.position}
													</p>
													<div className="flex flex-wrap gap-1">
														{doctor.specializations.map((spec) => (
															<Badge
																key={spec}
																variant="secondary"
																className="text-xs"
															>
																{spec}
															</Badge>
														))}
													</div>
												</CardContent>
											</Card>
										))}
									</div>
								</>
							)}
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	)
}
