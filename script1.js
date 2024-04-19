document.addEventListener("DOMContentLoaded",function(){//Cuando el DOM este cargado, acciona
const modeToggle = document.getElementById("modeToggle");// Obtiene el toggle de modo claro/oscuro
const body = document.body; // Obtiene el body
const footer = document.querySelector("footer"); //Obtiene el footer

modeToggle.addEventListener("change",function(){//Agrega el evento para cambio de modo oscuro/claro
    if(this.checked){//Verifica si el check esta activado
        body.classList.add("dark-mode");//Agrega la clase "dark-mode" al body
        footer.classList.add("dark-mode");//Agrega la clase "dark-mode" al footer
    } else{
        body.classList.remove("dark-mode");//Remueve la clase "dark-mode" del body
        footer.classList.remove("dark-mode");//Remueve la clase "dark-mode" del footer

    }
});

const blogList = document.getElementById("blogList");// Obtiene lo que ha ingresado el usuario
let posts = JSON.parse (localStorage.getItem("posts")) || [];// Obtiene las entradas del usuario almacenadas en el local Storage o inicia un arreglo vacio

if (posts.length > 0){//Verifica si hay entradas almacenadas
    posts.forEach(function(post) {//Itera sobre cada entrada del blog
        const postItem = document.createElement("div");// Crea un elemnto div por cada entrada del usuario
        postItem.classList.add("blog-post");//Agrega la clase "blogpost" al elemnto div
        postItem.innerHTML =`
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <p>Author: ${post.username}</p>
    `;//Agrega el HTML

    blogList.appendChild(postItem);

    });
}

});