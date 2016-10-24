/* eslint-env jasmine, es6 */

describe('application.js', () => {
  beforeEach(() => {
    const fixture = document.createElement('div')
    fixture.setAttribute('class', 'fixture')
    fixture.innerHTML = `
      <input type="password" value="">
      <div class="errors" style="visibility: hidden;">
      </div>`
    document.querySelector('body').appendChild(fixture)
  })
  afterEach(() => {
    Array
      .from(document.querySelectorAll('.fixture'))
      .forEach((fixture) => {
        fixture.innerHTML = ''
      })
  })
  it('should get correct input value', () => {
    const input = document.querySelector('input').value
    expect(input).toBe('')
  })
})
