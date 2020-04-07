module objects {
    export class Agent extends GameObject {
        // PRIVATE INSTANCE MEMBERS

        private _engineSound: createjs.AbstractSoundInstance;
        private _bulletSpawn: objects.Vector2;
        private _horizontalSpeed: number;
        private _verticalSpeed: number;
        // PUBLIC PROPERTIES
        public get engineSound(): createjs.AbstractSoundInstance {
            return this._engineSound;
        }

        // CONSTRUCTOR
        constructor() {
            super(config.Game.TEXTURE_ATLAS, "playerplane", 0, 0, true);

            this.Start();
        }

        // PRIVATE METHODS
        protected _checkBounds(): void {
            // left boundary
            if (this.position.x <= this.halfWidth) {
                this.position = new Vector2(this.halfWidth, this.position.y);
            }

            // right boundary

            if (this.position.x >= config.Game.SCREEN_WIDTH - this.halfWidth) {
                this.position = new Vector2(config.Game.SCREEN_WIDTH - this.halfWidth, this.position.y);
            }

            
        }

        private _move(): void {

            let pace = 3;


            // Keyboard Controls
            if (config.Game.KEYBOARD_MANAGER.MoveLeft) {


                this.position.x -= pace;


            }
            if (config.Game.KEYBOARD_MANAGER.MoveRight) {


                this.position.x += pace;


            }
            
            this.position = new Vector2(this.position.x, this.position.y);
            this._bulletSpawn = this._bulletSpawn = new Vector2(this.position.x, this.position.y-40);
        }

        // PUBLIC METHODS
        public Start(): void {
            this.type = enums.GameObjectType.AGENT;

            this._engineSound = createjs.Sound.play("engine");
            this._engineSound.loop = -1; // loop forever
            this._engineSound.volume = 0.1; // 10% volume
            this.rotation = 0;
            this.position = new objects.Vector2(config.Game.SCREEN_WIDTH * 0.5, 600);
        }

        public Update(): void {
            this._move();
            this._checkBounds();

            // fire bullets every 10 frames
            if (createjs.Ticker.getTicks() % 30 == 0) {
                this.FireBullets();
            }

        }

        public Reset(): void {

        }

        public FireBullets(): void {
            let bullet = config.Game.BULLET_MANAGER.GetBullet();
            bullet.position = this._bulletSpawn;
            this._horizontalSpeed = 0;
            this._verticalSpeed = -12;
            bullet.velocity = new Vector2(this._horizontalSpeed, this._verticalSpeed);       
        }



    }

}
