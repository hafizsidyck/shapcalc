const {circleArea, squareArea} = require('./shaparea.js')

//calculer le circleArea

const raduis = process.argv[2]

const raduisCircle = circleArea(raduis)
console.log(raduisCircle);

//calculer le squareArea 

const coté = process.argv[3]
const raduisSquare = squareArea(coté)
console.log(raduisSquare);