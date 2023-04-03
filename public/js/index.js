// @ts-ignore
const socket = io();

const formCargaVideojuego = document.querySelector("#cargaVJ");

// const plantilla = `{{#if listVJ}}
//   <ul>
//     {{#each videojuegos}}
//       <li>Nombre:{{this.nombre}}
//         | Genero:{{this.genero}}
//         | Plataforma:{{this.plataforma}}
//       </li>
//     {{/each}}
//   </ul>
// {{else}}
//   <p>No Hay videojuegos para mostrar...</p>
// {{/if}}`;

// const reloadListado = Handlebars.compile("plantilla");

if (formCargaVideojuego instanceof HTMLFormElement) {
  formCargaVideojuego.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(formCargaVideojuego);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    fetch("api/videojuegos", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
  });
}

// socket.on("reloadVJ", (videojuegosr) => {
//   const contenedor = document.querySelector("#contenedor");

//   if (contenedor) {
//     contenedor.innerHTML = reloadListado({
//       Title: "VideoJuegosRT",
//       listVJ: videojuegosr.length > 0,
//       videojuegos: videojuegosr,
//     });
//   }
// });
