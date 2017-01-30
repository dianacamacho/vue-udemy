$(document).ready(function() {
  new Vue ({
    el: '#v-for-list',
    data: {
      ingredients: ['meat', 'fruit', 'cookies'],
      persons: [
        { name: 'Diana', age: 26, color: 'blue'},
        { name: 'Max', age: 27, color: 'red'}
      ]
    }
  })
})