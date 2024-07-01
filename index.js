import "./index.css";
import JS_IMG from './assets/js-img.jpg';

let h1 = document.createElement("h1");
h1.textContent = "I love JavaScript";
document.body.append(h1);

let img = document.createElement('img');
img.src = JS_IMG;
document.body.append(img);

console.log('Hello World!');