"use strict";
 const item = document.querySelectorAll('.section1__item');
  function color()
  {
  let result1 = Math.floor(Math.random()* 255 - 1 + 1);
   let result2 = Math.floor(Math.random()* 255 - 1 + 1);
   let result3 = Math.floor(Math.random()* 255 - 1 + 1);
  let res = `rgb(${result1},${result2},${result3})`;
  return this.style.background = res;
 }
 item.forEach(elem => {
  elem.addEventListener('mouseover', color);
})



