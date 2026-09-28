// import {ROLES, AI_MODEL, FRIDGE_FILE} from './config.js';
// console.log (ROLES, AI_MODEL, FRIDGE_FILE); // Output: USER
// import {getAuthenticatedUser} from './authService.js';
// console.log(getAuthenticatedUser()); // Output: Object

// import { FRIDGE_FILE } from './config.js';
// import {readFromJsonFile} from "./fileService.js";
// import path from "node:path";

// const filePath = path.resolve(FRIDGE_FILE);
// const products = await readFromJsonFile(filePath);;
// console.table (products);


import { getAuthenticatedUser } from './authService.js';
import {createBasePromptByRole, formatProductsForPromt, createPrompt} from './promptService.js';

const user = getAuthenticatedUser();
const basePrompt = createBasePromptByRole(user);
console.log(basePrompt);
const products = [
  {
    "name": "milk oatmeal meat chicken",
    "count": 5
  },
  {
    "name": "bread",
    "count": 1
  },
  {
    "name": "cheese",
    "count": 2
  },
  {
    "name": "beef",
    "count": 1,
    "price": 18,
    "expDate": "2026-09-24"
  },
  {
    "name": "beetroot",
    "count": 3,
    "price": 2.5,
    "expDate": "2026-10-02"
  },
  {
    "name": "potato",
    "count": 5,
    "price": 1.2,
    "expDate": "2026-10-05"
  },
  {
    "name": "carrot",
    "count": 2,
    "price": 1.5,
    "expDate": "2026-10-03"
  },
  {
    "name": "onion",
    "count": 2,
    "price": 1.1,
    "expDate": "2026-10-04"
  },
  {
    "name": "garlic",
    "count": 1,
    "price": 1,
    "expDate": "2026-10-10"
  }
];
console.log(formatProductsForPromt(products));




const prompt = createPrompt(basePrompt, "борщ" ,products);


const answer = await askAi("The capital of France");
console.log(answer);