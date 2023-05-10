import _ from 'lodash';
import printMe from './print.js';
import './style.css';


function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    const brkLine = document.createElement('br');

    // Lodash, is imported
    element.innerHTML = _.join(['practicing', 'webpack setup'], ' ');
    element.classList.add('hello');
    element.appendChild(brkLine)

    btn.innerHTML = 'Click me and check the console!';

    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());