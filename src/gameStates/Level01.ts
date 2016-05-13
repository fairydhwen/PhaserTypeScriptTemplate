module $safeprojectname$.Client {

    export class Level01 extends Phaser.State {

        background: Phaser.Sprite;
        music: Phaser.Sound;
        player: Player;

        create() {
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.background = this.add.sprite(0, 0, 'level01-sprites','background');
            this.player = new Player(this.game, this.world.centerX, this.world.centerX);
            this.player.anchor.setTo(0, 5);
        }

    }

}