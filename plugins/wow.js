import WOW from 'wow.js'

export default ({ app }, inject) => {
  inject('wow', new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
  }))
}