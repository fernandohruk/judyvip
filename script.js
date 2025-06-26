document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const floatingPremiumBtn = document.getElementById('floatingPremiumBtn');

     // Función para activar una pestaña específica
    const activateTab = (tabId) => {
        // Desactivar todos los botones
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Activar el botón correspondiente
        // Nota: Asegúrate de que tus botones de pestaña tengan IDs como 'tab-free' y 'tab-premium'
        document.getElementById(`tab-${tabId}`).classList.add('active'); 

        // Ocultar todo el contenido de las pestañas
        tabContents.forEach(content => content.classList.remove('active'));
        // Mostrar el contenido de la pestaña correspondiente
        document.getElementById(`${tabId}-content`).classList.add('active');
    };

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab; // 'free' o 'premium'
            activateTab(targetTab);
        });
    });

    // Event listener para el botón flotante
    if (floatingPremiumBtn) {
        floatingPremiumBtn.addEventListener('click', () => {
            activateTab('premium'); // Activa la pestaña 'premium'
            
            // Opcional: Hacer scroll a la sección premium si es muy larga
            // const premiumSection = document.getElementById('premium-content');
            // if (premiumSection) {
            //     premiumSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // }
        });
    }

    // Añadir clase 'is-mobile' si es un dispositivo móvil (para el botón de café)
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        document.body.classList.add('is-mobile');
    }
});