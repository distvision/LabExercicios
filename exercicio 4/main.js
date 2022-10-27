function foo() {
  let inputVal = document.getElementById("num").value;
  let res = document.getElementById("resultado");
  res.innerHTML = "";

  if (inputVal == "") {
    alert("impossivel contar");
  } else {
    for (let i = 0; i <= inputVal; i++) {
      res.innerHTML += i + "&#128073";
    }
    res.innerHTML += " &#128511; ";
  }
}
