var sceneMenu = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function () {
    Phaser.Scene.call(this, { "key": "scenemenu" });
  },

  init: function () {},

  preload: function () {
    //harus load gambar dulu biar bisa dipake
    this.load.image("bg_start", "assets/images/bg_start.png");
    this.load.image("btn_play", "assets/images/btn_play.png");
    this.load.image("title_game", "assets/images/title_game.png");
  },

  create: function () {
    //memunculkan gambar yg telah di load

    //menambahkan background pada koor 1280 /2 , 768 /2
    this.add.image(1280 / 2, 768 / 2, "bg_start");

    this.tittleGame = this.add.image(1280 / 2, 200, "title_game");
    this.tittleGame.setDepth(10);

    var btnPlay = this.add.image(1280 / 2, 768 / 2 + 75, "btn_play").setInteractive();
    //
    
    this.tittleGame.y -= 384;
    var diz = this;
    this.tweens.add({
        targets: diz.tittleGame,
        ease: 'bounce.easeOut',
        duration: 1000,
        delay: 250,
        y: 200
    });


    btnPlay.setScale(0);
    this.tweens.add({
        targets: btnPlay,
        ease: 'Back',
        duration: 500,
        delay: 750,
        scaleX: 1,
        scaleY: 1
    });

    this.tittleGame.setScale(0);
    this.tweens.add({
        targets: this.tittleGame,
        ease: 'Elastic',
        duration: 3000,
        delay: 1000,
        scaleX: 1,
        scaleY: 1
    });

    this.input.on('gameobjectdown',function(pointer,gameObject){
        console.log("Kepencet");
        if(gameObject === btnPlay){
            this.tweens.add({
                targets: btnPlay,
                ease: 'Back.easeIn',
                duration: 500,
                scaleX: 10,
                scaleY: 10,});
                
                this.time.delayedCall(600, function(){
                this.scene.start('scenemenu')},[], this);
                
                btnPlay.setDepth(1);
                this.tittleGame.setDepth(0);



    }},this);

},

  update: function () {
    //
  },
});
