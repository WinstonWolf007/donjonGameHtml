// all entity Attr variable
let mouse = document.getElementById("mouse");
let projectile = document.getElementById("projectile");
let player = document.getElementById("player");

// PLAYER animation iddle
let playerAnimsIddle = new Anims("#player div img", [
    "./imgPlayer/iddle0.png",
    "./imgPlayer/iddle1.png"
], 0.3);

// PLAYER animation run
let playerAnimsRun = new Anims("#player div img", [
    "./imgPlayer/iddle0.png",
    "./imgPlayer/iddle1.png"
], 0.1);

// MOUSE animation run
let mouseAnimsRun = new Anims("#mouse img", [
    "./imgMouse/mouse0.png",
    "./imgMouse/mouse1.png"
], 0.1);

// PROJECTILE animation
let projectileAnims = new Anims("#projectile img", [
    "./projectile/fire0.png",
    "./projectile/fire1.png",
    "./projectile/fire2.png"
], 0.1);

// play animation
playerAnimsIddle.play()
mouseAnimsRun.play()
projectileAnims.play()

// PLAYER object init
let PLAYER = new Player(3, 10, "#player", "#player div img") // health, velocity, divAttr, imgAttr
PLAYER.KEY_MOVE.play(1, -1, 0.3) // leftDef, rightDef, second
PLAYER.key_move_anims(playerAnimsIddle, playerAnimsRun); // anims iddle, anims run

// PROJECTILE object init
let PROJECTILE = new Projectile("projectile")

// MOUSE object init
// let MOUSE = new Mouse();
// MOUSE.spawn_mouse(PROJECTILE)


// keyboard event "press"
document.addEventListener("keydown", (e) => {

    // if user press space key and this is the first (no repeat)
    if (!e.repeat && e.key == " ") {

        if (PLAYER.KEY_MOVE.flipValue == "right" && !PROJECTILE.loopActive) {
            PROJECTILE.moveRight();
        }

        else if (PLAYER.KEY_MOVE.flipValue == "left" && !PROJECTILE.loopActive) {
            PROJECTILE.moveLeft();
        }
    
    } else if (!e.repeat && e.key == "q") {
        PROJECTILE.delete();
    }
})


setInterval(() => {
    if (PLAYER.KEY_MOVE.flipValue == "left") {
        if (pxToInt(projectile.style.left) < (pxToInt(mouse.style.left)+pxToInt(mouse.style.width))) {
            mouse.style.display = "none";
        }
    }
}, 10)

/*

*/