
let modalbtn = document.querySelector(".dropdown__btn");

let drop_items = document.querySelector(".dropdown__items");

let modal__block = document.querySelector(".modal__block");

let modal__btn = document.querySelector(".modal__block-btn");
modalbtn.onclick= dropdown;


function dropdown()
{
	drop_items.classList.toggle("js-toggle");
}


function pop_up()
{
	modal__block.style.cssText = "position: fixed;top:82%;transition: .5s;";
}


function d_none()
{
	modal__block.style.cssText = "display:none";
}

function roll_up()
{
	modal__block.style.cssText = "position: fixed;top:100%;transition: .5s;";
	setTimeout(d_none,650);
}


setTimeout(pop_up,500);

modal__btn.addEventListener("click" , roll_up);