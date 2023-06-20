import { html, css } from 'lit'
import { customElement } from 'lit/decorators.js'
import { BaseComponent } from '../common/baseComponent'

@customElement('popup-main')
export class PopupMain extends BaseComponent {
  // # Properties

  // # Event handlers

  // # Lifecycle methods

  connectedCallback(): void {
    super.connectedCallback()
  }

  render() {
    return html` <main data-theme="fantasy" class="bg-transparent">popup page</main> `
  }

  static styles = [
    ...super.styles,
    css`
      main {
        min-width: 500px;
        padding: 1rem;
      }
    `,
  ]
}

declare global {
  interface HTMLElementTagNameMap {
    'popup-main': PopupMain
  }
}
