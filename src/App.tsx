import React from 'react';
import './App.css';
import {Accordion1} from "./Components /Accordion/Accordion";
import {Rating} from "./Components /Rating/Rating";

//function declaration, будем работать с 2 типами функций: стрелочная функция, и function declaration
//Компонента - Функция, которая объявлена с большой буквы и возвращают JSX разметку — это HTML подобный JS.
function App() {
    //делает полезное что-то
    return (
        //обязана вернуть JSX
        <div>
            {/*This is App component*/}
           <Accordion1 titleValue={"Menu"} collapsed = {true}/>
           <Accordion1 titleValue={"User"} />
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
// Функция App вызовет Apptatle ==> Rating ==> Accordion, чтобы на их место вставить то, что они возвращают,
//склеивает и отрисовывает полученный JSX в разметку в браузере - все компоненты отработали,
//каждая из них вернула свою разметку, и вся разметка склеилась.
//Можем вернуть из функции только одни JSX элемент, интерес функций возвращать именно группу элементов,
//поэтому эту группу надо обернуть в какого-нибудь родителя и возвращать один корневой элемент с вложенностью любого размера
//Command + Alt + L = отформатировать выделенный код (регулярно делать, для лучшей читаемости)
//React – это компоненты, компоненты — это какие-то функции, которые мы создаем сами, каждая такая функция
//обязана быть написана с большой буквы и возвращать JSX разметку.
//Любое приложение, как правило, начинается с отрисовки App, а внутри App делаем какую-то комбинацию из своих компонент,
// которые сами разрабатываем и по итогу каждая компонента рисует кукую-то разметку.
    type PageTitlePropsType = {
        title: string
    }

    function PageTitle(props: PageTitlePropsType) {
        debugger
        return (
            <h1> {props.title} </h1>    //React фрагмент - не является HTML элементом, но является JSX элементом и
//может быть контейнером (оберткой) над другими элементами
        )
    }
//Компонента позволяет:
// 1. дробить приложение на небольшие осмысленные семантические/структурные блоки – компоненты
//(код становится не громоздкий, если надо анализировать какую-то определённую компоненту можно перейти в нее)
// 2. То, что инкапсулировали/скрыли в компоненте можем использовать еще много раз в коде достаточно вставить компоненту
//в любое необходимое место)
//компоненту можем вставлять сколько угодно раз, и она будет отрисовывать разметку
//App – входная точка, самая главная компонента, самая высокоуровневая, анализируя ее
//можно понять что и в какой последовательности будет выводиться в браузер
//есть фрагмент элемент который не является HTML элементом, но является JSX элементом и может быть контейнером (оберткой)
//над другими элементами – выглядит как пустой тег <>…</>.
//Формально возвращаем JSX элемент, который не превратится разметку.
//Когда компонента отрисовывается в большом количестве кода, дебажить такой код неудобно т.к. много остановок кода,
//вместо debugger писать console.log("Rating rendering") с любым текстом, а в console браузера можно увидеть, что программа отработала
//и сколько раз обращалась данная компоненте по количеству выведенных в console.log информации
//В console можно отследить последовательность rendering, что кого вызывает и в какой последовательности отрисовывается.
//Вложенность – это принципиально, какая функция какой по счет вызывается.
// Последовательность рендоров – кто кого вызывает и в какой последовательности отрисовывается, важно понимать и видеть это.
//Что бы отрисовалось App нужно чтобы отрисовались вложенные в нее дочерние компоненты.
//Компонента — это функция, не вызывается как обычная функция, ее вызывает React, чтобы получить от них JSX и отрисовать.

//В любом языке программирования функции нужны чтобы их вызывать, сначала функцию определяем т.е записываем,
//потом что бы функция начала работать ее нужно запустить (вызвать).
//В браузере будет что-то происходить только тогда, КОГДА ФУНКЦИЯ БУДЕТ ВЫЗВАНА
//Если функции/переменные подсвечиваются блекло-серым цветом – это сигнализирует, что они не используются.

    function hello() {                              //Функция определена
        debugger                                    // debugger - Специальная команда для программиста, которая работает
//при открытой консоли в браузере и останавливает программу если программа окажется в этом месте.
//Дебажить программу – это значит отлаживать, выполнять ее по шагам, шаг за шагом.
        alert("Hello IT-INCUBATOR")
    }
    hello();   //Запускаем функцию
}
export default App;
