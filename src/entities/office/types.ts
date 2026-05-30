import type { z } from 'zod'
import type { OfficeSchema } from './schema'

export type Office = z.infer<typeof OfficeSchema>
