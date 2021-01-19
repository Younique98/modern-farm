import { addPlant, usePlants } from './field.js'
import { createPlan } from './plan.js'
import { createAsparagus } from "./seeds/asparagus.js"

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

// const allThePlans  = createPlan()

// for (const yearlyPlan of allThePlans) {
//     console.log(yearlyPlan)
// };

const yearlyPlan = createPlan()
console.log(yearlyPlan)

console.log("Welcome to the main module")

const seedObj = [
    lettuce,
    tomato
]
addPlant();
usePlants();
console.log(seedObj)