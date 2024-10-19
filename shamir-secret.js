const fs = require('fs');

const decodeValue = (value, base) => BigInt(parseInt(value, base));

const findConstantTerm = (points) => {
  let constant = 0n;
  points.forEach(([xi, yi]) => {
    let li = 1n;
    points.forEach(([xj]) => {
      if (xi !== xj) {
        li *= (0n - BigInt(xj)) * modInverse(BigInt(xi - xj));
      }
    });
    constant += yi * li;
  });
  return constant;
};

const modInverse = (num) => (num < 0n ? -num : num);

const main = (filePath) => {
  try {
    const data = fs.readFileSync(filePath);
    const json = JSON.parse(data);
    const { n, k } = json.keys;
    const points = Object.entries(json)
      .filter(([key]) => key !== 'keys')
      .map(([x, { base, value }]) => [parseInt(x), decodeValue(value, base)]);
    if (points.length < k) throw new Error('Insufficient points for interpolation');
    const constantTerm = findConstantTerm(points);
    console.log(`The secret constant term (c) is: ${constantTerm}`);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

main('input.json');
