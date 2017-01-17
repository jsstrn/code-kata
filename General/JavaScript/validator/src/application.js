/* global Validator */
;(() => {
  this.init = () => {
    document
      .querySelector('.errors')
      .style
      .visibility = 'hidden'
    document
      .querySelector('input')
      .addEventListener('input', this.validateUserInput)
  }
  this.validateUserInput = (event) => {
    const errors = (new Validator()).validate(event.target.value)
    this.displayValidationErrors(errors)
  }
  this.displayValidationErrors = (list) => {
    const errors = document.querySelector('.errors')
    errors.innerHTML = ''
    list.forEach((e) => {
      const error = document.createElement('p')
      error.textContent = e
      errors.appendChild(error)
    })
    errors.style.visibility = 'visible'
    console.log(list)
  }
  this.init()
})()
