const messages = [
    "¿Sabes qué es la entropía?",
    "Se ha detectado una nueva Bruja en el sector sur.",
    "Madoka Kaname... su potencial es fascinante.",
    "¿Ya has pensado en tu deseo?",
    "Las Gemas del Alma necesitan limpieza inmediata."
];

function showKyubeyMessage() {
    const toastElement = document.getElementById('kyubeyToast');
    const messageElement = document.getElementById('toastMessage');
    const toast = new bootstrap.Toast(toastElement);

    messageElement.innerText = messages[Math.floor(Math.random() * messages.length)];
    toast.show();
}

// Mostrar un mensaje cada 15 segundos
setInterval(showKyubeyMessage, 15000);

function firmarContrato() {
    const deseo = document.getElementById('userWish').value;

    if (deseo.trim() === "") {
        alert("Kyubey: No puedo conceder un deseo que no ha sido expresado. Escribe algo.");
        return;
    }

    // El mensaje de Kyubey al aceptar
    const mensajeKyubey = `Kyubey: "Tu deseo ha superado la entropía. Ahora, ve y cumple con tu destino como Puella Magi. ¡Gracias por tu cooperación!"`;

    alert(mensajeKyubey);

    // Opcional: Mostrarlo en el Toast de la pantalla
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.innerText = "CONTRATO SELLADO. Deseo registrado.";

    // Cerrar el modal (usando Bootstrap)
    const modalElement = document.getElementById('contractModal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();

    console.log("Contrato firmado. Deseo del usuario:", deseo);
}