import React from 'react'
import mangu from '../assets/manguConTresGolpes.jpeg'

function Banner() {
  return (
        <div className = 'banner'>
              <h1>Ordering made easy</h1>
              <p>
                    Island  food from the comfort of your home, no standing in line
              </p>
              {/* maybe slideshow here instead of 1 image? */}
              <img src={ mangu } />
    </div>
  )
}

export default Banner