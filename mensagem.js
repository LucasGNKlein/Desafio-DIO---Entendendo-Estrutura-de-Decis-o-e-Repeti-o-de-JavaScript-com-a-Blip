const tipoMensagem = gets();
let contador = 0;

while (true) {
  const linha = gets();
  
  if (linha === "FIM"){
    break;
  }
  
  if (linha.startsWith(tipoMensagem + ":")){
    contador++;
  }
}

print(contador);
