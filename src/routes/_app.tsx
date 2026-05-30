import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Footer } from '../components/Footer'
import { Navigation } from '../components/Navigation'

export const Route = createFileRoute('/_app')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<main>
			<header>
				<Navigation />
			</header>
			<Outlet />
			<footer>
				<Footer />
			</footer>
		</main>
	)
}
