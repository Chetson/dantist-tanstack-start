import { BookOpen, Monitor, Moon, ShieldCheck } from 'lucide-react'

const advantages = [
	{
		title: 'Свой цифровой цех',
		icon: <Monitor className="size-7" />,
	},
	{
		title: 'Микроскопия Leica',
		icon: <BookOpen className="size-7" />,
	},
	{
		title: 'Пожизненная гарантия',
		icon: <ShieldCheck className="size-7" />,
	},
	{
		title: 'Лечение во сне',
		icon: <Moon className="size-7" />,
	},
]

export default function AdvantagesSection() {
	return (
		<section className="bg-primary py-12 sm:py-16">
			<div className="container mx-auto px-6 sm:px-12">
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{advantages.map((adv) => (
						<div
							key={adv.title}
							className="flex items-center gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-sm"
						>
							<div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-white/20 text-white">
								{adv.icon}
							</div>
							<span className="font-semibold text-primary-foreground">
								{adv.title}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
