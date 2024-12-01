const input = Deno.readTextFileSync("input.txt");
const mappedInput = input.split("\n").map((pair) => pair.split("   "))
const columns: number[][] = [[], []]

const leftColumn = columns[0];
const rightColumn = columns[1];

for (let i = 0; i < mappedInput.length; i++) {
  leftColumn.push(parseInt(mappedInput[i][0]))
  rightColumn.push(parseInt(mappedInput[i][1]))
}

leftColumn.sort((a, b) => a < b ? -1 : 1)
rightColumn.sort((a, b) => a < b ? -1 : 1)

const results: number[] = []

for (let i = 0; i < leftColumn.length - 1; i++) {
  if (leftColumn[i] < rightColumn[i]) results.push(rightColumn[i] - leftColumn[i])
  else results.push(leftColumn[i] - rightColumn[i])
}

const sum = results.reduce((acc, curr) => acc + curr, 0)

console.log(`Result: ${sum}`) // Result of the part 1 