import type { Office } from '../entities'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Badge } from '~/components/ui/badge'
import { Separator } from '~/components/ui/separator'
import { Building2, MapPin, Clock, Phone } from 'lucide-react'

function PlaceholderImage({ name }: { name: string }) {
	return (
		<div className="flex h-48 w-full items-center justify-center rounded-t-xl bg-muted">
			<div className="text-center text-muted-foreground">
				<Building2 className="mx-auto mb-2 size-12" />
				<span className="text-sm font-medium">{name}</span>
			</div>
		</div>
	)
}

function ClinicCard({ office }: { office: Office }) {
	const wh = office.workingHours as {
		monday_friday: string
		saturday: string
		sunday: string
	}

	return (
		<Card className="overflow-hidden transition-shadow hover:shadow-md">
			{office.photoUrl ? (
				<img
					alt={office.name}
					className="h-48 w-full object-cover"
					src={office.photoUrl}
				/>
			) : (
				<PlaceholderImage name={office.name} />
			)}

			<CardHeader>
				<CardTitle>{office.name}</CardTitle>
			</CardHeader>

			<CardContent className="space-y-4">
				<div className="flex items-start gap-2 text-sm text-muted-foreground">
					<MapPin className="mt-0.5 size-4 shrink-0" />
					<span>{office.fullAddress}</span>
				</div>

				<div className="space-y-1.5">
					<div className="flex items-center gap-2 text-sm text-muted-foreground">
						<Clock className="size-4 shrink-0" />
						<span className="font-medium text-foreground">Часы работы</span>
					</div>
					<div className="ml-6 space-y-1 text-sm">
						<div className="flex justify-between">
							<span className="text-muted-foreground">Пн–Пт</span>
							<Badge variant="secondary">{wh.monday_friday}</Badge>
						</div>
						<div className="flex justify-between">
							<span className="text-muted-foreground">Сб</span>
							<Badge variant="secondary">{wh.saturday}</Badge>
						</div>
						<div className="flex justify-between">
							<span className="text-muted-foreground">Вс</span>
							<Badge variant="secondary">{wh.sunday}</Badge>
						</div>
					</div>
				</div>

				{office.phones.length > 0 && (
					<>
						<Separator />
						<div className="space-y-1">
							{office.phones.map((phone) => (
								<a
									key={phone}
									className="flex items-center gap-2 text-sm font-medium text-primary transition hover:text-primary/80"
									href={`tel:${phone.replace(/\s+/g, '')}`}
								>
									<Phone className="size-4" />
									{phone}
								</a>
							))}
						</div>
					</>
				)}
			</CardContent>
		</Card>
	)
}

export function ClinicsList({ offices }: { offices: Office[] }) {
	if (offices.length === 0) {
		return null
	}

	return (
		<section className="container mx-auto px-6 py-16 sm:px-12">
			<h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
				Наши филиалы
			</h2>
			<div className="grid gap-6 sm:grid-cols-2">
				{offices.map((office) => (
					<ClinicCard key={office.id} office={office} />
				))}
			</div>
		</section>
	)
}
