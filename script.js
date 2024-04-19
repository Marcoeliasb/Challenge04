const blogForm = document.getElementById("blogForm");//Llamamos el formulario del blog

blogForm.addEventListener("submit", function(event){//Agrega el evento para el envio del formulario
    event.preventDefault();//Evita que el formulario se envie por defecto

    const username = document.getElementById("username").value;// Llama el valor del campo username
    const title = document.getElementById("title").value;// Llama el valor ingresado en el titulo
    const content = document.getElementById("content").value;

    if (username.trim() ==="" || title.trim() ==="" || content.trim() ==="") { //Verifica si el usuario dejo algo en blanco
        alert("Pleade complete all fields before submitting");// Si algun campo esta vacio, le pide al usuario que lo llene
        return;
    
    }

    const postData = { // Los datos del formulario los pone dentro de un objeto
    username: username,
    title: title,
    content: content

    };

    let posts = JSON.parse(localStorage.getItem("posts")) || [];// Obtiene los datos almacenados previamente
    posts.push(postData);//Agrega los datos del nuevo submit al array
    localStorage.setItem("posts",JSON.stringify(posts));// Almacena los datos en el localstorage
    console.log("Antes de la redireccion");


    window.location.href = "index1.html";// Redirige a la pagina del blog

});