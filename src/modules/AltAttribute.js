import { BaseModule } from './BaseModule'

export class AltAttribute extends BaseModule {
  onCreate = () => {
    // Create the container to hold the input element
    this.display = document.createElement('div')

    // Apply styles
    Object.assign(this.display.style, this.options.displayStyles)

    // Attach it
    this.overlay.appendChild(this.display)

    // ALT input
    const input = document.createElement('input')
    if (this.img.alt) {
      input.value = this.img.alt
    }
    input.addEventListener('input', (e) => {
      this.img.alt = e.target.value
    })

    this.display.insertAdjacentHTML('beforeend', 'Alt: ')
    this.display.appendChild(input)
  }

  onDestroy = () => {}

  onUpdate = () => {
    if (!this.display || !this.img) {
      return
    }

    Object.assign(this.display.style, {
      right: 'auto',
      bottom: '-40px',
      left: '8px',
      'min-width': '172px'
    })
  }

  getCurrentSize = () => [
    this.img.width,
    Math.round(
      (this.img.width / this.img.naturalWidth) * this.img.naturalHeight
    )
  ]
}
