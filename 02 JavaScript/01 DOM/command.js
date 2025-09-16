document.getElementById('title').id
document.getElementById('title').setAttribute('id','Title')
title.style.backgroundColor= 'green'
document.getElementById('firstHeading').innerHTML = "<h1>Rockstar</h1>"
title.innerText //used for content that is visible
title.textContent //used for content that also hide
document.querySelector('h2')
document.querySelector('#title')
document.querySelector('.heading')

document.querySelector('input[type="password"]')
const list = document.querySelector('ul')
const listitem = list.querySelector('li')
listitem.style.backgroundColor = 'green'

const templilist = document.querySelectorAll('li')
undefined
templilist
NodeList(3) [li, li, li]
templilist[0].style.backgroundColor = 'pink'
// 'pink

const templilist = document.querySelectorAll('li')
undefined
templilist.forEach((temp) => {})
undefined
templilist.forEach((temp) => temp.style.backgroundColor = 'pink')
undefined

const listclass = document.getElementsByClassName('list-items')
undefined
const arrayclass = Array.from(listclass)
undefined
arrayclass.forEach((temp) => temp.style.backgroundColor='pink')
undefined

const h2div = document.querySelectorAll('h2')
undefined
h2div
// NodeList(5) [h2.vector-pinnable-header-label, h2#Early_life, h2#Career, h2#References, h2#External_links]0: h2.vector-pinnable-header-label1: h2#Early_life2: h2#Career3: h2#References4: h2#External_linkslength: 5[[Prototype]]: NodeList
const h2divarray = Array.from(h2div)
undefined
h2divarray
// (5) [h2.vector-pinnable-header-label, h2#Early_life, h2#Career, h2#References, h2#External_links]0: h2.vector-pinnable-header-label1: h2#Early_life2: h2#Career3: h2#References4: h2#External_linkslength: 5[[Prototype]]: Array(0)
h2divarray.forEach((temp)=>temp.style.backgroundColor = 'pink')
undefined