// Snack 1

let dato: unknown;
if(typeof dato === 'string') {
  console.log(dato.toUpperCase());
}else if(typeof dato === 'number') {
  console.log(dato.toFixed(2));
}else if(typeof dato === 'boolean') {
  console.log(dato ? 'E vero' : 'E falso');
}else {
  console.log('Tipo non supportato');
}

// Snack 2

type Dipendente = {
  nome : string,
  cognome : string,
  annoNascita : number,
  sesso : 'm' | 'f',
  anniDiServizio : number[],
}