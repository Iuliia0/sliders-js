const sliderContainer = document.querySelector('.slider-container')
const sliderItems = document.querySelectorAll('.slider-item')
const buttonNext = document.querySelector('.button-next')
const buttonPrev = document.querySelector('.button-prev')


const slider = (array) => {
  array.forEach((item) => {
    let currentValue = 0
    sliderContainer.addEventListener('click', (e) => {
      if(e.target.matches('.button-next img')) {
        currentValue += 1
          item.classList.add('hidden')
          if (currentValue < array.length) {
            array[currentValue].classList.remove('hidden')
          } else {
            currentValue = 0
            array[currentValue].classList.remove('hidden')
          }
      } else if (e.target.matches('.button-prev img')) {
        currentValue -= 1
        item.classList.add('hidden')
        if (currentValue < 0) {
          currentValue = sliderItems.length-1
          array[currentValue].classList.remove('hidden')
        } else {
          array[currentValue].classList.remove('hidden')
        }
      }
  })
  })
}

slider(sliderItems)


