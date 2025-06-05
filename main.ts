namespace SpriteKind {
    export const Boss = SpriteKind.create()
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
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles0)
    speed += 5
})
let projectile: Sprite = null
let mySprite: Sprite = null
let speed = 60
mySprite = sprites.create(assets.image`Player`, SpriteKind.Player)
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
})
