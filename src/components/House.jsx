import React, { memo } from 'react'

const House = memo(() => {
  return (
    <div>
      <svg
        className="house"
        width={200}
        height={200}
        viewBox="-100 -100 200 200"
      >
        <polygon className="wall" points="-65,80 -65,-10 0,-70 65,-10 65,80" />
        <polyline className="roof" points="-75,-8 0,-78 75,-8" />

        <rect className="door" x={-45} y={10} width={30} height={60} rx={2} />
        <circle className="door-knob" cx={-35} cy={40} r={2} />
        <rect className="stair" x={-47} y={70} width={34} height={5} />
        <rect className="stair" x={-49} y={75} width={38} height={5} />

        <rect class="window" x="5" y="15" width="40" height="35" rx="5" />
        <line x1="5" y1="32.5" x2="45" y2="32.5" />
        <line x1="25" y1="15" x2="25" y2="50" />
        <rect class="window-sill" x="2" y="48" width="46" height="5" rx="5" />

        <circle class="window" cx="0" cy="-25" r="15" />
        <line x1="-15" y1="-25" x2="15" y2="-25" />
        <line x1="0" y1="-40" x2="0" y2="-10" />
      </svg>
    </div>
  )
})

export default House
