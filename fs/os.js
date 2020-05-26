const  os = require( 'os');

console.log( ' операционная система =>', os.platform() );
console.log( ' Архитектура процессора =>', os.arch() );
console.log( ' Информация по процессорам =>', os.cpus() );
console.log( ' свободная память =>', os.freemem() )
console.log( ' всего свободной памяти =>', os.totalmem() );
console.log( ' домашняя директория =>', os.homedir() );
console.log( ' Включен( в сек) =>', os.uptime() );