export const menu = {

    init: function() {
        const menuElements = document.querySelectorAll('menu > li');
        menuElements.forEach( (menuItem) => {
            menuItem.addEventListener("click", this.handleClickMenu);
        });
    },

    handleClickMenu: function(evt) {
        // Afficher l'animation de sélecteur actif (.menu__selector--active) sur l'élement de menu sélectionné
            // Sélection de la div qui indique à l'utilisateur la section active courante
            const currentMenuSelector = document.querySelector('.menu__selector--active');
            // Remplacement des classes pour rendre le sélecteur "inactif"
            currentMenuSelector.classList.replace("menu__selector--active", "menu__selector--inactive");
            // Sélection de l'élément du menu sélectionné par l'utilisateur
            const newMenuItem = evt.currentTarget;
            const newMenuSelector = newMenuItem.querySelector('.menu__selector > div');
            // Application de la classe qui indique que l'élément cliqué est "actif"
            newMenuSelector.classList.replace("menu__selector--inactive", "menu__selector--active");
        
        // Afficher la section qui correspond à l'élément du menu sélectionné
            // Sélection de la value de l'élément du menu courant (elle correspond à l'ID de la section courante affichée)
            const currentMenuItem = currentMenuSelector.closest('li');
            const currentSectionName = currentMenuItem.getAttribute("value");
            const currentSectionElement = document.querySelector(`#${currentSectionName}`);
            // On cache la section courante
            currentSectionElement.style.display = "none";

            // Sélection de la value de l'élément du menu cliqué (qui correspond à l'ID de la section à afficher)
            const newSectionName = newMenuItem.getAttribute('value');
            const newSectionElement = document.querySelector(`#${newSectionName}`);
            // Affichage de la section à afficher
            newSectionElement.style.display = "block";
    }
}