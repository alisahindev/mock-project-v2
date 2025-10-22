import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { MobileLayout } from './components/layout/MobileLayout'
import { ThemeProvider } from './lib/theme-context'
import { HomePage } from './pages/HomePage'
import { LessonsPage } from './pages/LessonsPage'
import { PracticePage } from './pages/PracticePage'
import { ProfilePage } from './pages/ProfilePage'
import { SettingsPage } from './pages/SettingsPage'

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <MobileLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lessons" element={<LessonsPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </MobileLayout>
      </Router>
    </ThemeProvider>
  )
}