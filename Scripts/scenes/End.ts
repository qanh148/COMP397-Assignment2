module scenes
{
    export class End extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _gameOverLabel: objects.Label;
        private _restartButton: objects.Button;
        private _ocean: objects.Ocean;

        private _scoreBoard: managers.ScoreBoard;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        // Initializing and Instantiating
        public Start(): void 
        {
             //instantiate a new Text object
             if(config.Game.SCORE_BOARD.Lives<1){
                this._gameOverLabel = new objects.Label("Game Over", "80px", "Consolas", "#FFFF00", 320, 180, true);
             }
           else{
            this._gameOverLabel = new objects.Label("You Win!", "80px", "Consolas", "#FFFF00", 320, 180, true);
           }
            // buttons
             this._restartButton = new objects.Button("restartButton", 320, 430, true);
            
             this._ocean = new objects.Ocean();

             this._scoreBoard  = new managers.ScoreBoard();
             this.Main();
        }        
        
        public Update(): void 
        {
            this._ocean.Update();
        }
        
        public Main(): void 
        {
            this.addChild(this._ocean);

            this.addChild(this._gameOverLabel);

        
            this.addChild(this._restartButton);

            this._restartButton.on("click", ()=>{
                config.Game.LIVES = 5;
                config.Game.ENEMY_HEALTH= 50;
                
                config.Game.SCENE = scenes.State.PLAY;
            });


        }

        public Clean(): void{
            this.removeAllChildren();
        }

        
    }
}