"use strict";
var config;
(function (config) {
    var Game = /** @class */ (function () {
        function Game() {
        }
        Game.SCREEN_WIDTH = 640;
        Game.SCREEN_HEIGHT = 640;
        Game.FPS = 60; // 60 Frames per second
        Game.CLOUD_NUM = 1;
        Game.LIVES = 5;
        Game.SCORE = 0;
        Game.ENEMY_HEALTH = 50;
        Game.HIGH_SCORE = 0;
        return Game;
    }());
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=game.js.map