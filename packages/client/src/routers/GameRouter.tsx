import { Routes, Route } from 'react-router-dom'
import { START_URL } from '../utils/links'
import Start from '../pages/Start'

export default function GameRouter() {
  return (
    <Routes>
      <Route path={START_URL} element={<Start />} />
    </Routes>
  )
}
