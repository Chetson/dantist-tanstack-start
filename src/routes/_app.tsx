import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Footer } from '../components/Footer'
import { Navigation } from '../components/Navigation'
import ImportantNotice from '~/components/ImportantNotice'

export const Route = createFileRoute('/_app')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className="flex min-h-screen flex-col">
			<ImportantNotice />
			<Navigation />
			<main className="flex-1">
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}
