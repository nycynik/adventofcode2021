// Advent of Code - Day 16 - Part Two
import chalk from "chalk";
import { packetDecrypt } from ".";
import { hex2PaddedBin, Packet } from "./decrypt";

const doInner = (packets: Array<Packet>): number => {
  let accumulator = 0

  return accumulator
}

export function part2(input: string): number {
  console.log(chalk.green(input))
  const decrypted = packetDecrypt(hex2PaddedBin(input))

  let accumulator = 0
  let formula = new Array<any>()

  for (const p of decrypted) {

    if (p.type !== 4) {
      
      formula.push('(')

      switch (p.type) {
        case 0:
          formula.push('+')
          break;
        case 1:
          formula.push('*')
          break;
          case 2:
            formula.push('min')
            break;
          case 3:
            formula.push('max')
            break;
          case 5:
            formula.push('>')
            break;              
            case 6:
              formula.push('<')
          break;              
          case 7:
            formula.push('==')
            break;              
      }
    } else {
     formula.push(p.value)
    }
    //   mode = p.type
    //   fresh = true
    // }
    // switch (mode) {
    //   case 0: // addition
    //   parens += p.value
    //     break;
    //   case 1: // multiplication
    //     if (!fresh) 
    //       accumulator
    //     accumulator *= p.value
    //     break;      
    // }
    // fresh = false
  }

  console.log(formula)
  return accumulator;
}
