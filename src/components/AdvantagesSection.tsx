const advantages = [
	{
		title: 'Свой цифровой цех',
		icon: (
			<svg
				className="h-7 w-7"
				fill="none"
				stroke="currentColor"
				strokeWidth={2}
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
				/>
			</svg>
		),
	},
	{
		title: 'Микроскопия Leica',
		icon: (
			<svg
				className="h-7 w-7"
				fill="none"
				stroke="currentColor"
				strokeWidth={2}
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
				/>
			</svg>
		),
	},
	{
		title: 'Пожизненная гарантия',
		icon: (
			<svg
				className="h-7 w-7"
				fill="none"
				stroke="currentColor"
				strokeWidth={2}
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
				/>
			</svg>
		),
	},
	{
		title: 'Лечение во сне',
		icon: (
			<svg
				className="h-7 w-7"
				fill="none"
				stroke="currentColor"
				strokeWidth={2}
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
				/>
			</svg>
		),
	},
]

export default function AdvantagesSection() {
	return (
		<section className="bg-linear-to-r from-pink-500 to-pink-600 py-12 sm:py-16">
			<div className="container mx-auto px-8 sm:px-12">
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{advantages.map((adv) => (
						<div
							key={adv.title}
							className="flex items-center gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-sm"
						>
							<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/20 text-white">
								{adv.icon}
							</div>
							<span className="font-semibold text-white">{adv.title}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
