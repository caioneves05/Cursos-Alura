const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
  const somaNotas = notasDaSala.reduce((acc,nota)=> acc + nota, 0); //ABREVIADA.
  
  const media = somaNotas/ notasDaSala.length;
  
  return media;
}

console.log(`A média da sala salaJS é ${calculaMedia(salaJS)}`)
