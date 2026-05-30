/// <reference types="vite/client" />
import { type ReactNode, useState } from 'react'
import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from '@tanstack/react-router'
import { ErrorComponent } from '../components/ErrorComponent'

import appCss from '../app.css?url'

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: 'utf-8',
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				title: 'TanStack Start Starter',
			},
		],
		links: [
			{ rel: 'stylesheet', href: appCss },
			{ rel: 'icon', href: '/favicon.svg' },
		],
	}),
	component: RootComponent,
	errorComponent: ErrorComponent,
})

function RootComponent() {
	return (
		<RootDocument>
			<Outlet />
		</RootDocument>
	)
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
	const [dark, setDark] = useState(false)
	const toggleDark = () => setDark(!dark)

	return (
		<html className={dark ? 'dark' : ''}>
			<head>
				<HeadContent />
			</head>
			<body cz-shortcut-listen="true">
				<button onClick={toggleDark}>{dark ? '☀️' : '🌙'}</button>
				{children}
				<Scripts />
			</body>
		</html>
	)
}
