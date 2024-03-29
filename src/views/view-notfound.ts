import { html, customElement } from 'lit-element'
import { BoilerplateView } from '../components/boilerplate-view.js'

@customElement('view-notfound')
export class ViewNotfound extends BoilerplateView {
  static get styles() {
    return []
  }

  protected render() {
    return html`
      <section>
        <h2>Oops! You hit a 404</h2>
        <p>
          The page you're looking for doesn't seem to exist. Head back
          <a href="/">home</a> and try again?
        </p>
      </section>
    `
  }
}
