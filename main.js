import { Player } from "./player.js"
import { InputHandler } from "./input.js"
import { Background } from './background.js'
import { FlyingEnemy, ClimbingEnemy, GroundEnemy } from './enemies.js'

window.addEventListener('load', function () {
    const canvas = this.document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.groundMargin = 80;
            this.speed = 0;
            this.maxSpeed = 6;
            this.background = new Background(this);
            this.player = new Player(this);
            this.input = new InputHandler();

        }
        update(deltaTime) {
            this.background.update();
            this.player.update(this.input.keys, deltaTime);
        }
        draw(context) {
            this.background.draw(context);
            this.player.draw(context);
        }
        addEnemy() {

        }
    }

    const game = new Game(canvas.width, canvas.height);
    console.log(game)
    let lastTime = 0;


    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.draw(ctx);
        game.update(deltaTime);
        requestAnimationFrame(animate);
    }
    animate(0);
})