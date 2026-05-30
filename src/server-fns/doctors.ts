import { createServerFn } from '@tanstack/react-start'
import { prisma } from '../lib/prisma'

export const getOffices = createServerFn({ method: 'GET' }).handler(
	async () => {
		const offices = await prisma.office.findMany({
			include: {
				doctors: {
					include: {
						doctor: true,
					},
					orderBy: {
						doctor: { sortOrder: 'asc' },
					},
				},
			},
			orderBy: { sortOrder: 'asc' },
		})

		return offices
	},
)
