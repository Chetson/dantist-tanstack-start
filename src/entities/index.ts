// Врачи
export {
	DoctorSchema,
	DoctorSpecializationSchema,
	DoctorEducationSchema,
	DoctorAccreditationSchema,
	DoctorAdvancedTrainingSchema,
} from './doctor/schema'
export type {
	Doctor,
	DoctorSpecialization,
	DoctorEducation,
	DoctorAccreditation,
	DoctorAdvancedTraining,
} from './doctor/types'

// Офисы
export { OfficeSchema } from './office/schema'
export type { Office } from './office/types'
