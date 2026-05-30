import type { z } from 'zod'
import type {
	DoctorAccreditationSchema,
	DoctorAdvancedTrainingSchema,
	DoctorEducationSchema,
	DoctorSchema,
	DoctorSpecializationSchema,
} from './schema'

export type DoctorAccreditation = z.infer<typeof DoctorAccreditationSchema>
export type DoctorAdvancedTraining = z.infer<
	typeof DoctorAdvancedTrainingSchema
>
export type DoctorEducation = z.infer<typeof DoctorEducationSchema>
export type Doctor = z.infer<typeof DoctorSchema>
export type DoctorSpecialization = z.infer<typeof DoctorSpecializationSchema>
