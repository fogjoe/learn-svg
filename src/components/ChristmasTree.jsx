import React, { memo } from 'react'

const ChristmasTree = memo(() => {
  return (
    <div>
      <svg
        width="200"
        height="400"
        viewBox="-100 -200 200 400"
      >
        <polygon
          points="0 0 80 120 -80 120"
          fill="#234236"
        />
        <polygon
          points="0 -40 60 60 -60 60"
          fill="#234236"
        />
        <polygon
          points="0 -80 40 0 -40 0"
          fill="#38755B"
        />
        <rect
          x="-20"
          y="120"
          width="40"
          height="30"
          fill="brown"
        />
      </svg>
    </div>
  )
})

export default ChristmasTree