function typeWriterEffect(elementId, texts, speed = 100, deleteSpeed = 50, pause = 2000) {
  const element = document.getElementById(elementId);
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];

    if (isDeleting) {
      // Borrando
      element.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      speed = deleteSpeed;
    } else {
      // Escribiendo
      element.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      speed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
      // Pausa al terminar de escribir
      isDeleting = true;
      setTimeout(type, pause);
      return;
    }

    if (isDeleting && charIndex === 0) {
      // Cambiar texto cuando se borra completo
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(type, speed);
  }

  type();
}

typeWriterEffect("other-texts", [
    " que le gusta y no le gusta programar.",
    " que sueña demasiado con su futuro.",
    " que le encanta aprender.",
    " que disfruta de la ciencia.",
    " que se deja llevar por la performance.",
    " que capaz estudie química"
]);