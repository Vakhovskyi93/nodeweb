const EventEmitter = require('events'); // работа с событиями

// const emitter = new EventEmitter();
//
// emitter.on( 'anything',  data => {
//     console.log('ON: anything ', data)
// } )                                      // добавили слушатель события
// emitter.emit(  'anything', {a:1})        //  вызов события
//
// emitter.emit(  'anything', {d:3})
// setTimeout(() => {
//     emitter.emit(  'anything', {v:7})
//
// }, 2000)
// class Dispatcher extends EventEmitter {
//
//     dispatch (eventName, data) {
//         console.log(' [Dispatching......]' );
//         this.emit(eventName, data)
//     }
//     subscribe(eventName, cb) {
//         console.log(' [Subscribing......]');
//         this.on(eventName, cb)
//     }
//
// }
// const dis = new Dispatcher()



dis.subscribe('aa', data => {
    console.log('On: aa => ', data)

})
dis.dispatch('aa', {aa: 3})