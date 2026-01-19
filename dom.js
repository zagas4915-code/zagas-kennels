// DOM - DOCUMENT OBJECT MODEL 

// getElementById
// querySelector


const header = document.getElementById('header');
header.style.backgroundColor = 'blue';
header.style.color='white';
header.style.padding = '20px';

const headertwo = document.querySelector('.header');
const headerthree = document.querySelector('.big');

// querySelectorAll
// getElementByClassName

const listSelect = document.querySelectorAll('ul li')

for(let i = 0; i < listSelect.length; i++){
listSelect[i].style.color = 'yellow';
}

// for of 

for (list of listSelect){
    list.style.color ='blue'
}

// ADDING CONTENT USING JAVASCRIPT 

// textContent
// innerText
// innerHtml

// header.textContent = "i love javascript";
// headertwo.innerText = " fuck u"
// headerthree.innerHTML = "<h6> who are u </h6>"

// CREATING ELEMENT USING JAVASCRIPT

const ul = document.querySelector('ul');
const li = document.createElement('li');
li.textContent = "java";
ul.appendChild(li);

const div = document.querySelector('div')
const h4 = document.createElement('h4')
h4.textContent = "mick";
h4.style.color= 'green'
div.appendChild(h4)


// ADDING ATTRIBUTES
// u can set attributes use it example

ul.setAttribute('class','list')
const myheader = document.getElementById('headers')
// class list 
myheader.classList.add('active')

