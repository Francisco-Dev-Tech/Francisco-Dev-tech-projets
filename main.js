let state = true;
let alt = document.getElementById("alt")
let cont = document.querySelectorAll(".more");

function mostrar(cont)
{
  cont.forEach(a => {
      a.style.display = "flex";
      setTimeout(() => {
        a.style.opacity = "1";
      },500)
    })
}

function esconde(cont) {
  cont.forEach(a => {
      a.style.opacity = "0";
      setTimeout(() => {
      a.style.display = "none";
      },500);
    })
}
alt.addEventListener("click", () => {
  state = !state;
  
  if(state)  {
    alt.textContent = "Mais...";
    esconde(cont);
  }
  else {
    alt.textContent = "Menos...";
    mostrar(cont);
  }
  }
)