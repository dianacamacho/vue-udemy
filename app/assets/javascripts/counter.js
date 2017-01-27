$(document).ready(function() {
  new Vue({
    el: '#counter',
    data: {
      count: 0,
      x: 0,
      y: 0
    },
    methods: {
      increase: function() {
        this.count++
      },
      // events get passed automatically to vue js object, functions
      updateCoordinates: function(event) {
        this.x = event.clientX;
        this.y = event.clientY;
      }
    }
  }) 
})

