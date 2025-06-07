potencia = (x,n) => x**n
console.log(potencia(3,2))
// Aplicação total

potenciaCurrying = (x) => (n) => x**n
console.log(potenciaCurrying(3)(2))
//Aplicação parcial
//Desagregação / Currying

expoente = (e) => (base) => base**e
quadrado = (base) => base **2
raiz = (base) => base**1/2
inverso = (base) => base**-1
cubo = (base) => base**3
console.log(quadrado(3))
