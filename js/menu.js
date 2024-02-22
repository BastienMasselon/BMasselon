export const menu = {

    init: function() {
        const menuElements = document.querySelectorAll('menu > li');
        menuElements.forEach( (menuItem) => {
            menuItem.addEventListener("click", this.handleClickMenuItem);
        });

        const navItemElements = document.querySelectorAll('.navbar__item');
        navItemElements.forEach( (navbarItem) => {
            navbarItem.addEventListener('click', this.handleClickNavbarItem);
        });
    },

    handleClickMenuItem: function(evt) {
        // Afficher l'animation de sélecteur actif (.menu__selector--active) sur l'élement de menu sélectionné
        const newMenuItem = evt.currentTarget;
        const currentMenuSelector = menu.updateMenuSelector(newMenuItem);
        
        const currentMenuItem = currentMenuSelector.closest('li');
        const currentSectionId = currentMenuItem.getAttribute("value");
        // On cache la section qui était affichée jusqu'à présent
        menu.hideSection(currentSectionId);

        // Sélection de la value de l'élément du menu cliqué (qui correspond à l'ID de la section à afficher)
        const newSectionId = newMenuItem.getAttribute('value');
        // Affichage de la nouvelle section sélectionnée
        menu.displaySection(newSectionId);

        // On bouge également l'élément de la navbar actif
        const newNavItem = document.querySelector(`.navbar__item[value=${newSectionId}]`);
        menu.updateActiveNavItem(newNavItem);
    },

    handleClickNavbarItem: function(evt) {
        const newNavItem = evt.currentTarget;
        const currentNavItem = menu.updateActiveNavItem(newNavItem);

        const currentSectionId = currentNavItem.getAttribute("value");
        menu.hideSection(currentSectionId);

        const newSectionId = newNavItem.getAttribute("value");
        menu.displaySection(newSectionId);

        // On bouge également le sélecteur du menu
        const newMenuItem = document.querySelector(`menu > li[value=${newSectionId}`);
        menu.updateMenuSelector(newMenuItem);
    },

    // Cache une section selon son ID
    hideSection: function(sectionId) {
        const sectionElement = document.querySelector(`#${sectionId}`);
        sectionElement.style.display = "none";
    },

    // Affiche une section selon son ID
    displaySection: function(sectionId) {
        const sectionElement = document.querySelector(`#${sectionId}`);
        sectionElement.style.display = "block";
    },

    // Affiche le sélecteur animé sur l'élément du menu sélectionné
    updateMenuSelector: function (menuItem) {
        // Sélection de la div qui indique à l'utilisateur la section active courante
        const currentMenuSelector = document.querySelector('.menu__selector--active');
        // Remplacement des classes pour rendre le sélecteur "inactif"
        currentMenuSelector.classList.replace("menu__selector--active", "menu__selector--inactive");
        // Sélection de l'élément du menu sélectionné par l'utilisateur
        const newMenuSelector = menuItem.querySelector('.menu__selector > div');
        // Application de la classe qui indique que l'élément cliqué est "actif"
        newMenuSelector.classList.replace("menu__selector--inactive", "menu__selector--active");

        return currentMenuSelector;
    },

    // Applique la classe CSS rendant un élément de la navbar "actif"
    updateActiveNavItem: function(navItem) {
        const currentNavItem = document.querySelector('.navbar__item--active');
        currentNavItem.classList.remove("navbar__item--active");
        navItem.classList.add('navbar__item--active');

        return currentNavItem;
    }
}