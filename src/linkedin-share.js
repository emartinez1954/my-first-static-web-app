// Archivo linkedin-share.js

function compartirEnLinkedIn() {
    // Reemplaza con tu token de acceso válido
    const token = "AQUGo9nLFlOKCsgC7eWlyqm29wXZ6FXr3_11GKktAQ4LdyUbSLBquiL7MYCpD0J7iUtzegE-zo2ZpRAaSXPrI08BdIQmdIFtaJkfgmcVIo35-cYmM7bNQIAmTbeXFfm04TN1ZtTdyAtx1sXMw-zsVBQcIMT8qJnuFDtvl0zdXKuGzVHXZ0w20MvFR66yE46Y9xb_I0ZQTBAPKDT6regSzFLWtUrEetGOrKVo8pY9tMm5cJEWZkBBHwwtf53KbAmbfjuXqauVo2l8lNNl-1btGRc96fI3O_R0u8Xd8-KfsEMnXFYdnRpOpCvk-Z9gq7ohdMKzlh42MRnPSG6ykMay1WMINIq4bA";

    // Datos para la publicación
    const data = {
        "comment": "¡Echa un vistazo a esta publicación!",
        "content": {
            "title": "Título de la publicación",
            "description": "Descripción de la publicación",
            "submitted-url": "https://mango-smoke-0d2d9f710.4.azurestaticapps.net/annaconsolato.html", // URL de la publicación
            "submitted-image-url": "https://mescalina.mx/wp-content/uploads/2023/11/MOBILE.png" // URL de la imagen de la publicación
        },
        "visibility": {
            "code": "anyone"
        }
    };

    // Realiza una solicitud POST a la API de LinkedIn
    fetch('https://api.linkedin.com/v2/ugcPosts', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
            'x-li-format': 'json' // Agrega la versión de la API aquí (por ejemplo, 'json' o 'xml')
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(responseData => {
        alert("¡Publicación exitosa en LinkedIn!");
    })
    .catch(error => {
        console.error("Error al publicar en LinkedIn: ", error);
    });
}
