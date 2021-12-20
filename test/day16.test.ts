// Advent of Code - Day 16

import { part2, part1 } from '../src/day16';
import { operatorTypeDecrypt, packetDecrypt, packetType4decrypt } from '../src/day16/decrypt';

test('part one - packet version 6, type 4 decription', () => {
  expect(packetType4decrypt(`101111111000101`)).toStrictEqual(["011111100101", 15]);
});

test('part one - packet version 6, type 4 decription 2', () => {
  expect(packetType4decrypt(`0001000101010110001011`)).toStrictEqual(["0010", 5]);
});

test('part one - packetDecrypt, with limit', () => {
  expect(packetDecrypt(`0001000101010110001011`, 22).reduce((acc, v)=>acc+v.value, 0)).toStrictEqual(21);
});


test('part 1 - decrypt operation packet', () => {
  expect(operatorTypeDecrypt(`0000000000011011`)).toStrictEqual([27, -1, 16]);
});

test('part 1 - decrypt packet', () => {
  expect(packetDecrypt(`0011100000000000011011110100010100101001000100100`).reduce((acc, v)=>acc+v.version, 0)).toBe(9);
});

test('part one test 38006F45291200', () => {
  expect(part1(`38006F45291200`)).toBe(9);
  // 00111000000000000110111101000101001010010001001000000000
});

test('part one test 8A004A801A8002F478', () => {
  expect(part1(`8A004A801A8002F478`)).toBe(16);
  // 100 010 100000000001001010100000000001101010000000000000101111010001111000
});

test('part one test 620080001611562C8802118E34', () => {
  expect(part1(`620080001611562C8802118E34`)).toBe(12);
});

test('part one test C0015000016115A2E0802F182340', () => {
  expect(part1(`C0015000016115A2E0802F182340`)).toBe(23);
});

test('part one test A0016C880162017C3686B18A3D4780', () => {
  expect(part1(`A0016C880162017C3686B18A3D4780`)).toBe(31);
});

test('part two addition', () => {
  expect(part2(`C200B40A82`)).toBe(3);
});

test('part two multiplication', () => {
  expect(part2(`04005AC33890`)).toBe(54);
});

test('part two minimum', () => {
  expect(part2(`880086C3E88112`)).toBe(54);
});


