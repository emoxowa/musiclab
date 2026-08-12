import { AppProviders } from '@/app/providers'
import { MainPage } from '@/pages/main'

export function App() {
  return (
    <AppProviders>
      <MainPage />
    </AppProviders>
  )
}
