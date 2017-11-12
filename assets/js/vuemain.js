new Vue({
  el: '#app',
  data: {
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    increase: function(amount, event) {
      this.counter = this.counter + amount;
    },
    updatecoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function() {
      alert('alert');
    }
  }
});
