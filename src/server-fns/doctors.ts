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

/** Упрощённый запрос — только офисы, без докторов (для главной страницы) */
export const getOfficesBrief = createServerFn({ method: 'GET' }).handler(
	async () => {
		const offices = await prisma.office.findMany({
			orderBy: { sortOrder: 'asc' },
		})

		return offices
	},
)

/** Все активные врачи с филиалами (для главной страницы) */
export const getDoctors = createServerFn({ method: 'GET' }).handler(
	async () => {
		const doctors = await prisma.doctor.findMany({
			where: { isActive: true },
			include: {
				offices: {
					include: {
						office: true,
					},
				},
			},
			orderBy: { sortOrder: 'asc' },
		})

		return doctors
	},
)
