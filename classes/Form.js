class Start{
    constructor(){
     this.input = createInput("").attribute("placeholder", "Enter your name");
     this.playButton = createButton("Play!");
     this.title = createImg("./assets/title.png","game title")
     this.greeting = createElement("h2");
    }

    setElementsPosition(){
        inputPosX = this.input.position.x;
        inputPosY = this.input.position.y;
      this.input.position(width/2,height/2+150,50,175);
      this.playButton.position(inputPosX,inputPosY+150);
      this.titleImg.position(width/2,height/2-200,100,300)
    }

    formElementsHide(){
      this.input.hide();
      this.playButton.hide();
      this.title.hide()
      this.greeting.hide();
    }

    handleMousePressed(){
      this.playButton.mousePressed(()=>{
        this.input.hide();
        this.playButton.hide();
        this.titleImg.position(width/2,height/2-100)
        var message = 
        `Hello ${this.input.value()}
        </br> Please wait for another player to join..`
        this.greeting.html(message)
        playerCount += 1
        player.updateCount()
        player.name = this.input.value()
      })
    }
}