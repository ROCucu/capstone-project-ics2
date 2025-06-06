namespace SpriteKind {
    export const Boss = SpriteKind.create()
    export const orbs = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    info.changeLifeBy(2)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Can`, mySprite, 0, -100)
})
function Improved_Shop_Creator (myLocation: tiles.Location) {
    Random = randint(0, 30)
    if (Random < 14) {
        tiles.setTileAt(tiles.getTileLocation(myLocation.column + 5, myLocation.row - 1), assets.tile`myTile`)
    } else if (Random < 21) {
        tiles.setTileAt(tiles.getTileLocation(myLocation.column + 5, myLocation.row - 1), assets.tile`myTile0`)
    } else if (Random < 28) {
        tiles.setTileAt(tiles.getTileLocation(myLocation.column + 5, myLocation.row - 1), assets.tile`myTile3`)
    } else {
        tiles.setTileAt(tiles.getTileLocation(myLocation.column + 5, myLocation.row - 1), assets.tile`myTile5`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    info.changeLifeBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += -80
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite, otherSprite) {
    otherSprite.hit(1)
sprites.destroy(sprite)
})
sprites.onDestroyed(SpriteKind.Boss, function (sprite) {
    info.changeScoreBy(10)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    info.changeLifeBy(4)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles0)
    speed += 5
})
scene.onHitWall(SpriteKind.orbs, function (sprite, location) {
    sprites.destroy(sprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    info.changeLifeBy(6)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
info.onLifeZero(function () {
    game.gameOver(false)
    game.setGameOverScoringType(game.ScoringType.HighScore)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchUp, function (sprite, location) {
    stop += 1
    Mover += 50
    Improved_Shop_Creator(location)
    mySprite.setVelocity(0, 0)
    controller.moveSprite(mySprite, 100, 0)
    tiles.setTileAt(location, sprites.dungeon.purpleOuterWest0)
    tiles.setWallAt(location, true)
    tiles.setWallAt(location.getNeighboringLocation(CollisionDirection.Top), true)
    tiles.setWallAt(location.getNeighboringLocation(CollisionDirection.Bottom), true)
    tiles.placeOnTile(mySprite, location.getNeighboringLocation(CollisionDirection.Right))
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
let stop = 0
let Random = 0
let projectile: Sprite = null
let mySprite: Sprite = null
let Mover = 1
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
    if (stop == 0) {
        mySprite.vx = speed
    }
    mySprite.vy += 3
    boss.setPosition(mySprite.x, mySprite.y - 60 * Mover)
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
