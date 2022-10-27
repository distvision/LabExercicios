function foo() {
  let nome = prompt("Qual é o nome do aluno?");
  let nota = Number(prompt("Qual foi a primeira nota de NOME DO ALUNO?"));
  let nota2 = Number(
    prompt("Além de NOTA1, qual foi a outra nota de NOME DO ALUNO?")
  );

  const media = (nota + nota2) / 2;

  let resultado = document.getElementById("resultado");
  if (media >= 10) {
    resultado.innerHTML =
      "Calculando a media de " +
      "<span>" +
      nome +
      "</span>" +
      "<br/>" +
      "<br/>" +
      "As notas obtidas foram: " +
      "<span>" +
      nota +
      " e " +
      nota2 +
      "</span>" +
      "<br/>" +
      "<br/>" +
      "A Média final sera: " +
      "<span>" +
      media +
      "</span>" +
      "<br/>" +
      "<br/>" +
      "A mensagem que temos é: " +
      "<strong>" +
      "Meus parabéns!" +
      "</strong>";
  } else {
    resultado.innerHTML =
      "Calculando a media de " +
      "<span>" +
      nome +
      "</span>" +
      "<br/>" +
      "<br/>" +
      "As notas obtidas foram: " +
      "<span>" +
      nota +
      " e " +
      nota2 +
      "</span>" +
      "<br/>" +
      "<br/>" +
      "A Média final sera: " +
      "<span>" +
      media +
      "</span>" +
      "<br/>" +
      "<br/>" +
      "A mensagem que temos é: " +
      "<strong>" +
      "Estude mais um pouco" +
      "</strong>";
  }
}
