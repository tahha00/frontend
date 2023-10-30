(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const fruitForm = document.querySelector("#inputSection form"); //* access to form
// console.log(fruitForm)

fruitForm.addEventListener("submit", extractFruit); //* add event listener to form

function extractFruit(e) {
  e.preventDefault(); //* stops page from refreshing
  //console.log(e);
  //console.log(e.target[0].value);
  addFruit(e.target[0].value)
  e.target[0].value = "" //* clears form
  //console.log(e.target.fruitInput.value)
}

//const tahha = require("./script2");
//require("./script3");
//console.log(tahha);

const fruitList = document.querySelector("#fruitSection ul")
function addFruit(fruit) {
    if(!fruit) {
        console.log("Invalid fruit")
    } else {
    const li = document.createElement("li") //*creates element - li item in this example.
    li.addEventListener("click", removeFruit, {once:true}) //* event listener for clicking on any list item.
    li.textContent = fruit
    fruitList.appendChild(li) //* adds item to dom - so adds it to list.
}
}

function removeFruit(e) {
    e.target.remove()
}


},{}]},{},[1]);
