class Mouse {
    constructor() {

    }

    spawn_mouse(projectileObject) {
        let mouseDirection = Math.floor(Math.random() * 2);
    
        // check mouse collision: M + Projectile = M death | M + Player = 1 life of less
        if (mouseDirection) { 
            // left
            mouse.style.transform = "scaleX(1)";
            mouse.style.left = "1500px";
    
            // moving mouse and check is it have a collision with player
            let mouseLoop = setInterval(() => {
                if (check_collision("mouse", 0, "player", 80)) {
                    mouse.style.left = "-100px"
                    clearInterval(mouseLoop);
                
                } else if (check_collision("mouse", 0, "projectile", 70)) {
                    mouse.style.left = "-100px"
                    clearInterval(mouseLoop);
                }

                mouse.style.left = (pxToInt("mouse")-1)+"px"
            }, 10)
            
        } else { 
            
            // right
            mouse.style.transform = "scaleX(-1)";
            mouse.style.left = "-200px";
    
            // moving mouse and check is it have a collision with player
            let mouseLoop = setInterval(() => {
                if (check_collision("mouse", 90, "player", 0)) {
                    mouse.style.left = "1600px"
                    clearInterval(mouseLoop);
                }
                mouse.style.left = (pxToInt("mouse")+1)+"px"
            }, 10)
        }
    }
}