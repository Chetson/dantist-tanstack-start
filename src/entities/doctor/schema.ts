import { z } from 'zod'

// Специализации врачей (на основе реальных данных из файлов)
export const DoctorSpecializationSchema = z.enum([
	'стоматолог-терапевт',
	'стоматолог-ортопед',
	'стоматолог-хирург',
	'стоматолог-хирург-имплантолог',
	'зубной врач',
	'медицинская сестра',
	'рентгенолаборант',
	'зубной техник',
	'заведующий',
])

// Образование (диплом)
export const DoctorEducationSchema = z.object({
	documentType: z.enum([
		'Диплом',
		'Диплом специалиста',
		'Диплом об окончании ординатуры',
		'Диплом о профессиональной переподготовке',
	]),
	series: z.string().optional(),
	number: z.string(),
	registrationNumber: z.string().optional(),
	institution: z.string(),
	issueDate: z.string(),
	qualification: z.string(),
	specialty: z.string().optional(),
})

// Аккредитация / сертификат
export const DoctorAccreditationSchema = z.object({
	type: z.enum([
		'Свидетельство об аккредитации',
		'Сертификат специалиста',
		'Сведения об аккредитации',
	]),
	number: z.string(), // номер документа
	issueDate: z.string(), // дата выдачи
	expiryDate: z.string().optional(), // срок действия (если указан)
	specialty: z.string(), // по какой специальности
})

// Повышение квалификации / удостоверение
export const DoctorAdvancedTrainingSchema = z.object({
	documentType: z.enum(['Удостоверение о повышении квалификации']),
	number: z.string(), // номер удостоверения
	registrationNumber: z.string().optional(),
	institution: z.string(), // где проходил
	program: z.string(), // название программы
	issueDate: z.string(), // дата выдачи
})

// Полная схема врача
export const DoctorSchema = z.object({
	id: z.string().uuid().optional(), // UUID из БД

	// Основная информация
	fullName: z.string(), // ФИО полностью
	position: z.string(), // должность (строка, может быть составной)
	specializations: z.array(DoctorSpecializationSchema),

	// Привязка к филиалам (many-to-many)
	officeIds: z.array(z.string().uuid()),

	// Образование (может быть несколько дипломов)
	educations: z.array(DoctorEducationSchema),

	// Аккредитации/сертификаты (может быть несколько)
	accreditations: z.array(DoctorAccreditationSchema),

	// Повышение квалификации (опционально)
	advancedTrainings: z.array(DoctorAdvancedTrainingSchema).optional(),

	// Дополнительные поля для отображения
	isHeadDoctor: z.boolean().optional(), // заведующий ли?
	isActive: z.boolean().default(true), // активен ли врач
	photoUrl: z.string().url().optional(), // фото

	// Порядок сортировки (для списка)
	sortOrder: z.number().default(0),
})
