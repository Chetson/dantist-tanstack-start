import type { Office } from '../entities'

function PlaceholderImage({ name }: { name: string }) {
	return (
		<div className="flex h-48 w-full items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
			<div className="text-center text-slate-400">
				<svg
					className="mx-auto mb-2 h-12 w-12"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1.5}
						d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
					/>
				</svg>
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
		<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
			{office.photoUrl ? (
				<img
					alt={office.name}
					className="h-48 w-full object-cover"
					src={office.photoUrl}
				/>
			) : (
				<PlaceholderImage name={office.name} />
			)}

			<div className="p-5">
				<h3 className="mb-2 text-xl font-bold text-slate-800 dark:text-slate-100">
					{office.name}
				</h3>
				<p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
					{office.fullAddress}
				</p>

				<div className="mb-4 space-y-1 text-sm text-slate-600 dark:text-slate-400">
					<div className="flex justify-between">
						<span>Пн–Пт</span>
						<span className="font-medium text-slate-800 dark:text-slate-200">
							{wh.monday_friday}
						</span>
					</div>
					<div className="flex justify-between">
						<span>Сб</span>
						<span className="font-medium text-slate-800 dark:text-slate-200">
							{wh.saturday}
						</span>
					</div>
					<div className="flex justify-between">
						<span>Вс</span>
						<span className="font-medium text-slate-800 dark:text-slate-200">
							{wh.sunday}
						</span>
					</div>
				</div>

				{office.phones.length > 0 && (
					<div className="border-t border-slate-100 pt-3 dark:border-slate-700">
						{office.phones.map((phone) => (
							<a
								key={phone}
								className="block text-sm font-medium text-pink-500 transition hover:text-pink-600"
								href={`tel:${phone.replace(/\s+/g, '')}`}
							>
								{phone}
							</a>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export function ClinicsList({ offices }: { offices: Office[] }) {
	if (offices.length === 0) {
		return null
	}

	return (
		<section className="container mx-auto px-8 py-16 sm:px-12">
			<h2 className="mb-8 text-center text-2xl font-bold text-slate-800 dark:text-slate-100 sm:text-3xl">
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
