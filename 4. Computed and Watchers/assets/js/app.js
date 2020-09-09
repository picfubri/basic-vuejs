/* Computed */
var app = new Vue({ // Heavy Logic
    el:'#heavyLogic', 
    data:{ 
        message: 'Try Heavy Logic',
    }
})
var app = new Vue({ // Light Logic
    el:'#lightLogic', 
    data:{ 
        message: 'Try Light Logic',
    },
    computed:{
        reversedMessage: function() {
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        reverseMessage: function () {
            return this.message.split('').reverse().join('')
        }
    }
})

var app = new Vue({ // Computed Cache vs Metode
    el:'#computedCache',
    
})

/* To Be Continued */