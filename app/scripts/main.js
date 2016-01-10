(function () {
    'use strict';

    // Imports
    var Phaser = window.Phaser;

    function main() {
        return new Phaser.Game(200, 150, Phaser.CANVAS, 'game', {
            create: function () {
                var styles = {
                    fill: '#fff',
                    font: '30px Lobster'
                };

                this.add.text(10, 10, 'Phaser.js', styles);
                this.add.text(10, 45, 'ÓĄŚŁŻŹĆŃ', styles);
                this.add.text(10, 83, 'óąśłżźćń', styles);
            }
        });
    }

    window.addEventListener('DOMContentLoaded', main);
}());
