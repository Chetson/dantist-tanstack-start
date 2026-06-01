import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselDots,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '~/components/ui/carousel'
import { Badge } from '~/components/ui/badge'
import { Separator } from '~/components/ui/separator'
import { MapPin, User } from 'lucide-react'

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
		<Card className="h-full overflow-hidden transition-shadow hover:shadow-md">
			<div className="flex h-48 items-center justify-center bg-muted">
				{photoUrl ? (
					<img
						alt={doctor.fullName}
						className="h-full w-full object-cover"
						src={photoUrl}
					/>
				) : (
					<div className="text-center text-muted-foreground">
						<User className="mx-auto mb-2 size-16" />
						<span className="text-sm">Нет фото</span>
					</div>
				)}
			</div>

			<CardHeader>
				<CardTitle>{doctor.fullName}</CardTitle>
				<p className="text-sm font-medium text-primary">{doctor.position}</p>
			</CardHeader>

			<CardContent className="space-y-4">
				{doctor.specializations.length > 0 && (
					<div className="flex flex-wrap gap-1">
						{doctor.specializations.map((spec: string) => (
							<Badge key={spec} variant="secondary" className="text-xs">
								{spec}
							</Badge>
						))}
					</div>
				)}

				{doctor.offices.length > 0 && (
					<>
						<Separator />
						<div>
							<p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
								Ведёт приём в филиалах:
							</p>
							<ul className="space-y-1">
								{doctor.offices.map(
									({ office }: { office: { id: string; name: string } }) => (
										<li
											key={office.id}
											className="flex items-center gap-1.5 text-sm text-muted-foreground"
										>
											<MapPin className="size-3.5 shrink-0" />
											{office.name}
										</li>
									),
								)}
							</ul>
						</div>
					</>
				)}
			</CardContent>
		</Card>
	)
}

export function DoctorsList({ doctors }: { doctors: DoctorWithOffices[] }) {
	if (doctors.length === 0) {
		return null
	}

	return (
		<section className="py-16">
			<div className="container mx-auto px-6 sm:px-12">
				<h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
					Наши врачи
				</h2>

				<Carousel
					opts={{
						align: 'start',
					}}
					className="mx-auto w-full max-w-[calc(100%-3rem)] sm:max-w-[calc(100%-4rem)]"
				>
					<CarouselContent className="-ml-4">
						{doctors.map((doctor) => (
							<CarouselItem
								key={doctor.id}
								className="pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
							>
								<DoctorCard doctor={doctor} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="hidden sm:flex" />
					<CarouselNext className="hidden sm:flex" />
					<CarouselDots className="mt-6" />
				</Carousel>
			</div>
		</section>
	)
}
