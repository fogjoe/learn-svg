import React, { memo } from 'react'

const Line = memo(() => {
  return (
    <div>
      <svg
        width={200}
        height={200}
        viewBox="-100 -100 200 200"
      >
        {/* head */}
        <circle cx={0} cy={-50} r={30} fill="#cd803d" />
        {/* eyes */}
        <circle className="eye" cx={-12} cy={-55} r={3} />
        <circle className="eye" cx={12} cy={-55} r={3} />
        {/* mouse */}
        <rect x={-10} y={-40} width={20} height={5} rx={2} fill="none" stroke="#fff" strokeWidth={2} />
        {/* body */}
        <line className="limb" x1={-40} y1={-10} x2={40} y2={-10} />
        <line className="limb" x1={-25} y1={50} x2={0} y2={-15} />
        <line className="limb" x1={25} y1={50} x2={0} y2={-15} />
        {/* buttons */}
        <circle cx={0} cy={-10} r={5} />
        <circle cx={0} cy={10} r={5} />
      </svg>
    </div>
  )
})

export default Line
