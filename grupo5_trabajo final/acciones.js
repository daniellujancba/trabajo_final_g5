/* capturar los botones*/
const form1 = document.getElementById("formcontactos_1");
const form2 = document.getElementById("formcontactos_2");


const btnForm=document.getElementsByClassName("btn-form");
console.log(btnForm);

for(let i=0 ; i<btnForm.length ; i++){
    btnForm[i].addEventListener("click", secuencia);
}

function secuencia(){
    form1.classList.toggle("d-none");
    form2.classList.toggle("d-none");

}
