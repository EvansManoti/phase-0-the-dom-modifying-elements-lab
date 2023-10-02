// Write your code here!
document.querySelector('#main').remove();

const victoryHeader = document.querySelector('h1#victory');
const newHeader = document.createElement('h1')
newHeader.id = 'victory';
newHeader.textContent = 'Manoti is the champion';