import React, { memo } from 'react'

const QuadraticBezierCurve2 = memo(() => {
  return (
    <div>
      <svg width="450" height="450">
        <path
          d="M 136 365 C 274 171 274 247 342 361"
          stroke="#fa3838"
          stroke-width="20"
          fill="none"
        />
      </svg>
      <svg
        width="200"
        height="200"
        viewBox="-100 -100 200 200"
      >
        <path
          d="
      M -90,0
      L -30,-30
      C 30,-60 60,-30 30,30
      L 0,90"
          fill="none"
          stroke="red"
          stroke-width="10"
        />
      </svg>
      <svg
        width="200"
        height="200"
        viewBox="-100 -100 200 200"
      >
        <path
          d="
      M -30,70
      L 30,0
      C 90,-70 -80,-30 -20,10
      L 40,50"
          fill="none"
          stroke="red"
          stroke-width="10"
        />
      </svg>
      <svg width={200} height={200} viewBox="-100 -100 200 200" fill="none" stroke="black" strokeWidth={10}>
        <circle cy={-40} r={20} />
        <path d="M -50,70 C -50,-20 50,-20 50,70 Z" />
      </svg>

      {/* Gift box */}
      <svg
        width="200"
        height="200"
        viewBox="-100 -100 200 200"
      >
        <circle cx="0" cy="-50" r="10" fill="#a9172a" />
        <rect class="box" x="-60" y="-40" width="120" height="100" />
        <rect class="box" x="-70" y="-47" width="140" height="20" />
        <rect class="stripe" x="-20" y="-40" width="40" height="100" />
        <rect class="stripe" x="-25" y="-47" width="50" height="20" />
        <path
          class="ribbon"
          d="
      M 0 -50
      L 30 -50
      C 50 -50 50 -70 30 -65
      L 0 -50"
        />

        <path
          class="ribbon"
          d="
      M 0 -50
      L -30 -50
      C -50 -50 -50 -70 -30 -65
      L 0 -50"
        />
      </svg>
    </div>
  )
})

export default QuadraticBezierCurve2
