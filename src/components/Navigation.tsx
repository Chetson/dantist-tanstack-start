import { Link } from '@tanstack/react-router'
import { Button } from '~/components/ui/button'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '~/components/ui/sheet'
import { Menu } from 'lucide-react'
import logoSvg from '~/assets/logo.svg'

const navLinks = [
	{ label: 'Главная', to: '/' },
	{ label: 'Врачи', to: '/doctors' },
	{ label: 'Услуги', to: '/services' },
	{ label: 'О клинике', to: '/about' },
	{ label: 'Контакты', to: '/contacts' },
]

export const Navigation = () => {
	return (
		<header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto flex h-16 items-center px-6 sm:px-12">
				{/* Logo */}
				<Link to="/" className="flex items-center gap-2">
					<img src={logoSvg} alt="Дантист" className="h-10 w-auto" />
				</Link>

				{/* Desktop nav */}
				<nav className="ml-auto hidden md:flex md:items-center md:gap-1">
					{navLinks.map((link) => (
						<Button key={link.to} variant="ghost" size="sm" asChild>
							<Link to={link.to}>{link.label}</Link>
						</Button>
					))}
				</nav>

				{/* Mobile nav */}
				<Sheet>
					<SheetTrigger asChild>
						<Button variant="ghost" size="icon" className="ml-auto md:hidden">
							<Menu className="size-5" />
							<span className="sr-only">Открыть меню</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="right">
						<SheetHeader>
							<SheetTitle>Меню</SheetTitle>
						</SheetHeader>
						<nav className="flex flex-col gap-1">
							{navLinks.map((link) => (
								<Button
									key={link.to}
									variant="ghost"
									asChild
									className="justify-start"
								>
									<Link to={link.to}>{link.label}</Link>
								</Button>
							))}
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	)
}
