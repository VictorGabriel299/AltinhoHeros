self.onmessage = (event) => {
  // Teste normal
  let mensagem = "Mensagem original";

  mensagem = "Web Worker funcionando!";

  self.postMessage(mensagem);

  // Teste de sobrescrever const:
  // descomente estas linhas para provocar um erro proposital.

  /*
  const teste = "original";
  teste = "alterado";
  */
};