var data = { a: 1 } 
var vm = new Vue({
  el: '#example',
  data: data
})
vm.$data === data // => true
vm.$el === document.getElementById('example') // => true
console.log(data)

new Vue({
    data: {
      a: 1
    },
    created: function () {
      // `this` menunjuk ke poin instance vm
      console.log('value a is: ' + this.a)
    }
  })//==> value a is 1