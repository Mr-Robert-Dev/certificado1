let nome= document.querySelector(".student-name");
let preencha = document.querySelector("input");
let form = document.querySelector(".formulario")
let certificado = document.querySelector(".certificate");
let baixar = document.querySelector("#button")
let baixar2 = document.querySelector("#button2")


const nomeA =[]

document.getElementById("certificado").addEventListener("click", function () {
    const novonome = preencha.value
    nomeA.push(novonome)
    if (nomeA.length > 0) {
        nome.textContent = nomeA[0]; // Defina o valor de nome.textContent para o primeiro elemento do array
      }
      form.style.display = "none"
      baixar.style.display ="flex"
      certificado.style.display = "flex"
      baixar2.style.display ="block"


    });


document.getElementById("button").addEventListener("click", function () {
    baixar.style.display ="none"
    baixar2.style.display ="none"
    window.print();
});


