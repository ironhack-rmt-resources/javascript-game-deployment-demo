class Player {
    constructor() {
        // initialize properties
        this.width = 20;
        this.height = 10;
        this.positionX = 50 - (this.width / 2);
        this.positionY = 0;

        // dom manipulation to reflect initial values (size, position)
        this.playerElm = document.getElementById("player");
        this.playerElm.style.width = this.width + "vw";
        this.playerElm.style.height = this.height + "vh";
        this.playerElm.style.left = this.positionX + "vw";
        this.playerElm.style.bottom = this.positionY + "vh";
    }
    moveLeft() {
        this.positionX--;
        this.playerElm.style.left = this.positionX + "vw";
    }
    moveRight() {
        this.positionX++;
        this.playerElm.style.left = this.positionX + "vw";
    }
}




class Obstacle {
    constructor() {
        this.width = 20;
        this.height = 10;
        this.positionX = Math.floor(Math.random() * (100 - this.width + 1)); // generate random number between 0 and (100 - this.width)
        this.positionY = 100;
        this.obstacleElm = null;

        this.createDomElement();
    }
    createDomElement() {
        // step1: create the element
        this.obstacleElm = document.createElement("div");

        // step2: add content or modify
        this.obstacleElm.classList.add("obstacle");
        this.obstacleElm.style.width = this.width + "vw";
        this.obstacleElm.style.height = this.height + "vh";
        this.obstacleElm.style.left = this.positionX + "vw";
        this.obstacleElm.style.bottom = this.positionY + "vh";

        // step3: append to the dom: `parentElm.appendChild()`
        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.obstacleElm);
    }
    moveDown() {
        this.positionY--;
        this.obstacleElm.style.bottom = this.positionY + "vh";
    }
}