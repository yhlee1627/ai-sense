import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Result from './pages/Result'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/survey" element={<Survey />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  )
}

export default App