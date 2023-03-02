import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Cardapio from './pages/Cardapio'
import Inicio from './pages/Inicio'
import Sobre from 'pages/Sobre'
import NotFound from './pages/NotFound'
import Prato from './pages/Prato'
import Menu from 'components/Menu'
import Footer from 'components/Layout/Footer'

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
          <Route path="prato/:id" element={<Prato />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}