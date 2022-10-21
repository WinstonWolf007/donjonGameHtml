class Player {
    constructor(health, velocity, divAttr, imgAttr) {
        this.health = health;
        this.velocity = velocity;
        this.divAttr = divAttr;
        this.imgAttr = imgAttr;
        
        this.KEY_MOVE = new KeyMove(this.divAttr, this.imgAttr, this.velocity)
    }

    key_move_anims(iddleAnims, runAnims) {
        setInterval(() => {
            if (this.KEY_MOVE.running) {
                if (iddleAnims.running) {
                    iddleAnims.stop()
                    runAnims.play()
                }
            }
            else {
                if (runAnims.running) {
                    runAnims.stop()
                    iddleAnims.play()
                }
            }
        }, 100)
    }
}