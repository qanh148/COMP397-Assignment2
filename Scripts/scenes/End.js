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
var scenes;
(function (scenes) {
    var End = /** @class */ (function (_super) {
        __extends(End, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function End() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        // Initializing and Instantiating
        End.prototype.Start = function () {
            //instantiate a new Text object
            if (config.Game.SCORE_BOARD.Lives < 1) {
                this._gameOverLabel = new objects.Label("Game Over", "80px", "Consolas", "#FFFF00", 320, 180, true);
            }
            else {
                this._gameOverLabel = new objects.Label("You Win!", "80px", "Consolas", "#FFFF00", 320, 180, true);
            }
            // buttons
            this._restartButton = new objects.Button("restartButton", 320, 430, true);
            this._ocean = new objects.Ocean();
            this._scoreBoard = new managers.ScoreBoard();
            this.Main();
        };
        End.prototype.Update = function () {
            this._ocean.Update();
        };
        End.prototype.Main = function () {
            this.addChild(this._ocean);
            this.addChild(this._gameOverLabel);
            this.addChild(this._restartButton);
            this._restartButton.on("click", function () {
                config.Game.LIVES = 5;
                config.Game.ENEMY_HEALTH = 50;
                config.Game.SCENE = scenes.State.PLAY;
            });
        };
        End.prototype.Clean = function () {
            this.removeAllChildren();
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=End.js.map