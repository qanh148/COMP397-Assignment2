"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Agent = /** @class */ (function (_super) {
        __extends(Agent, _super);
        // CONSTRUCTOR
        function Agent() {
            var _this = _super.call(this, config.Game.TEXTURE_ATLAS, "playerplane", 0, 0, true) || this;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Agent.prototype, "engineSound", {
            // PUBLIC PROPERTIES
            get: function () {
                return this._engineSound;
            },
            enumerable: true,
            configurable: true
        });
        // PRIVATE METHODS
        Agent.prototype._checkBounds = function () {
            // left boundary
            if (this.position.x <= this.halfWidth) {
                this.position = new objects.Vector2(this.halfWidth, this.position.y);
            }
            // right boundary
            if (this.position.x >= config.Game.SCREEN_WIDTH - this.halfWidth) {
                this.position = new objects.Vector2(config.Game.SCREEN_WIDTH - this.halfWidth, this.position.y);
            }
        };
        Agent.prototype._move = function () {
            var pace = 3;
            // Keyboard Controls
            if (config.Game.KEYBOARD_MANAGER.MoveLeft) {
                this.position.x -= pace;
            }
            if (config.Game.KEYBOARD_MANAGER.MoveRight) {
                this.position.x += pace;
            }
            this.position = new objects.Vector2(this.position.x, this.position.y);
            this._bulletSpawn = this._bulletSpawn = new objects.Vector2(this.position.x, this.position.y - 40);
        };
        // PUBLIC METHODS
        Agent.prototype.Start = function () {
            this.type = enums.GameObjectType.AGENT;
            this._engineSound = createjs.Sound.play("engine");
            this._engineSound.loop = -1; // loop forever
            this._engineSound.volume = 0.1; // 10% volume
            this.rotation = 0;
            this.position = new objects.Vector2(config.Game.SCREEN_WIDTH * 0.5, 600);
        };
        Agent.prototype.Update = function () {
            this._move();
            this._checkBounds();
            // fire bullets every 10 frames
            if (createjs.Ticker.getTicks() % 30 == 0) {
                this.FireBullets();
            }
        };
        Agent.prototype.Reset = function () {
        };
        Agent.prototype.FireBullets = function () {
            var bullet = config.Game.BULLET_MANAGER.GetBullet();
            bullet.position = this._bulletSpawn;
            this._horizontalSpeed = 0;
            this._verticalSpeed = -12;
            bullet.velocity = new objects.Vector2(this._horizontalSpeed, this._verticalSpeed);
        };
        return Agent;
    }(objects.GameObject));
    objects.Agent = Agent;
})(objects || (objects = {}));
//# sourceMappingURL=Agent.js.map