import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { config } from 'dotenv'

config({ path: '.env.local' })

const adapter = new PrismaPg({
	connectionString: process.env.DATABASE_URL!,
})
const prisma = new PrismaClient({ adapter })

async function main() {
	// Очищаем старые данные (порядок важен из-за внешних ключей)
	await prisma.doctorOffice.deleteMany()
	await prisma.doctor.deleteMany()
	await prisma.office.deleteMany()
	console.log('Old data cleared')

	// ========== Офисы (адреса из исходных файлов) ==========
	const office2 = await prisma.office.create({
		data: {
			slug: 'microdistrict-2',
			name: 'мкр. 2',
			fullAddress:
				'640023, Курганская обл., г. Курган, микрорайон 2, № 9',
			phones: ['8 (3522) 290-007', '8-902-592-00-00'],
			email: 'pacientdantist@yandex.ru',
			workingHours: {
				monday_friday: '09:00 – 19:00',
				saturday: '09:00 – 14:00',
				sunday: 'выходной',
			},
			sortOrder: 0,
		},
	})

	const office7 = await prisma.office.create({
		data: {
			slug: 'microdistrict-7',
			name: 'мкр. 7',
			fullAddress:
				'640023, Курганская обл., г. Курган, микрорайон 7, № 1А',
			phones: ['8 (3522) 290-007', '8-902-592-00-00'],
			email: 'pacientdantist@yandex.ru',
			workingHours: {
				monday_friday: '09:00 – 19:00',
				saturday: '09:00 – 14:00',
				sunday: 'выходной',
			},
			sortOrder: 1,
		},
	})

	console.log('Offices created:', office2.id, office7.id)

	// ========== Врачи ==========

	// --- Казанцев Олег Александрович (оба филиала) ---
	const kazantsev = await prisma.doctor.create({
		data: {
			fullName: 'Казанцев Олег Александрович',
			position: 'заведующий медицинской организацией',
			specializations: [
				'Врач-стоматолог',
				'стоматолог-ортопед',
				'зубной техник',
			],
			isHeadDoctor: true,
			educations: [
				{
					documentType: 'Диплом',
					number: 'ДВС 1272891',
					institution:
						'ГОУ ВПО «Уральская государственная медицинская академия», г. Екатеринбург',
					issueDate: '2005-06-27',
					qualification: 'Врач по специальности «Стоматология»',
					registrationNumber: '106',
				},
				{
					documentType: 'Диплом',
					number: 'ППЕ №015943',
					institution:
						'ГБОУ ВПО «Северо-Западный государственный медицинский университет имени И.И. Мечникова»',
					issueDate: '2012-12-15',
					qualification:
						'Организация здравоохранения и общественное здоровье',
					registrationNumber: '17175',
				},
				{
					documentType: 'Диплом',
					number: 'ПП №359093',
					institution:
						'Омская государственная медицинская академия',
					issueDate: '2007-07-11',
					qualification: 'Стоматология ортопедическая',
					registrationNumber: '22210/5606',
				},
			],
			accreditations: [],
			sortOrder: 0,
		},
	})

	// --- Коломин Владимир Сергеевич (мкр. 7) ---
	const kolomin = await prisma.doctor.create({
		data: {
			fullName: 'Коломин Владимир Сергеевич',
			position: 'стоматолог-ортопед, стоматолог-хирург',
			specializations: ['стоматолог-ортопед', 'стоматолог-хирург'],
			educations: [
				{
					documentType: 'Диплом',
					number: '',
					institution:
						'ГОУ ВПО «Уральская государственная медицинская академия Федерального агентства по здравоохранению и социальному развитию», г. Екатеринбург',
					issueDate: '2009-06-29',
					qualification:
						'Врач по специальности «Стоматология»',
				},
			],
			accreditations: [
				{
					type: 'Свидетельство об аккредитации специалиста',
					number: '7722 028773075',
					issueDate: '2022-12-27',
					specialty: 'Стоматология ортопедическая',
				},
				{
					type: 'Свидетельство об аккредитации специалиста',
					number: '7723 030448772',
					issueDate: '2023-06-27',
					specialty: 'Стоматология хирургическая',
				},
			],
			sortOrder: 1,
		},
	})

	// --- Евдошенко Александр Андреевич (мкр. 7) ---
	const evdoshenko = await prisma.doctor.create({
		data: {
			fullName: 'Евдошенко Александр Андреевич',
			position: 'стоматолог-хирург',
			specializations: ['стоматолог-хирург'],
			educations: [
				{
					documentType: 'Диплом',
					number: 'СБ/5772205',
					institution:
						'«Курганский базовый медицинский колледж»',
					issueDate: '2006-06-21',
					qualification:
						'Зубной врач по специальности «Стоматология»',
				},
				{
					documentType: 'Диплом',
					number: '106324/3479527',
					institution:
						'«Самарский государственный медицинский университет»',
					issueDate: '2019-01-24',
					qualification:
						'Врач-стоматолог по специальности «Стоматология»',
				},
			],
			accreditations: [
				{
					type: 'Свидетельство об аккредитации специалиста',
					number: '6322 017394280',
					issueDate: '2022-12-05',
					specialty: 'Стоматология хирургическая',
				},
				{
					type: 'Свидетельство об аккредитации специалиста',
					number: '7724 031892488',
					issueDate: '2024-05-21',
					specialty: 'Стоматология общей практики',
				},
			],
			sortOrder: 2,
		},
	})

	// --- Баранова Елена Владимировна (мкр. 7) ---
	const baranova = await prisma.doctor.create({
		data: {
			fullName: 'Баранова Елена Владимировна',
			position: 'зубной врач',
			specializations: ['зубной врач'],
			educations: [
				{
					documentType: 'Диплом',
					number: 'СБ/0045744',
					institution:
						'Курганское базовое медицинское училище',
					issueDate: '1998-06-26',
					qualification: 'Зубной врач',
					registrationNumber: '280',
				},
			],
			accreditations: [
				{
					type: 'Свидетельство об аккредитации специалиста (периодическая аккредитация)',
					number: '7723 030743999',
					issueDate: '2023-04-25',
					specialty: 'Стоматология',
				},
			],
			sortOrder: 3,
		},
	})

	// --- Бачурина Ольга Владимировна (мкр. 7) ---
	const bachurina = await prisma.doctor.create({
		data: {
			fullName: 'Бачурина Ольга Владимировна',
			position: 'зубной врач',
			specializations: ['зубной врач'],
			educations: [
				{
					documentType: 'Диплом',
					number: 'СБ/5237754',
					institution:
						'Курганский базовый медицинский колледж',
					issueDate: '2006-06-23',
					qualification: 'Зубной врач',
					registrationNumber: '265',
				},
			],
			accreditations: [
				{
					type: 'Сведения об аккредитации специалиста (периодическая аккредитация)',
					number: '7723 029955365',
					issueDate: '2023-05-30',
					specialty: 'Стоматология',
				},
			],
			sortOrder: 4,
		},
	})

	// --- Шкилева Марина Александровна (мкр. 7) ---
	const shkileva = await prisma.doctor.create({
		data: {
			fullName: 'Шкилева Марина Александровна',
			position: 'зубной врач',
			specializations: ['зубной врач'],
			educations: [
				{
					documentType: 'Диплом',
					number: '45 БА/0001772',
					institution:
						'Курганский базовый медицинский колледж',
					issueDate: '2008-06-28',
					qualification: 'Зубной врач',
					registrationNumber: '495',
				},
			],
			accreditations: [
				{
					type: 'Сведения об аккредитации специалиста (периодическая аккредитация)',
					number: '7723 030346092',
					issueDate: '2023-02-28',
					specialty: 'Стоматология',
				},
			],
			sortOrder: 5,
		},
	})

	// --- Федотова Ксения Николаевна (мкр. 7) ---
	const fedotova = await prisma.doctor.create({
		data: {
			fullName: 'Федотова Ксения Николаевна',
			position: 'зубной врач',
			specializations: ['зубной врач'],
			educations: [
				{
					documentType: 'Диплом',
					number: 'СБ/4437967',
					institution:
						'Курганский базовый медицинский колледж',
					issueDate: '2004-06-28',
					qualification: 'Зубной врач',
					registrationNumber: '265',
				},
			],
			accreditations: [
				{
					type: 'Сведения об аккредитации специалиста (периодическая аккредитация)',
					number: '7723 031063997',
					issueDate: '2023-08-29',
					specialty: 'Стоматология',
				},
			],
			sortOrder: 6,
		},
	})

	// --- Леванде Светлана Мироновна (мкр. 7) ---
	const levande = await prisma.doctor.create({
		data: {
			fullName: 'Леванде Светлана Мироновна',
			position: 'зубной врач',
			specializations: ['зубной врач'],
			educations: [
				{
					documentType: 'Диплом',
					number: 'СТ №647530',
					institution:
						'Курганское базовое медицинское училище',
					issueDate: '1994-06-27',
					qualification: 'Зубной врач',
					registrationNumber: '779',
				},
			],
			accreditations: [
				{
					type: 'Сведения об аккредитации специалиста (периодическая аккредитация)',
					number: '7724 031702050',
					issueDate: '2024-02-27',
					specialty: 'Стоматология',
				},
			],
			sortOrder: 7,
		},
	})

	// --- Мезева Светлана Сергеевна (оба филиала) ---
	const mezeva = await prisma.doctor.create({
		data: {
			fullName: 'Мезева Светлана Сергеевна',
			position: 'медицинская сестра, рентгенолаборант',
			specializations: [
				'медицинская сестра',
				'рентгенолаборант',
			],
			educations: [
				{
					documentType: 'Диплом',
					number: 'СБ/1798102',
					institution:
						'Курганский базовый медицинский колледж',
					issueDate: '1999-12-24',
					qualification:
						'Медицинская сестра по специальности «Сестринское дело»',
					registrationNumber: '458',
				},
				{
					documentType: 'Диплом',
					number: '542413778570',
					institution:
						'АНО ДПО «СИНМО»',
					issueDate: '2020-12-31',
					qualification:
						'Рентгенология. Лабораторное дело в рентгенологии',
					registrationNumber: 'ДНМ00407/20',
				},
			],
			accreditations: [
				{
					type: 'Свидетельство об аккредитации специалиста',
					number: '7723 031615157',
					issueDate: '2023-12-26',
					specialty: 'Сестринское дело',
				},
				{
					type: 'Сертификат специалиста',
					number: '0845180615632',
					issueDate: '2016-12-20',
					specialty: 'Рентгенология',
					registrationNumber: '2165',
				},
				{
					type: 'Свидетельство об аккредитации специалиста',
					number: '7726 033895565',
					issueDate: '2026-01-13',
					specialty: 'Рентгенология',
				},
				{
					type: 'Сертификат специалиста',
					number: '1154242739017',
					issueDate: '2020-12-31',
					specialty: 'Рентгенология',
					registrationNumber: 'СНМ01782/20',
				},
			],
			advancedTrainings: [
				{
					documentType:
						'Удостоверение о повышении квалификации',
					number: '7724 21112342',
					institution: 'г. Москва',
					program: 'Сестринское дело',
					issueDate: '2023-12-14',
					registrationNumber: '12/23-У3151',
				},
				{
					documentType:
						'Удостоверение о повышении квалификации',
					number: '22202 №50-1',
					institution: '',
					program: '',
					issueDate: '2022-08-12',
					registrationNumber: '22202-50-1',
				},
			],
			sortOrder: 8,
		},
	})

	// --- Филиппова Нина Михайловна (мкр. 7) ---
	const filippova = await prisma.doctor.create({
		data: {
			fullName: 'Филиппова Нина Михайловна',
			position: 'медицинская сестра',
			specializations: [
				'медицинская сестра',
				'рентгенолаборант',
			],
			educations: [
				{
					documentType: 'Диплом',
					number: 'СБ/6697321',
					institution:
						'ГБУ СПО «Курганский базовый медицинский колледж»',
					issueDate: '2006-06-21',
					qualification:
						'Акушерка/акушер по специальности «Акушерское дело»',
				},
			],
			accreditations: [
				{
					type: 'Свидетельство об аккредитации специалиста',
					number: '7725 033422038',
					issueDate: '',
					specialty: 'Сестринское дело',
				},
				{
					type: 'Свидетельство об аккредитации специалиста',
					number: '7726 033898183',
					issueDate: '',
					specialty: 'Рентгенология',
				},
			],
			advancedTrainings: [
				{
					documentType:
						'Удостоверение о повышении квалификации',
					number: '7724 24715161',
					institution: 'г. Москва',
					program: 'Сестринское дело',
					issueDate: '2025-04-21',
					registrationNumber: '04/25-У1511',
				},
				{
					documentType:
						'Диплом о профессиональной переподготовке',
					number: '772410918909',
					institution:
						'«Центральный многопрофильный институт», г. Москва',
					program: 'Рентгенология',
					issueDate: '2020-12-04',
					registrationNumber: '2012-30926',
				},
			],
			sortOrder: 9,
		},
	})

	// --- Скокова Алёна Хайбуллоевна (мкр. 7) ---
	const skokova = await prisma.doctor.create({
		data: {
			fullName: 'Скокова Алёна Хайбуллоевна',
			position: 'медицинская сестра',
			specializations: ['медицинская сестра'],
			educations: [
				{
					documentType: 'Диплом',
					number: '114516 0117182',
					institution:
						'«Курганский базовый медицинский колледж», п. Юргамыш',
					issueDate: '2017-06-22',
					qualification:
						'По специальности 34.02.01 «Сестринское дело»',
					registrationNumber: '36',
				},
			],
			accreditations: [
				{
					type: 'Свидетельство об аккредитации специалиста',
					number: '7723 031615157',
					issueDate: '2023-12-26',
					specialty: 'Сестринское дело',
				},
			],
			advancedTrainings: [
				{
					documentType:
						'Удостоверение о повышении квалификации',
					number: '7724 24427099',
					institution: 'г. Москва',
					program: 'Сестринское дело',
					issueDate: '2025-03-21',
					registrationNumber: '03/25-У1134',
				},
			],
			sortOrder: 10,
		},
	})

	// --- Басманова Нина Трофимовна (мкр. 2) ---
	const basmanova = await prisma.doctor.create({
		data: {
			fullName: 'Басманова Нина Трофимовна',
			position: 'зубной врач',
			specializations: ['зубной врач'],
			educations: [
				{
					documentType: 'Диплом',
					number: '',
					institution:
						'Курганское базовое медицинское училище',
					issueDate: '1981-07-03',
					qualification: 'Зубной врач',
					registrationNumber: '280',
				},
			],
			accreditations: [
				{
					type: 'Свидетельство об аккредитации',
					number: '7725 032939979',
					issueDate: '2025-05-27',
					specialty: 'Стоматология',
				},
			],
			advancedTrainings: [
				{
					documentType:
						'Удостоверение о повышении квалификации',
					number: '772423823006',
					institution: 'г. Москва',
					program: 'Стоматология',
					issueDate: '2025-01-13',
					registrationNumber: '01/25-У37',
				},
			],
			sortOrder: 0,
		},
	})

	// --- Полякова Людмила Вячеславовна (мкр. 2) ---
	const polyakova = await prisma.doctor.create({
		data: {
			fullName: 'Полякова Людмила Вячеславовна',
			position: 'зубной врач',
			specializations: ['зубной врач'],
			educations: [
				{
					documentType: 'Диплом',
					number: 'ПТ-I №364832',
					institution:
						'Петропавловское медицинское училище Северо-Казахстанской области',
					issueDate: '1994-06-30',
					qualification:
						'Зубной врач по специальности «Стоматология»',
				},
			],
			accreditations: [
				{
					type: 'Свидетельство об аккредитации',
					number: '7724 031951940',
					issueDate: '2024-06-25',
					specialty: 'Стоматология',
				},
			],
			advancedTrainings: [
				{
					documentType:
						'Удостоверение о повышении квалификации',
					number: '772421761597',
					institution: 'г. Москва',
					program: 'Стоматология',
					issueDate: '2024-04-18',
					registrationNumber: '04/24-У833',
				},
			],
			sortOrder: 1,
		},
	})

	// --- Кузнецова Елена Николаевна (мкр. 2) ---
	const kuznetsova = await prisma.doctor.create({
		data: {
			fullName: 'Кузнецова Елена Николаевна',
			position: 'зубной врач',
			specializations: ['зубной врач'],
			educations: [
				{
					documentType: 'Диплом',
					number: 'СБ 3020709',
					institution:
						'«КБМК», г. Курган',
					issueDate: '2002-06-27',
					qualification: 'По специальности «Стоматология»',
				},
			],
			accreditations: [
				{
					type: 'Свидетельство об аккредитации специалиста',
					number: '7722 030593748',
					issueDate: '2022-04-28',
					specialty: 'Стоматология',
				},
			],
			sortOrder: 2,
		},
	})

	// --- Осипова Татьяна Валентиновна (мкр. 2) ---
	const osipova = await prisma.doctor.create({
		data: {
			fullName: 'Осипова Татьяна Валентиновна',
			position: 'зубной врач',
			specializations: ['зубной врач'],
			educations: [
				{
					documentType: 'Диплом',
					number: 'СТ-I №331496',
					institution:
						'КБМК',
					issueDate: '1996-06-28',
					qualification:
						'Зубной врач по специальности «Стоматология»',
				},
			],
			accreditations: [
				{
					type: 'Сертификат специалиста',
					number: '0155240297917',
					issueDate: '2024-05-31',
					specialty: 'Стоматология',
					registrationNumber: '45320',
				},
				{
					type: 'Свидетельство об аккредитации',
					number: '7724 031786366',
					issueDate: '2024-03-26',
					specialty: 'Стоматология',
				},
			],
			sortOrder: 3,
		},
	})

	// --- Кустова Юлия Владимировна (мкр. 2) ---
	const kustova = await prisma.doctor.create({
		data: {
			fullName: 'Кустова Юлия Владимировна',
			position: 'зубной врач',
			specializations: ['зубной врач'],
			educations: [
				{
					documentType: 'Диплом',
					number: '45 БА 0001789',
					institution:
						'«Курганский базовый медицинский колледж»',
					issueDate: '2008-06-23',
					qualification:
						'Зубной врач по специальности «Стоматология»',
					registrationNumber: '512',
				},
			],
			accreditations: [
				{
					type: 'Свидетельство об аккредитации',
					number: '7723 030775989',
					issueDate: '2023-04-25',
					specialty: 'Стоматология',
				},
			],
			advancedTrainings: [
				{
					documentType:
						'Удостоверение о повышении квалификации',
					number: '622418330313',
					institution: '',
					program: '',
					issueDate: '2022-11-11',
					registrationNumber: '005425/22',
				},
			],
			sortOrder: 4,
		},
	})

	// --- Иванов Евгений Иванович (мкр. 2) ---
	const ivanov = await prisma.doctor.create({
		data: {
			fullName: 'Иванов Евгений Иванович',
			position: 'стоматолог-ортопед',
			specializations: ['стоматолог-ортопед'],
			educations: [
				{
					documentType: 'Диплом специалиста',
					number: '102124 6315440',
					institution:
						'ФГБОУВО «Чувашский государственный университет имени И.Н. Ульянова», г. Чебоксары',
					issueDate: '2022-07-05',
					qualification: 'Врач-стоматолог',
					registrationNumber: '9833',
				},
				{
					documentType:
						'Диплом об окончании ординатуры',
					number: '102124 160729',
					institution:
						'ФГБОУВО «Чувашский государственный университет имени И.Н. Ульянова», г. Чебоксары',
					issueDate: '2024-07-01',
					qualification:
						'По специальности «31.08.75 Стоматология ортопедическая»',
					registrationNumber: '1782',
				},
			],
			accreditations: [
				{
					type: 'Свидетельство об аккредитации',
					number: '2122 030702684',
					issueDate: '2022-07-20',
					specialty: 'Стоматология общей практики',
				},
				{
					type: 'Свидетельство об аккредитации',
					number: '2124 032043679',
					issueDate: '2024-07-10',
					specialty: 'Стоматология ортопедическая',
				},
			],
			sortOrder: 5,
		},
	})

	// --- Штаченко Ольга Васильевна (мкр. 2) ---
	const shtachenko = await prisma.doctor.create({
		data: {
			fullName: 'Штаченко Ольга Васильевна',
			position: 'стоматолог-хирург',
			specializations: ['стоматолог-хирург'],
			educations: [
				{
					documentType: 'Диплом',
					number: 'ВСБ/0952323',
					institution:
						'ГОУВПО «Омская государственная медицинская академия»',
					issueDate: '2006-06-22',
					qualification:
						'Врач по специальности «Стоматология»',
				},
			],
			accreditations: [],
			sortOrder: 6,
		},
	})

	// --- Горбунова Оксана Ивановна (мкр. 2) ---
	const gorbunova = await prisma.doctor.create({
		data: {
			fullName: 'Горбунова Оксана Ивановна',
			position: 'медицинская сестра',
			specializations: ['медицинская сестра'],
			educations: [
				{
					documentType: 'Диплом',
					number: 'СБ 1798195',
					institution:
						'«КБМК», г. Курган',
					issueDate: '1999-12-24',
					qualification:
						'По специальности «Сестринское дело»',
				},
			],
			accreditations: [
				{
					type: 'Свидетельство об аккредитации',
					number: '7725032672541',
					issueDate: '2025-02-25',
					specialty: 'Сестринское дело',
				},
			],
			advancedTrainings: [
				{
					documentType:
						'Удостоверение о повышении квалификации',
					number: '772421761650',
					institution: 'г. Москва',
					program: 'Сестринское дело в стоматологии',
					issueDate: '2024-04-15',
					registrationNumber: '04/24-У886',
				},
			],
			sortOrder: 7,
		},
	})

	// --- Ситяева Карина Михайловна (мкр. 2) ---
	const sityaeva = await prisma.doctor.create({
		data: {
			fullName: 'Ситяева Карина Михайловна',
			position: 'медицинская сестра',
			specializations: ['медицинская сестра'],
			educations: [
				{
					documentType: 'Диплом',
					number: '000000152',
					institution:
						'ГБПОУ «КБМК», г. Курган',
					issueDate: '2020-06-30',
					qualification:
						'По специальности «Сестринское дело»',
				},
			],
			accreditations: [],
			advancedTrainings: [
				{
					documentType:
						'Удостоверение о повышении квалификации',
					number: '772421761634',
					institution: 'г. Москва',
					program: 'Сестринское дело',
					issueDate: '2024-05-13',
					registrationNumber: '05/24-У870',
				},
			],
			sortOrder: 8,
		},
	})

	// --- Дыбань Валентина Юрьевна (мкр. 2) ---
	const dyban = await prisma.doctor.create({
		data: {
			fullName: 'Дыбань Валентина Юрьевна',
			position: 'медицинская сестра',
			specializations: ['медицинская сестра'],
			educations: [
				{
					documentType: 'Диплом',
					number: '45 БА 000612',
					institution:
						'ГОУ СПО Макушинское медицинское училище',
					issueDate: '2007-06-21',
					qualification:
						'По специальности «Сестринское дело»',
				},
			],
			accreditations: [
				{
					type: 'Свидетельство об аккредитации',
					number: '7725 032762907',
					issueDate: '2025-03-25',
					specialty: 'Сестринское дело',
				},
			],
			advancedTrainings: [
				{
					documentType:
						'Удостоверение о повышении квалификации',
					number: '772423823007',
					institution: 'г. Москва',
					program: 'Сестринское дело в стоматологии',
					issueDate: '2025-01-13',
					registrationNumber: '01/25-У38',
				},
			],
			sortOrder: 9,
		},
	})

	console.log('Doctors created')

	// ========== Связи многие-ко-многим ==========
	await prisma.doctorOffice.createMany({
		data: [
			// Врачи только мкр. 7
			{ doctorId: kolomin.id, officeId: office7.id },
			{ doctorId: evdoshenko.id, officeId: office7.id },
			{ doctorId: baranova.id, officeId: office7.id },
			{ doctorId: bachurina.id, officeId: office7.id },
			{ doctorId: shkileva.id, officeId: office7.id },
			{ doctorId: fedotova.id, officeId: office7.id },
			{ doctorId: levande.id, officeId: office7.id },
			{ doctorId: filippova.id, officeId: office7.id },
			{ doctorId: skokova.id, officeId: office7.id },

			// Врачи только мкр. 2
			{ doctorId: basmanova.id, officeId: office2.id },
			{ doctorId: polyakova.id, officeId: office2.id },
			{ doctorId: kuznetsova.id, officeId: office2.id },
			{ doctorId: osipova.id, officeId: office2.id },
			{ doctorId: kustova.id, officeId: office2.id },
			{ doctorId: ivanov.id, officeId: office2.id },
			{ doctorId: shtachenko.id, officeId: office2.id },
			{ doctorId: gorbunova.id, officeId: office2.id },
			{ doctorId: sityaeva.id, officeId: office2.id },
			{ doctorId: dyban.id, officeId: office2.id },

			// Врачи в обоих филиалах
			{ doctorId: kazantsev.id, officeId: office2.id },
			{ doctorId: kazantsev.id, officeId: office7.id },
			{ doctorId: mezeva.id, officeId: office2.id },
			{ doctorId: mezeva.id, officeId: office7.id },
		],
	})

	console.log('Doctor-Office relations created')
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
