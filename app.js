// Datos del perfil
let nombre = "Percy Huaman Tacuri";
let descripcion = "⭐ Creative soul sharing vibes & passion. Join the journey! ✨";

// Función para agregar el nombre y descripción
function agregarInfoPerfil() {
    // Encontrar donde vamos a poner la información
    let infoPerfil = document.getElementById('info-perfil');
    
    // Crear y agregar el nombre
    let nombreElemento = document.createElement('div');
    nombreElemento.className = 'nombre';
    nombreElemento.textContent = nombre;
    
    // Crear y agregar la descripción
    let descripcionElemento = document.createElement('div');
    descripcionElemento.className = 'descripcion';
    descripcionElemento.textContent = descripcion;
    
    // Agregar al perfil
    infoPerfil.appendChild(nombreElemento);
    infoPerfil.appendChild(descripcionElemento);
}

// Ejecutar cuando la página cargue
document.addEventListener('DOMContentLoaded', agregarInfoPerfil);
