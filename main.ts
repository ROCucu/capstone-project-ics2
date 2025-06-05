namespace SpriteKind {
    export const Boss = SpriteKind.create()
    export const orbs = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Can`, mySprite, 0, -100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += -80
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite, otherSprite: Boss) {
    otherSprite.hit(1)
sprites.destroy(sprite)
})
sprites.onDestroyed(SpriteKind.Boss, function (sprite) {
    info.changeScoreBy(10)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles0)
    speed += 5
})
scene.onHitWall(SpriteKind.orbs, function (sprite, location) {
    sprites.destroy(sprite)
})
info.onLifeZero(function () {
    game.gameOver(false)
    game.setGameOverScoringType(game.ScoringType.HighScore)
})
sprites.onOverlap(SpriteKind.orbs, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.orbs, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprites.destroy(sprite)
})
let mySprite2: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
let Boss_Checker = 1
let speed = 60
mySprite = sprites.create(assets.image`Player`, SpriteKind.Player)
info.setLife(3)
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundColor(9)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 17))
class Boss extends sprites.ExtendableSprite{
    health = 10

    hit(damage: number): void {
        this.health -= damage
        if  (this.health <= 0){
            sprites.destroy(boss)
        }
    }
    constructor(image: Image, SpriteKind: number){
        super(image,SpriteKind)
        this.health = 10
    }
}
let boss = new Boss(assets.image`x`,SpriteKind.Boss)
game.onUpdateInterval(10, function () {
    mySprite.vy += 3
    mySprite.vx = speed
    boss.setPosition(mySprite.x, mySprite.y - 60)
    info.changeScoreBy(0.001)
})
game.onUpdateInterval(3000, function () {
    if (Boss_Checker == 1) {
        for (let index = 0; index < 3; index++) {
            mySprite2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 2 . . . . . . . . 
                . . . 2 2 2 . 2 2 2 . . . . . . 
                . 2 2 2 2 2 2 2 . 2 2 . . . . . 
                . 2 2 . 2 2 2 2 2 2 2 . . . . . 
                . 2 . . 2 2 2 2 2 2 2 . . . . . 
                2 2 . 2 2 2 . 2 2 2 2 . . . . . 
                2 . 2 2 2 2 . 2 2 . 2 . . . . . 
                2 . 2 2 2 2 2 2 2 2 . . . . . . 
                . 2 2 2 2 2 2 2 2 . . . . . . . 
                . . 2 2 2 2 2 2 2 . . . . . . . 
                . . 2 2 2 2 2 2 . . . . . . . . 
                . . . 2 . 2 . . . . . . . . . . 
                . . . . 2 . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.orbs)
            mySprite2.setPosition(boss.x, boss.y)
            mySprite2.setVelocity(randint(-10, 10), randint(50, 70))
        }
    }
})
