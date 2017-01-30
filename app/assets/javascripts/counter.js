$(document).ready(function() {
  new Vue({
    el: '#counter',
    data: {
      count: 0,
      x: 0,
      y: 0
    },
    // best practice to use computed properties whenever possible,
    // unless you need to run some async code
    // computed properties are synchronous
    // not meant for use if you want to make an async call or run some other async task/code that isn't already solved by the computed property
    // if have async dependencies, use watch 
    computed: {
      result: function() {
        return this.count > 5 ? 'Greater than 5' : 'Less than 5';
      }
    },
    watch: {
      // setup existing property you want to monitor, and specify code you want to execute whenever that property changes
      // vue auto passes the value of that property to the function
      count: function(value) {
        // since inside closure function, need to store vue instance in separate var, to allow you to access the instance properties
        var vm = this;
        
        setTimeout(function() {
          vm.count = 0;
        }, 2000);
      }
    },
    methods: {
      increase: function(step, event) {
        this.count += step;
      },
      // events get passed automatically to vue js object, functions
      updateCoordinates: function(event) {
        this.x = event.clientX;
        this.y = event.clientY;
      },
      // dummy: function(event) {
      //   event.stopPropagation();
      // },
      alertMe: function() {
        alert('Alert!');
      }
    }
  }) 
})

