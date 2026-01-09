var sceneplays = new Phaser.Class({ 
    Extends: Phaser.Scene,
    initialize: function () {
        Phaser.Scene.call(this, { "key": "sceneplays" });
    },
    init: function () {},

    preload: function () {
        this.load.image('chara','assets/images/chara.png');
        this.load.image('fg_loop_back','assets/images/fg_loop_back.png');
        this.load.image('fg_loop','assets/images/fg_loop.png');    },

    create: function () {
        this.chara = this.add.image(1280 / 2, 768 / 2, 'chara');
        this.chara.setDepth(3);
        this.isGameRunning = true;

        this.chara.setScale(0);
        this.tweens.add({
            targets: this.chara,
            ease: 'bounce.easeOut',
            duration: 1000,
            delay: 250,
            scaleX: 1,
            scaleY: 1
        });
        this.input.on('pointerdown',function(pointer){
            this.tweens.add({
                targets: this.chara,
                ease: 'power1',
                duration: 150,
                y: this.chara.y - 100
            });
        },this);
    },
    update: function () {
        if (this.isGameRunning === true) {
            this.chara.y += 10;
    
            const groundY = 768 / 2 + 128;
    
            if (this.chara.y >= groundY) {
                this.chara.y = groundY;
            }

           
        }
    }
    
});