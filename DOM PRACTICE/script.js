//console.log(window.document)
//console.dir(window)

// select element

// browerse will store elements in form of objects

//console.dir(document.getElementById('main-heading'))

// const manHeading=document.getElementById("main-heading")
// console.log(manHeading)


//********************************************** */

// QUERY SELECTOR

// with the help of this we can select any element



// const kk=document.querySelector("#main-heading")
// const header=document.querySelector(".header")
// console.log(header)

// to select method with various clasees
// it will select only the first class that will come

// const navItem=document.querySelector('.nav-item')
// console.log(navItem)

// to select all clasees we have anaother method

// const navItems=document.querySelectorAll(".nav-item")
// console.log(navItems)

//*********************************************** */

// how to change text in javascript
// first selects the element then change that element

//const TextChange=document.getElementById('main-heading');

// .textcontent will give the text content inside a particular element

// console.log(TextChange.textContent)
// TextChange.textContent="This is Changed"
// console.log(TextChange.textContent)


//*********************************************** */

// innertext will give the text content that is visible on website not that is hidden

// const te=document.getElementById('main-heading')
// console.log(te.innerText)

// some more uses of qurey selector
// this will give only first div

// const pk=document.querySelector('div')
// console.log(pk)

// mujhe vo div chaiye jiski class headline hai

// const ww=document.querySelector('div.headline h2')
// console.log(ww)



//************************************************************* */

// CHANGING THE STYLE OF ELEMENT USING JAVASCRIPOT
 
// const www=document.querySelector('div.headline h2')
// // console.log(www.style);
// www.style.color="blue"
// www.style.backgroundColor="yellow"
// www.style.border="5px  dashed blue"
// www.style.borderRadius="10px"


// const ww=document.querySelector("section.todo-section h2")
// console.log(ww)

// ww.style.color="blue"
// ww.style.backgroundColor="pink"
// ww.style.border="20px dashed black"
// console.log(ww.style.color)


//*-******************************************************************
// GET AND SET ATTRIBUTE VERY IMP

// href, class and id are attribute
// const link=document.querySelector('a')
// console.log(link.getAttribute("href"))

// const link2=document.querySelector('.form-todo input')
// console.log(link2.getAttribute('type'))

// // how you will change the value of attributes

// link.setAttribute("href","https://www.youtube.com")
// console.log(link.getAttribute('href'))

//************************************************* */


// practice

// const k=document.querySelector("header.header h1 a")
// console.log(k)

// console.group(k.getAttribute("href"))
// k.setAttribute("href","https://www.youtube.com")
// console.log(k.getAttribute("href"))

//********************************************** */

// get multiple items using getElements by class name
// get multiple items using querySelectorAll



// it gives html collections

// const k2=document.querySelectorAll(".nav-item")
// console.log(k2[0])

// how u can change the style and color using for loop

// for(let i=0;i<kk.length;i++){
//     console.log(kk[i])
//     const q=kk[i]
//     q.style.color="tomato"
//     q.style.backgroundColor="purple"
//     q.style.border="2px dashed black"

// }

// another way

// const k3=document.getElementsByTagName('a')
// console.log(k3)


// for(let i=0;i<k3.length;i++)
// {
//     const s=k3[i]
//     s.style.backgroundColor="tomato"
//     s.style.fontWeight="bold"
//     s.style.color="black"
// }

// for(let p of k3){

//     p.style.backgroundColor="green"
// }


// another method using query selector



//************************************************ */


// innerhtml
// const pk=document.querySelector(".headline")
// console.log(pk.innerHTML)

// // adding new html

// pk.innerHTML= "<h1> inner html changed </h1>"
// pk.innerHTML+="<button class=\"btn\"> learn more </button>"

//****************************************************** */

// to get root node 

// const rootNode=document.getRootNode();
// console.log(rootNode)

// // methods to see all the childs of root node


// const htmlElementNode=rootNode.childNodes[1]
// console.log(htmlElementNode)

// //.childNodes use to check the child in the list

// // console.log(htmlElementNode.childNodes) 
// //this is the output of above NodeList(3) [head, text, body]

// const headElement=htmlElementNode.childNodes[0]
// console.log(headElement)

// // to get the body node element from root node

// const bodyElement=htmlElementNode.childNodes[2]
// console.log(bodyElement)

// // How to get parent node of any element
// console.log(bodyElement.parentNode)

// //sibling realtionship in dom
// // how to check who is the next sibling of head node

// console.log("sibling",headElement.nextSibling)

// // now next sibling of text element
// console.log("sibling",headElement.nextSibling.nextSibling)

// // this method will give next elemnent in the document tree

// console.log(headElement.nextElementSibling)


// below code helps to change color of parent node of particular element

// const h1=document.querySelector("h1")
// console.log(h1.parent)
// const h1parent=h1.parentNode
// h1parent.style.color="yellow"

// some more examples

// const head=document.querySelector("head")
// console.log("head")

// const title=head.querySelector("title")
// console.log(title)
// console.log(title.childNodes)

//****************************************************** */

// // goal is to check how many classes have section TransformStreamDefaultController
// const sectionTodo=document.querySelector(".todo-section")
// console.log(sectionTodo)

// // to check how much classes
// console.log(sectionTodo.classList)

// // how to give new class with javascript
// sectionTodo.classList.add('bg-dark')

// // how to remove class from list
// sectionTodo.classList.remove('bg-dark')

// // how to check if class exist or not
// // const ans=sectionTodo.classList.contains('oye-oey')
// // console.log(ans)


// // this will add if particular class is not there, remove if that class is there
// sectionTodo.classList.toggle('bg-dark')
// // sectionTodo.classList.toggle('bg-dark')

////************************************* */

// const header=document.querySelector("header")
// console.log(header.classList)
// header.classList.add('bg-dark')

//******************************************************** */

// how to add html element with the help of js

// how to see the inner html inside todo list

const todolist=document.querySelector('.todo-list')
console.log(todolist.innerHTML)

// // change
// todolist.innerHTML="<li> new todo </li>"

// addding new element not changing the html

todolist.innerHTML=todolist.innerHTML+"<li> new todo added </li>"

todolist.innerHTML+="<li> another todo added </li>"

// when u should use this

//////////*************************************** */

// better way to do that

