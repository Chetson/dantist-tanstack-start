import { AlertTriangle } from 'lucide-react'
import { Button } from './ui/button'

export default function ImportantNotice() {
	return (
		<article className="p-6  bg-[#5F4ACB] flex gap-8 items-center">
			<AlertTriangle className="size-6 shrink-0 text-primary-foreground" />
			<div className="flex-1">
				<p className="text-sm text-primary-foreground">
					Внимание! Данные площадки распространяют некорректную информацию о
					клинике, просьба не доверять этим источникам:{' '}
					<strong>ПроДокторов</strong>, <strong>Докту.ру</strong>,{' '}
					<strong>СберЗдоровье</strong>, <strong>НаПоправку</strong> и другие
					подобные площадки. <br /> Мы не несём ответственности за информацию,
					размещённую на вышеуказанных ресурсах без нашего согласия. <br />
					Официальные источники достоверной информации: <strong>
						2ГИС
					</strong>, <strong>Яндекс</strong>,{' '}
					<strong>Наш официальный сайт</strong>
				</p>
			</div>
			<div>
				<Button variant="outline">Мне всё понятно</Button>
			</div>
		</article>
	)
}
