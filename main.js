/*

let add = 'Автомобіль, телефон, ноутбук';

console.log(add.length);



let add = 'Автомобіль, телефон, ноутбук';

console.log(add.slice(12,19));

*/

let userName = prompt("Логин?", '');

if (userName === '111') {

  let pass = prompt('Пароль?', '');

  if (pass === '111') {
    alert( 'Вітаємо!' );
  } else if (pass === '' || pass === null) {
    alert( 'Відміна' );
  } else {
    alert( 'Невірний пароль' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Відміна' );
} else {
  alert( "Я вас не знаю" );
}