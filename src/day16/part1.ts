// Advent of Code - Day 16 - Part One

import chalk from "chalk";
import { packetDecrypt } from ".";
import { hex2PaddedBin } from "./decrypt";


export function part1(input: string): number {
  console.log(chalk.green(input))
  const decrypted = packetDecrypt(hex2PaddedBin(input))
  console.log(decrypted)
  return decrypted.reduce((acc,v) => acc+v.version, 0);
}
