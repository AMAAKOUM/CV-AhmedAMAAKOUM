document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.main-nav .nav-button');
    const iframe = document.querySelector('.content-frame');

    // Fonction pour mettre à jour la classe active sur les liens de navigation
    function updateActiveLink() {
        const currentSrc = iframe.contentWindow.location.pathname; // Obtient le chemin de l'iframe
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            // Compare le href du lien avec le chemin de l'iframe
            if (currentSrc.includes(link.getAttribute('href').split('/').pop())) {
                link.classList.add('active');
            }
        });
    }

    // Écouteur d'événement pour le chargement de l'iframe
    iframe.addEventListener('load', updateActiveLink);

    // Initialisation au chargement de la page
    updateActiveLink();

    // Ajoute un écouteur de clic pour chaque bouton de navigation
    // Cela permettra de s'assurer que le bouton actif est mis à jour immédiatement
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Retirez la classe active de tous les boutons
            navLinks.forEach(btn => btn.classList.remove('active'));
            // Ajoutez la classe active au bouton cliqué
            this.classList.add('active');
        });
    });
});