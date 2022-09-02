import chalk from 'chalk';
import { suma, multiplica } from "./controller.js";

let resultSuma = suma(1, 2);
let resultMultiplica = multiplica(4, 5);
// console.log(resultSuma, resultMultiplica);

console.log(chalk.green(resultSuma, resultMultiplica));