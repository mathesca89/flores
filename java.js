
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

// Crear plantas en intervalos  
setInterval(createPlant, 1500); // Cada 1.5 segundos  