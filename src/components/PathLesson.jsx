import React, { memo, useState } from 'react'

const PathLesson = memo(() => {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const handleFullscreen = () => {
    setIsFullscreen(true)
    const element = document.documentElement // This selects the entire page

    if (element.requestFullscreen) {
      element.requestFullscreen()
    }
    else if (element.webkitRequestFullscreen) { // Safari compatibility
      element.webkitRequestFullscreen()
    }
    else if (element.mozRequestFullScreen) { // Firefox compatibility
      element.mozRequestFullScreen()
    }
    else if (element.msRequestFullscreen) { // IE/Edge compatibility
      element.msRequestFullscreen()
    }
  }

  const handleExitFullscreen = () => {
    setIsFullscreen(false)
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
    else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    }
    else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    }
    else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    }
  }

  return (
    <div>
      {/* hamburger menu */}
      <svg
        width={200}
        height={200}
        viewBox="-100 -100 200 200"
      >
        <path
          d="
        M -45, -45
        L 45, -45
        M -45   0
        L  45   0
        M -45  45
        L  45  45"
          stroke="#333"
          strokeWidth={15}
          strokeLinecap="round"
        />

      </svg>

      {/* heart */}
      <svg width={200} height={200} viewBox="-100 -100 200 200">
        <path
          d="
        M -30 -20
        L   0  10
        L  30 -20"
          fill="none"
          stroke="red"
          stroke-width="80"
          stroke-linecap="round"
        />
      </svg>

      {/* make a fullscreen button */}
      {/* <button style={{ background: 'brown', color: 'white' }} type="button" onClick={!isFullscreen ? handleFullscreen : handleExitFullscreen}>fullscreen</button>
 */}

      {/* arrow */}
      <svg
        width="200"
        height="200"
        viewBox="-100 -100 200 200"
      >
        <path
          d="
        M -70 0
        L 70 0
        L 30 -50
        M 70 0
        L 30 50"
          fill="none"
          stroke="#D1495B"
          stroke-width="25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  )
})
export default PathLesson
