const comando = gets();

/*Resumindo, o problema é diferente, mas a solução é a mesma (o problema anterior permitia fazer de outros jeitos)*/

switch (comando) {
  case "horario":
    console.log("Atendemos das 8h as 18h");
    break;
    
  case "telefone":
    console.log("Nosso telefone e 4002-8922");
    break;
    
  case "servicos":
    console.log("Oferecemos suporte, vendas e consultoria");
    break;
    
  default:
    console.log("Comando invalido");
  
}
