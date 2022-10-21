class KeyMove {
    constructor(object, objectImg, velocity) {
        this.object = object;
        this.objectImg = objectImg;
        this.velocity = velocity;
        this.running = false;

        this.flipValue = "right";
    }

    play(leftDef, rightDef, effect3d) {
        let entity = document.querySelector(this.object)
        let img = document.querySelector(this.objectImg);

        if (effect3d) {
            img.style.transition = effect3d+"s";
        }

        document.addEventListener("keyup", (e) => {
            if (!e.repeat) {
                this.running = false;
            }
        })

        document.addEventListener("keydown", (e) => {
            if (!e.repeat && (e.key === "ArrowRight" || e.key === "ArrowLeft")) {
                this.running = true;
                if (e.key === "ArrowRight") {
                    this.flipValue = "right";
                    img.style.transform = "scaleX(" + rightDef.toString() + ")";
                }
                else if (e.key === "ArrowLeft") {
                    this.flipValue = "left";
                    img.style.transform = "scaleX(" + leftDef.toString() + ")";
                }
            }

            if (e.key === "ArrowRight") {
                entity.style.left = (parseInt(getComputedStyle(entity).left.replace("px", ""))+this.velocity)+"px"
            }
            else if (e.key === "ArrowLeft") {
                entity.style.left = (parseInt(getComputedStyle(entity).left.replace("px", ""))-this.velocity)+"px"
            }
        })
    }
}