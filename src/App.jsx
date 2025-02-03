import { useState } from 'react'
import Arc from './components/Arc'
import Bear from './components/Bear'
import ChristmasTree from './components/ChristmasTree'
import House from './components/House'
import Line from './components/Line'
import PathLesson from './components/PathLesson'
import QuadraticBezierCurve from './components/QuadraticBezierCurve'
import QuadraticBezierCurve2 from './components/QuadraticBezierCurve2'
// import './App.css'
import './svg.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <svg width="200" height="200" viewBox="0 0 200 200">
        <circle cx="100" cy="120" r="70" fill="red" />
        <rect x="82" y="35" width="36" height="20" fill="#f79257" />
        <circle
          cx="100"
          cy="25"
          r="12"
          fill="none"
          stroke="#F79257"
          stroke-width="2"
        />
      </svg>

      {/* Christmas tree */}
      <ChristmasTree />
      {/* gingerbread figure */}
      <Line />
      {/* House */}
      <House />
      {/* learn path */}
      <PathLesson />
      {/* QuadraticBezierCurve */}
      <QuadraticBezierCurve />
      <QuadraticBezierCurve2 />
      {/* Bear */}
      <Bear />

      <div className="test">
        New Yorkers are facing the winter chill with less warmth this year as the city's most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.
      </div>

      {/* Arc */}
      <Arc />
    </div>
  )
}

export default App
