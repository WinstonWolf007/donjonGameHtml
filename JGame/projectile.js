class Projectile {
    constructor(divAttr) {
        this.divAttr = document.getElementById(divAttr);
        this.loopActive = false;
    }

    moveRight() {
        // spawn projectile
        this.divAttr.style.display = "block"
        this.divAttr.style.transform = "scaleX(-1)";
        this.divAttr.style.left = (pxToInt("player")+50)+"px"
        this.divAttr.style.bottom = "200px";

        // moving the projectile to right of the players
        let loop = setInterval(() => {
            this.loopActive = true;
            this.divAttr.style.left = (pxToInt("projectile")+5)+"px";

            // delete projectile if its position is equal to 1550px
            if (this.divAttr.style.left == "1550px") {
                this.loopActive = false;
                //projectile.style.display = "none";
                this.divAttr.style.left = "500px";
                this.divAttr.style.bottom = "500px";
                clearInterval(loop)
            }
        }, 10)
    }

    moveLeft() {
        // spawn projectile
        this.divAttr.style.display = "block"
        this.divAttr.style.transform = "scaleX(1)";
        this.divAttr.style.left = (pxToInt("player")-50)+"px"
        this.divAttr.style.bottom = "200px";


        // moving the projectile to left of the players
        let loop = setInterval(() => {
            this.loopActive = true;
            this.divAttr.style.left = (pxToInt("projectile")-5)+"px"

            // delete projectile if its position is equal to -100px
            if (projectile.style.left == "-100px") {
                this.loopActive = false;
                //projectile.style.display = "none"
                this.divAttr.style.left = "500px";
                this.divAttr.style.bottom = "500px";
                clearInterval(loop)
            }
        }, 10)
    }
}