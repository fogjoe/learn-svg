import React, { memo } from 'react'

const QuadraticBezierCurve = memo(() => {
  return (
    <div>
      <svg width={450} height={450}>
        <path
          d="M 100 350 Q 235 141 350 350"
          stroke="#fa3838"
          strokeWidth={20}
          fill="none"
        />
      </svg>

      <svg width={200} height={200} viewBox="-100 -100 200 200">
        <circle cx={0} cy={0} r={90} fill="none" stroke="black" strokeWidth={10} />
        <ellipse cx={-25} cy={-25} rx={10} ry={15} />
        <ellipse cx={25} cy={-25} rx={10} ry={15} />
        <path d="M -40,30 Q 0,60 40,30" fill="none" stroke="black" strokeWidth={10} strokeLinecap="round" />
      </svg>

      <svg width="200" height="400" viewBox="-100 -200 200 400">
        <path
          d="
      M 0 -80
      Q 5 -75 0 -70
      Q -10 -65 0 -60
      Q 15 -55 0 -50
      Q -20 -45 0 -40
      Q 25 -35 0 -30
      Q -30 -25 0 -20
      Q 35 -15 0 -10
      Q -40 -5 0 0
      Q 45 5 0 10
      Q -50 15 0 20
      Q 55 25 0 30
      Q -60 35 0 40
      Q 65 45 0 50
      Q -70 55 0 60
      Q 75 65 0 70
      Q -80 75 0 80
      Q 85 85 0 90
      Q -90 95 0 100
      Q 95 105 0 110
      Q -100 115 0 120
      L 0 140
      L 20 140
      L -20 140"
          fill="none"
          stroke="#0C5C4C"
          stroke-width="5"
        />
      </svg>

      <svg
        width="200"
        height="400"
        viewBox="-100 -200 200 400"
      >
        <path
          d="
      M 0 -80
      L 5 -75 L 0 -70
      L -10 -65 L 0 -60
      L 15 -55 L 0 -50
      L -20 -45 L 0 -40
      L 25 -35 L 0 -30
      L -30 -25 L 0 -20
      L 35 -15 L 0 -10
      L -40 -5 L 0 0
      L 45 5 L 0 10
      L -50 15 L 0 20
      L 55 25 L 0 30
      L -60 35 L 0 40
      L 65 45 L 0 50
      L -70 55 L 0 60
      L 75 65 L 0 70
      L -80 75 L 0 80
      L 85 85 L 0 90
      L -90 95 L 0 100
      L 95 105 L 0 110
      L -100 110 L 0 120
      L 0 140
      L 20 140
      L -20 140"
          fill="none"
          stroke="black"
        />
      </svg>
    </div>
  )
})

export default QuadraticBezierCurve
