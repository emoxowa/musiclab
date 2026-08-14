import { Button } from '@/shared/ui/button'
import { H1 } from '@/shared/ui/h1'

export function MainPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background text-foreground">
      <H1>MusicLab</H1>
      <Button>Кнопка</Button>
    </div>
  )
}
