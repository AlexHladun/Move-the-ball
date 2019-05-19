'use strict';
const field = document.querySelector('#field');
const ball = document.querySelector('#ball');
field.addEventListener('click', moveTheBall);

function moveTheBall(evnt) {
  const coordsField = field.getBoundingClientRect();
  const coordsGreenField = {
    top: coordsField.top + field.clientTop,
    left: coordsField.left + field.clientLeft,
  };

  const coordsBall = {
    top: event.clientY - coordsGreenField.top - ball.clientHeight / 2,
    left: event.clientX - coordsGreenField.left - ball.clientHeight / 2,
  };

  if (coordsBall.top < 0) {
    coordsBall.top = 0;
  }

  if (coordsBall.left < 0) {
    coordsBall.left = 0;
  }

  if (coordsBall.top + ball.clientHeight > field.clientHeight) {
    coordsBall.top = field.clientHeight - ball.clientHeight;
  }

  if (coordsBall.left + ball.clientHeight > field.clientWidth) {
    coordsBall.left = field.clientWidth - ball.clientHeight;
  }

  ball.style.left = `${coordsBall.left}px`;
  ball.style.top = `${coordsBall.top}px`;
}
