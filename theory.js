//Глобальный контекст
console.log(this); // window

//Вызов метода:
const user = {
    name: 'Олег',
    sayHello: function() {
        console.log(`Привет, меня зовут ${this.name}`); // this -> user
    }
};
user.sayHello(); // Выведет: "Привет, меня зовут Олег"

//Функции
function showThis() {
    console.log(this);
}
showThis(); // В строгом режиме: undefined, иначе: глобальный объект (window)

//Явное задание контекста
//call()
//Метод call() вызывает функцию с указанным значением this и аргументами (принимает аргументы списком через запятую).

function greet(hello, bye) {
    console.log(`${hello}, my name is ${this.name}. ${bye}!`);
}
const user1 = { name: 'Alice'};
greet.call(user1, 'Hello', 'Good bye');
// то есть мы как бы связали функцию greet с объектом Alice в момент
// ее выполнения

//apply()
greet.apply(user1, ['Hello', 'Good bye']); // "Hello, my name is Alice. Good bye!"

//bind()
const boundGreet = greet.bind(user1);

boundGreet('Hello', 'Good bye'); // "Hello, my name is Alice" // то есть мы не просто привязываем контекст по время выполнения, //

//а мы создаем новую функцию с уже привязанным контекстом

const obj1 = { value: 1 };

const obj2 = { value: 2 };

function showValue() {

    console.log(this.value);

}

const boundFunc1 = showValue.bind(obj1);

const boundFunc2 = boundFunc1.bind(obj2);

boundFunc1(); // 1

boundFunc2(); // 1, так как повторный bind не изменяет контекст

