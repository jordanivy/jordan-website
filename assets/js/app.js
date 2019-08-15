
function getRandomNumber() {
  return Math.random() * 10;
}

function generateGraphics() {
  console.log('hello');
  return `<span style="position: absolute; top: 10px; left: 10px;><svg height="${getRandomNumber()}" width="${getRandomNumber()}">
  <polygon points="${getRandomNumber()},${getRandomNumber()} ${getRandomNumber()},${getRandomNumber()} ${getRandomNumber()},${getRandomNumber()} ${getRandomNumber()},${getRandomNumber()}" style="fill:#FFA185;" />
  </svg></span>`

}