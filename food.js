
import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition} from "./grid.js";

let food = getRandomFoodPosition()
const EXPANSION_RATE = 1
export let SCORE = 1
export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    SCORE++
    food = getRandomFoodPosition()
  }
}

export function draw(gameBoard) {
  console.log('draw food')
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
  let newFoodPosition = randomGridPosition()
  while(onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}