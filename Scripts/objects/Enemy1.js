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
    var Enemy1 = /** @class */ (function (_super) {
        __extends(Enemy1, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Enemy1() {
            var _this = _super.call(this, config.Game.TEXTURE_ATLAS, "enemyplane", new objects.Vector2(), true) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Enemy1.prototype._checkBounds = function () {
            if (this.y >= config.Game.SCREEN_HEIGHT + this.height) {
                this.Reset();
            }
        };
        Enemy1.prototype._move = function () {
            this.position = objects.Vector2.add(this.position, this.velocity);
            this._bulletSpawn = new objects.Vector2(this.position.x, this.position.y + 200);
        };
        // PUBLIC METHODS
        Enemy1.prototype.Start = function () {
            this.type = enums.GameObjectType.ENEMY1;
            this.alpha = 1; // 100% transparent
            this.Reset();
        };
        Enemy1.prototype.Update = function () {
            this._move();
            this._checkBounds();
            if (createjs.Ticker.getTicks() % 160 == 0) {
                this._horizontalSpeed = (this._horizontalSpeed == 1) ? -1 : 1;
            }
            if (createjs.Ticker.getTicks() % 43 == 0) {
                this.FireBullets();
            }
            this.velocity = new objects.Vector2(this._horizontalSpeed, this._verticalSpeed);
        };
        Enemy1.prototype.Reset = function () {
            this._verticalSpeed = 0;
            this._horizontalSpeed = (this._horizontalSpeed == 1) ? -1 : 1;
            this.velocity = new objects.Vector2(this._horizontalSpeed, this._verticalSpeed);
            var randomX = 285;
            var randomY = -60;
            this.position = new objects.Vector2(randomX, randomY);
        };
        Enemy1.prototype.FireBullets = function () {
            var bullet = config.Game.BULLET_MANAGER.GetBullet();
            var bullet2 = config.Game.BULLET_MANAGER.GetBullet();
            var bullet3 = config.Game.BULLET_MANAGER.GetBullet();
            bullet.position = this._bulletSpawn;
            bullet.scaleX = 2;
            bullet.velocity = new objects.Vector2(0, 5);
            if (config.Game.ENEMY_HEALTH <= 40) {
                bullet2.position = this._bulletSpawn;
                bullet2.scaleX = 2;
                bullet2.scaleY = 2;
                bullet2.velocity = new objects.Vector2(2, 5);
                bullet3.position = this._bulletSpawn;
                bullet3.scaleX = 2;
                bullet3.scaleY = 2;
                bullet3.velocity = new objects.Vector2(-2, 5);
            }
            if (config.Game.ENEMY_HEALTH <= 25) {
                bullet.scaleX = 3;
                bullet.scaleY = 3;
                bullet2.scaleX = 3;
                bullet2.scaleY = 3;
                bullet3.scaleX = 3;
                bullet3.scaleY = 3;
            }
        };
        return Enemy1;
    }(objects.GameObject));
    objects.Enemy1 = Enemy1;
})(objects || (objects = {}));
//# sourceMappingURL=Enemy1.js.map