export const heart = {

    init: function() {
        // ajout d'un écouteur d'évènement sur les coeurs
        const heartGaugeElement = document.querySelector("#heart-gauge");
        heartGaugeElement.addEventListener("click", this.handleClickHeart);
    },
    
    // au clique, change la couleur du dernier coeur et affiche "game over" si tous les coeurs sont grisés.
    handleClickHeart: function(evt) {
        const firstHeartSrc = document.querySelectorAll('.heart-gauge__heart')[0].src;
        const secondHeartSrc = document.querySelectorAll('.heart-gauge__heart')[1].src

        // Si le premier coeur est plein, on change la src de l'image du dernier coeur rouge pour qu'il soit grisé
        if (firstHeartSrc.includes("FullHeart.svg")) {
            const heartElements = document.querySelectorAll(".heart-gauge__heart[src='images/FullHeart.svg'");
            const lastFullHeartElement = heartElements[heartElements.length - 1];
            lastFullHeartElement.setAttribute("src", "images/EmptyHeart.svg");

            // Si le premier coeur est le dernier à être rouge, on affiche l'écran de game over
            if (secondHeartSrc.includes("EmptyHeart.svg")) {
                document.getElementById('game-over').style = "display: flex";
            }
        }
    },
}