class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.positionX = 0;
        this.positionY = 0;
        this.time = 150;
        this.score = 0;
        this.rank = 0;
    }

    addPlayer(){
        var playerIndex = "players/player" + this.index

        if(this.index === 1){
            this.positionX = -100
        }else{
            this.positionX = 100
        }

        
    }
}