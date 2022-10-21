class Anims {
    constructor(objectImg, sources, second) {
        this.sources = sources;
        this.second = second;
        this.object = objectImg;
        this.running = false;
    }

    play() {
        let idx = 0;
        this.running = true;
        let obj = document.querySelector(this.object);

        let loop = setInterval(() => {
            if (this.running) {
                obj.src = this.sources[idx]
                idx += 1;

                if (idx === this.sources.length) {
                    idx = 0;
                }
            }
            else {
                clearInterval(loop)
            }
        }, this.second * 1000)
    }

    stop() {
        this.running = false;
    }
}