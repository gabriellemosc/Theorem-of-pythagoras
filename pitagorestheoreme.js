
// Declare the Square Root
function calculateSquareRoot (radicand) {
  return radicand ** (1/2);
}

// Calculte the Pitagoras's theme
function calculatePitagoras (side1, side2){
  const sum = side1 ** 2 + side2 ** 2;
  return calculateSquareRoot(sum)

}

console.log(`A hipotenusa de um triângulo de lados 3 e 4 é de ${calculatePitagoras(3, 4)}`)