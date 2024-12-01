const input = Deno.readTextFileSync("input.txt");
const mappedInput = input.split("\n").map((pair) => pair.split("   "))
const columns: number[][] = [[], []]

const leftColumn = columns[0];
const rightColumn = columns[1];

const uniqueRightColumn: Map<number, number> = new Map()


for (let i = 0; i < mappedInput.length - 1; i++) {
  const left = parseInt(mappedInput[i][0])
  const right = parseInt(mappedInput[i][1])

  const foundBefore = uniqueRightColumn.get(right)

  if (foundBefore) {
    uniqueRightColumn.set(right, foundBefore + 1)
  } else {
    uniqueRightColumn.set(right, 1)
  }

  leftColumn.push(left)
  rightColumn.push(right)
}

const results: number[] = [];

for (let i = 0; i < leftColumn.length - 1; i++) {

  const multiplier = uniqueRightColumn.get(leftColumn[i])

  if (!multiplier) {
    results.push(0)
    continue;
  } else {
    results.push(leftColumn[i] * multiplier)
  }


}

const sum = results.reduce((acc, curr) => acc + curr, 0)

console.log(`Result: ${sum}`); // Result of the part 2

