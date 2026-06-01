import { createFileRoute } from '@tanstack/react-router'
import Hero from '../../components/Hero'
import AboutSection from '../../components/AboutSection'
import ServicesSection from '../../components/ServicesSection'
import { ClinicsList } from '../../components/ClinicsList'
import TeamSection from '../../components/TeamSection'
import { DoctorsList } from '../../components/DoctorsList'
import AdvantagesSection from '../../components/AdvantagesSection'
import DevelopmentSection from '../../components/DevelopmentSection'
import WhyUsSection from '../../components/WhyUsSection'
import { getDoctors, getOfficesBrief } from '../../server-fns/doctors'
import type { Office } from '../../entities'
import type { Prisma } from '@prisma/client'

type DoctorWithOffices = Prisma.DoctorGetPayload<{
	include: {
		offices: {
			include: {
				office: true
			}
		}
	}
}>

export const Route = createFileRoute('/_app/')({
	loader: async () => {
		const [offices, doctors] = await Promise.all([
			getOfficesBrief(),
			getDoctors(),
		])

		return {
			offices: offices as Office[],
			doctors: doctors as DoctorWithOffices[],
		}
	},
	component: Home,
})

function Home() {
	const { offices, doctors } = Route.useLoaderData()

	return (
		<>
			<Hero />
			<AboutSection />
			<ServicesSection />
			<ClinicsList offices={offices} />
			<TeamSection />
			<DoctorsList doctors={doctors} />
			<AdvantagesSection />
			<DevelopmentSection />
			<WhyUsSection />
		</>
	)
}
