import { z } from 'zod'

// Филиал
export const OfficeSchema = z.object({
	id: z.string().uuid().optional(), // UUID из БД

	// Идентификатор для фильтрации (человекопонятный)
	slug: z.string(), // "microdistrict-2" или "microdistrict-7"

	// Отображаемое название
	name: z.string(), // "мкр. 2", "мкр. 7"

	// Полный адрес
	fullAddress: z.string(), // "640023, Курганская обл., г. Курган, микрорайон 2, №9/3"

	// Телефоны регистратуры
	phones: z.array(z.string()), // ["8 (3522) 290-007", "8-902-592-00-00"]

	// Email (общий для всей организации)
	email: z.string().email().default('pacientdantist@yandex.ru'),

	// Часы работы
	workingHours: z.object({
		monday_friday: z.string(), // "09:00 – 19:00"
		saturday: z.string(), // "09:00 – 14:00"
		sunday: z.string(), // "выходной"
	}),

	// Для карты
	mapCoordinates: z
		.object({
			lat: z.number().optional(),
			lng: z.number().optional(),
		})
		.optional(),

	// Ссылки на карты
	yandexMapUrl: z.string().url().optional(),
	gis2Url: z.string().url().optional(),

	// Фотография филиала
	photoUrl: z.string().url().optional(),

	// Порядок сортировки
	sortOrder: z.number().default(0),
})
