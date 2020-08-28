/* First */
var app = new Vue({ //Hello Wordl
    el:'#app-1', // el -> stands for 'element' which is linked directly to the tag id = "app" - index.html
    data:{ //'data' and the like are called Object
        message:'Hello World'
        /* 'message' and the like which is in an Object is called a Property
           The contents of 'message', will give direct response to index.html in the tag '<p> </p>'
        */
    }
})
var app = new Vue({ //Binding
    el:'#app-2',
    data:{
        thisBinding1:'Congratulations! You have successfully done the Binding', // Same as the explanation above
        thisBinding2: new Date().toLocaleDateString()
        /* use 'new' to create a new method and
           'Date (). ToLocaleDateString ()' is the method for
           converts the date (not time) from a Date object to a readable string.
        */
    }
})

/* Condition & Iteration */
var app = new Vue({ //Condition
    el:'#app-3',
    data:{
        condition1: true,
        condition2: false + console.log('This text does not appear if property "condition2" is "false"')
    }
})
var app = new Vue({ //Iteration
    el:'#app-4',
    data:{
        iterations: [
            {text: 'List Number One'},
            {text: 'List Number Two'},
            {text: 'List Number Three'}
        ],
    }
})

/* Handling User Input */
var app = new Vue({ //Working with Button
    el:'#app-5',
    data:{
        text: 'Hi, how are you'
    },
    methods:{
        reverseText: function () {
            this.text = this.text.split('').reverse().join('')
        }
    }
})
var app = new Vue({ //Working with Input Form
    el:'#app-6',
    data:{
        input: 'Please type your text here'
    }
})

/* Compiling the Components */
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.items }}</li>'
})
var app = new Vue({
    el:'#app-7',
    data:{
        groceries: [
            { id: 0, items: 'JavaScript' },
            { id: 1, items: 'VueJs' },
            { id: 2, items: 'Component' }
        ]
    },
})