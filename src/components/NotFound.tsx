import { Link } from '@tanstack/react-router'
import { Button } from '~/components/ui/button'

export function NotFound() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-4">
			<h1 className="text-6xl font-bold text-muted">404</h1>
			<p className="text-lg text-muted-foreground">Страница не найдена</p>
			<Button asChild>
				<Link to="/">На главную</Link>
			</Button>
		</div>
	)
}
