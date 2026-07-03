import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

const Navbar = lazy(() => import('./components/Navbar'))
const Home = lazy(() => import('./pages/Home'))

function PageLoader() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <CircularProgress color="primary" />
    </Box>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  )
}
