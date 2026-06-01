import { Link } from '@tanstack/react-router'
import { Button } from '~/components/ui/button'

export function ErrorComponent({ error }: { error: Error }) {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-4">
			<h1 className="text-6xl font-bold text-destructive">Ошибка</h1>
			<p className="text-lg text-muted-foreground">Что-то пошло не так</p>
			{error?.message && (
				<pre className="max-w-xl rounded-lg bg-muted p-4 text-sm">
					{error.message}
				</pre>
			)}
			<Button asChild>
				<Link to="/">На главную</Link>
			</Button>
		</div>
	)
}
