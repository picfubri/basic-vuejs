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
        },
        now:function() {
            return Date.now()
        }
    },
    methods: {
        reverseMessage: function () {
            return this.message.split('').reverse().join('')
        }
    }
})

/* Computed vs Watch Properties */
var app = new Vue({ // Watch
    el:'#computedWatch', 
    data:{ 
       firstName: 'Bang',
       lastName: 'IAS',
       fullName: 'BangIAS'
    },
    watch:{
        firstName: function(val) {
            this.fullName = val + ' ' + this.lastName
        },
        lastName: function(val) {
            this.fullName = this.firstName + ' ' + val
        }
    }
})

var app = new Vue({ // Computed
    el:'#computedWatch1', 
    data:{ 
       firstName: 'Bang',
       lastName: 'IAS'
    },
    computed:{
       fullName: function() {
            return this.firstName + ' ' + this.lastName
       }
    }
})
/* To Be Continued */