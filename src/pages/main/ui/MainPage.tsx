import { Button } from '@/shared/ui/button'

export function MainPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background text-foreground">
      <h1 className="text-4xl font-medium">MusicLab</h1>
      <Button>Кнопка</Button>
    </div>
  )
}
