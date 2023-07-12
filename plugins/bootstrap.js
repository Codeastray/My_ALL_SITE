import jquery from 'jquery'
import popper from 'popper.js'
import bootstrap from 'bootstrap'


export default ({ app }) => {
  if (process.client) {
    window.$ = jquery
    window.jQuery = jquery
    window.Popper = popper
    window.bootstrap = bootstrap
  }
}