export class Player {
    constructor(game) {
        this.game = game;
        this.width = 100;
        this.height = 91;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.image = document.getElementById('player');
    }
    update(input) {
        //this.x++;
        //if (input.includes('ArrowRight')) this.x++;
        //else if (input.includes('ArrowLeft')) this.x--;
    }
    draw(context) {
        //context.fillStyle = 'red' **this was to make a red rectangle
        //context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height)
    }
}