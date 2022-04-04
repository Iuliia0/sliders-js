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
        item.classList.remove('translate-y-0')
        item.classList.add('translate-y-full')

          if (currentValue < array.length) {
            array[currentValue].classList.add('translate-y-0')
            array[currentValue].classList.remove('translate-y-full')
          } else {
            currentValue = 0
            array[currentValue].classList.add('translate-y-0')
          }

      } else if (e.target.matches('.button-prev img')) {
        currentValue -= 1

          item.classList.remove('translate-y-0')
          item.classList.add('translate-y-full')

        if (currentValue < 0) {
          currentValue = sliderItems.length-1
            array[currentValue].classList.remove('translate-y-full')
            array[currentValue].classList.add('translate-y-0')
        } else {
            array[currentValue].classList.remove('translate-y-full')
        }
      }
  })
  })
}

slider(sliderItems)


