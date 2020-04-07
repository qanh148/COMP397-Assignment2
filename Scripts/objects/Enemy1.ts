module objects
{
    export class Enemy1 extends GameObject
    {
        // PRIVATE INSTANCE MEMBERS
        private _verticalSpeed?:number;
        private _horizontalSpeed?:number;
        private _bulletSpawn: objects.Vector2;
        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super(config.Game.TEXTURE_ATLAS, "enemyplane", new Vector2(), true);

            this.Start();
        }

        // PRIVATE METHODS

        protected _checkBounds(): void 
        {
            if(this.y >= config.Game.SCREEN_HEIGHT + this.height)
            {
                this.Reset();
            }
            
        }       
        
        private _move():void
        {
            this.position = Vector2.add(this.position, this.velocity);
            this._bulletSpawn = new Vector2(this.position.x, this.position.y+200);
        }
        
        // PUBLIC METHODS
        public Start(): void 
        {
            this.type = enums.GameObjectType.ENEMY1;
            this.alpha = 1; // 100% transparent
            this.Reset();
        }
        
        public Update(): void 
        {
            this._move();
            this._checkBounds();
            if(createjs.Ticker.getTicks() % 160==0){
                this._horizontalSpeed = (this._horizontalSpeed==1)?-1:1
            }
            if (createjs.Ticker.getTicks() % 43==0) {
                this.FireBullets();
            }
            
            this.velocity = new Vector2(this._horizontalSpeed, this._verticalSpeed);
        }
        
        public Reset(): void 
        {
            this._verticalSpeed = 0;
            this._horizontalSpeed = (this._horizontalSpeed==1)?-1:1
            this.velocity = new Vector2(this._horizontalSpeed, this._verticalSpeed);
            let randomX = 285;
            let randomY = -60;
            this.position = new Vector2(randomX, randomY);
        }

        public FireBullets(): void {
            let bullet = config.Game.BULLET_MANAGER.GetBullet();
            let bullet2= config.Game.BULLET_MANAGER.GetBullet();
            let bullet3= config.Game.BULLET_MANAGER.GetBullet();
            bullet.position = this._bulletSpawn;
            bullet.scaleX= 2;
            bullet.scaleY= 2;
            bullet.velocity = new Vector2(0, 5);
            if(config.Game.ENEMY_HEALTH<=40){
                bullet2.position = this._bulletSpawn;
                bullet2.scaleX= 2;
                bullet2.scaleY=2;
                bullet2.velocity = new Vector2(2,5);   

                bullet3.position = this._bulletSpawn;
                bullet3.scaleX= 2;
                bullet3.scaleY=2;
                bullet3.velocity = new Vector2(-2,5);     
            }
            if(config.Game.ENEMY_HEALTH<=25)
            {
                bullet.scaleX= 3;
                bullet.scaleY=3;
                bullet2.scaleX= 3;
                bullet2.scaleY=3;
                bullet3.scaleX= 3;
                bullet3.scaleY=3;
            }
               
        }
    }
}