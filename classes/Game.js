class Game{
    constructor(){
        this.leaderboard = createElement("h2")
        this.leader1 = createElement("h2")
        this.leader2 = createElement("h2")
    }

    getState(){
        var getGameState = database.ref("gameState")
        getGameState.on("value",(data) => {
            gameState = data.val();
        })
    }

    gameStateUpdate(state){
        database.ref("/").update({
            gameState: state
        })
    }
}