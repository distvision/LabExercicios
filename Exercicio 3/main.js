function foo() {
  let num1 = Number(prompt("Digite o Primeiro numero"));
  let num2 = Number(prompt("digite o segundo numero"));

  let resultado = document.getElementById("resultado");
  if (num1 > num2 && num2 < num1) {
    resultado.innerHTML =
      "Analisando os valores " +
      "<span>" +
      num1 +
      "</span>" +
      " e " +
      "<span>" +
      num2 +
      "</span>" +
      " o maior valor é " +
      "<strong>" +
      num1 +
      "</strong>";
  } else if (num2 > num1 && num1 < num2) {
    resultado.innerHTML =
      "Analisando os valores " +
      "<span>" +
      num1 +
      "</span>" +
      " e " +
      "<span>" +
      num2 +
      "</span>" +
      " o maior valor é " +
      "<strong>" +
      num2 +
      "</strong>";
  } else {
    resultado.innerHTML =
      "<strong>" + "são iguais digite valores diferentes" + "</strong>";
  }
}
