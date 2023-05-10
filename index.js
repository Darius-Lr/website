function myFunction()
{
  var element = document.getElementById("bot");
  element.classList.remove("invisible");
  var element2 = document.getElementById("bot2");
  element2.classList.remove("invisible");
  var element3 = document.getElementById("bot3");
  element3.classList.remove("invisible");
}
function remove()
{
  var element = document.getElementById("bot");
  element.classList.add("invisible");
  var element2 = document.getElementById("bot2");
  element2.classList.add("invisible");
  var element3 = document.getElementById("bot3");
  element3.classList.add("invisible");
}
const button=document.getElementById('mybutton');
const message=document.getElementById('bot3');
button.addEventListener('click', createStyledDiv);
function createStyledDiv() {
  const div = document.createElement('div');
  div.textContent = 'Just saying hello!';
  const div2 = document.createElement('div');
  const space = document.createElement('div');
  space.textContent = 'kkkk';
  space.classList.add('space');
  const space2 =document.createElement('div');
  space2.textContent = 'kkkk';
  space2.classList.add('space2');
  div2.textContent = 'Hello';
  div.classList.add("bubble2");
  div2.classList.add("bubble");
  const div3 = document.createElement('div');
  div3.textContent = 'Thanks for saying hi';
  div3.classList.add("bubble");
  const div4 = document.createElement('div');
  div4.textContent = "I hope you've enjoyed browsing my work";
  div4.classList.add("bubble");
  const div5 = document.createElement('div');
  div5.textContent = "Can I help you with anything else?";
  div5.classList.add("bubble");
  button.classList.add("invisible");
  div5.classList.add("las");
  button2.classList.add("invisible");
  const last=document.getElementsByClassName("las");
  setTimeout(function(){message.insertBefore(div, button)}, 500);
  setTimeout(function(){message.insertBefore(space, button)}, 500);
  setTimeout(function(){message.insertBefore(space2, button)}, 500);
  setTimeout(function(){message.insertBefore(div2, button)}, 2000);
  setTimeout(function(){message.insertBefore(div3, button)}, 3000);
  setTimeout(function(){message.insertBefore(div4, button)}, 4000);
  setTimeout(function(){message.insertBefore(div5, button)}, 5000);
  setTimeout(function(){button.classList.remove("invisible");}, 6000);
  setTimeout(function(){button2.classList.remove("invisible");}, 6000);
  last.scrollIntoView();
}
const button2 = document.getElementById('mybutton2');
button2.addEventListener('click', createStyledDiv2);
function createStyledDiv2() 
{
  const div = document.createElement('div');
  div.textContent = "We'd like to hire you";
  const div2 = document.createElement('div');
  const space = document.createElement('div');
  space.textContent = 'kkkk';
  space.classList.add('space');
  const space2 =document.createElement('div');
  space2.textContent = 'kkkk';
  space2.classList.add('space2');
  div2.textContent = 'Ok, great!';
  div.classList.add("bubble2");
  div2.classList.add("bubble");
  const div3 = document.createElement('div');
  div3.textContent = 'Exciting times';
  div3.classList.add("bubble");
  button.classList.add("invisible");
  button2.classList.add("invisible");
  const div4 = document.createElement('div');
  div4.textContent = "Send me a message and lets chat further!";
  div4.classList.add("bubble");
  const last=document.getElementsByClassName("las");
  setTimeout(function(){message.insertBefore(div, button)}, 500);
  setTimeout(function(){message.insertBefore(space, button)}, 500);
  setTimeout(function(){message.insertBefore(space2, button)}, 500);
  setTimeout(function(){message.insertBefore(div2, button)}, 2000);
  setTimeout(function(){message.insertBefore(div3, button)}, 3000);
  setTimeout(function(){message.insertBefore(div4, button)}, 4000);
  const button3 = document.createElement('button');
  button3.textContent = 'Send a message';
  button3.classList.add("olx");
  button3.addEventListener('click', email);
  setTimeout(function(){message.insertBefore(button3, button)}, 5000);
  const button4 =document.createElement('button');
  button4.textContent = 'Other options?';
  button4.classList.add("olx");
  setTimeout(function(){message.insertBefore(button4, button)}, 5000);
  button4.addEventListener('click', otheroption);
  button4.addEventListener('click', () => {
    button4.remove();
    button3.remove();
  });
  last.scrollIntoView();
}
function email2()
{
  var element = document.getElementById("email1");
  element.classList.remove("invisible");
}
function email()
{
  setTimeout(remove(), 500);
  setTimeout(email2(), 2000);

}
 
   function otheroption()
   {
    const div = document.createElement('div');
  div.textContent = 'Other options?';
  div.classList.add("bubble2");
  const space = document.createElement('div');
  space.textContent = 'kkkk';
  space.classList.add('space');
  const space2 =document.createElement('div');
  space2.textContent = 'kkkk';
  space2.classList.add('space2');
  const div2 = document.createElement('div');
  div2.textContent = 'Ok here you go!';
  div2.classList.add("bubble");
    setTimeout(function(){message.insertBefore(div, button)}, 500);
    setTimeout(function(){message.insertBefore(space, button)}, 500);
    setTimeout(function(){message.insertBefore(space2, button)}, 500);
    setTimeout(function(){message.insertBefore(div2, button)}, 2000);
     setTimeout(function(){button.classList.remove("invisible");}, 3000);
     setTimeout(function(){button2.classList.remove("invisible");}, 3000);
   }

 
