var Emitter=require('events')
var task_1=require('util')


//function constructor
var myFunc=new Function();

//inheritance
task_1.inherits(myFunc,Emitter)


//to send data with events
myFunc.prototype.greet=function(data)
{
    this.emit("EventFired",data)
}

var customFunc=new myFunc();

customFunc.on('EventFired',function(data){
    console.log('welcome :'+data)
})

customFunc.greet("keroles nabil saad")