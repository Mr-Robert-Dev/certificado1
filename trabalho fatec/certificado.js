let nome= document.querySelector(".student-name");
let preencha = document.querySelector("input");
let form = document.querySelector(".formulario")
let certificado = document.querySelector(".certificate");
let baixar = document.querySelector("#button")

const nomeA =[]

document.getElementById("certificado").addEventListener("click", function () {
    const novonome = preencha.value
    nomeA.push(novonome)
    if (nomeA.length > 0) {
        nome.textContent = nomeA[0]; // Defina o valor de nome.textContent para o primeiro elemento do array
      }
      form.style.display = "none"
      certificado.style.display = "flex"
      baixar.style.display ="flex"
    });


document.getElementById("button").addEventListener("click", function () {
    baixar.style.display ="none"

    window.print();
});


