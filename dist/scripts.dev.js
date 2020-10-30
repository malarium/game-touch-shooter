"use strict";

var leftCannon = document.querySelector('.cannon-left');
var rightCannon = document.querySelector('.cannon-right');

var handleMovement = function handleMovement(e) {
  var width = window.innerWidth;
  var angle = e.screenX / width;
  rightCannon.style.transform = "rotateZ(".concat(angle * 90, "deg)");
  leftCannon.style.transform = "rotateY(180deg) rotateZ(".concat((1 - angle) * 90, "deg)");
};

document.addEventListener('mousemove', handleMovement);
document.addEventListener('touchmove', handleMovement);