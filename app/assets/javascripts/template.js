$(document).ready(function() {
  Vue.component('hello', {
    template: '<h1>Hello!</h1>'
  })

  new Vue ({
    el: '#template'
  })
})