/// <reference types="vite/client" />
import { type ReactNode, useState } from 'react'
import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from '@tanstack/react-router'
import { Button } from '~/components/ui/button'
import { Moon, Sun } from 'lucide-react'
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
				title: 'Дантист — Стоматология в Кургане',
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
				<Button
					variant="ghost"
					size="icon"
					className="fixed top-20 right-4 z-50 rounded-full"
					onClick={toggleDark}
				>
					{dark ? <Sun className="size-5" /> : <Moon className="size-5" />}
					<span className="sr-only">Переключить тему</span>
				</Button>
				{children}
				<Scripts />
			</body>
		</html>
	)
}
