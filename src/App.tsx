import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Result from './pages/Result'
import Edu from './pages/Edu'
import EduElementaryLow from './pages/edu/EduElementaryLow'
import EduElementaryHigh from './pages/edu/EduElementaryHigh'
import EduMiddle from './pages/edu/EduMiddle'
import EduHigh from './pages/edu/EduHigh'
import EduLifelong from './pages/edu/EduLifelong'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/survey" element={<Survey />} />
      <Route path="/result" element={<Result />} />
      <Route path="/edu" element={<Edu />} />
      <Route path="/edu/elementary-low" element={<EduElementaryLow />} />
      <Route path="/edu/elementary-high" element={<EduElementaryHigh />} />
      <Route path="/edu/middle" element={<EduMiddle />} />
      <Route path="/edu/high" element={<EduHigh />} />
      <Route path="/edu/lifelong" element={<EduLifelong />} />
    </Routes>
  )
}

export default App