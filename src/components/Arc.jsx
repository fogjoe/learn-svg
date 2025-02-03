import React, { memo } from 'react'

const Arc = memo(() => {
  return (
    <div>
      <svg width={200} height={200} viewBox="-100 -100 200 200">
        <path
          d="
        M -40 -40
        A 70 40 30 1 1 40 40
        "
          fill="none"
          stroke="red"
          strokeWidth={5}
        />
      </svg>

      {/* moon */}
      <svg width={200} height={200} viewBox="0 0 30 30">
        <circle
          cx="15"
          cy="15"
          r="12"
          fill="red"
        />
        {/* <path
          d="
        M 23 5
        A 12 12 0 1 0 23 25
        A 12 12 0 0 1 23 5"
        /> */}
        <path
          d="
        M 20 5
        A 12 12 0 1 0 20 25
        A 10 10 0 1 1 20 5"
          fill="black"
        />
      </svg>

      <svg width={200} height={400} viewBox="-100 -200 200 400">
        <path
          d="
        M 50 120
        L 50 -80
        A 50 50 0 0 0 -50 -80"
          fill="none"
          stroke="black"
          strokeWidth={45}
          strokeLinecap="round"
        />
        <path
          d="
        M 50 120
        L 50 -80
        A 50 50 0 0 0 -50 -80"
          fill="none"
          stroke="red"
          stroke-width="35"
          stroke-linecap="round"
        />
        <path
          d="
        M 50 120
        L 50 -80
        A 50 50 0 0 0 -50 -80"
          fill="none"
          stroke="white"
          stroke-width="35"
          stroke-dasharray="30 30"
        />
      </svg>

      {/* lightbulb */}
      <svg
        width="200"
        height="200"
        viewBox="-100 -100 200 200"
      >
        <path
          d="
      M -30 20
      A 50 50 0 1 1 30 20
      Q 20 30 20 50
      L -20 50
      Q -20 30 -30 20"
          fill="gold"
          stroke="black"
          stroke-width="10"
          stroke-linejoin="round"
        />
        <path
          d="
      M -30 -20
      A 30 30 0 0 1 0 -50"
          fill="none"
          stroke="black"
          stroke-width="10"
          stroke-linecap="round"
        />
        <path
          d="
      M -18 62
      L 18 62
      M -15 75
      L 15 75"
          stroke="black"
          stroke-width="10"
          stroke-linecap="round"
        />
      </svg>
    </div>
  )
})

export default Arc
