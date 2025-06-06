namespace SpriteKind {
    export const Boss = SpriteKind.create()
    export const orbs = SpriteKind.create()
    export const Friendly = SpriteKind.create()
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
function EnemyAlly_Spawn_Places () {
    for (let index2 = 0; index2 <= tiles.tilemapColumns(); index2++) {
        for (let index = 0; index <= tiles.tilemapRows(); index++) {
            if (TileDecider == 1) {
                if (tiles.tileIs(tiles.getTileLocation(index2, index), assets.tile`myTile8`)) {
                    mySprite3 = sprites.create(assets.image`Fighter`, SpriteKind.Enemy)
                    mySprite3.setVelocity(randint(-20, 20), 50)
                    tiles.placeOnTile(mySprite3, tiles.getTileLocation(index2, index))
                    tiles.setTileAt(tiles.getTileLocation(index2, index), assets.tile`myTile6`)
                }
            } else {
                if (tiles.tileIs(tiles.getTileLocation(index2, index), assets.tile`myTile7`)) {
                    RandomFriendly = randint(1, 4)
                    if (RandomFriendly == 1) {
                        mySprite4 = sprites.create(img`
                            . f f f . f f f f . f f f . 
                            f f f f f c c c c f f f f f 
                            f f f f b c c c c b f f f f 
                            f f f c 3 c c c c 3 c f f f 
                            . f 3 3 c c c c c c 3 3 f . 
                            . f c c c c 4 4 c c c c f . 
                            . f f c c 4 4 4 4 c c f f . 
                            . f f f b f 4 4 f b f f f . 
                            . f f 4 1 f d d f 1 4 f f . 
                            . . f f d d d d d d f f . . 
                            . . e f e 4 4 4 4 e f e . . 
                            . e 4 f b 3 3 3 3 b f 4 e . 
                            . 4 d f 3 3 3 3 3 3 c d 4 . 
                            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                            . . . . f f f f f f . . . . 
                            . . . . f f . . f f . . . . 
                            `, SpriteKind.Friendly)
                    } else if (RandomFriendly == 2) {
                        mySprite4 = sprites.create(img`
                            . . . . f f f f . . . . . 
                            . . f f f f f f f f . . . 
                            . f f f f f f c f f f . . 
                            f f f f f f c c f f f c . 
                            f f f c f f f f f f f c . 
                            c c c f f f e e f f c c . 
                            f f f f f e e f f c c f . 
                            f f f b f e e f b f f f . 
                            . f 4 1 f 4 4 f 1 4 f . . 
                            . f e 4 4 4 4 4 4 e f . . 
                            . f f f e e e e f f f . . 
                            f e f b 7 7 7 7 b f e f . 
                            e 4 f 7 7 7 7 7 7 f 4 e . 
                            e e f 6 6 6 6 6 6 f e e . 
                            . . . f f f f f f . . . . 
                            . . . f f . . f f . . . . 
                            `, SpriteKind.Friendly)
                    } else if (RandomFriendly == 3) {
                        mySprite4 = sprites.create(img`
                            . . . . f f f f . . . . 
                            . . f f e e e e f f . . 
                            . f f e e e e e e f f . 
                            f f f f 4 e e e f f f f 
                            f f f 4 4 4 e e f f f f 
                            f f f 4 4 4 4 e e f f f 
                            f 4 e 4 4 4 4 4 4 e 4 f 
                            f 4 4 f f 4 4 f f 4 4 f 
                            f e 4 d d d d d d 4 e f 
                            . f e d d b b d d e f . 
                            . f f e 4 4 4 4 e f f . 
                            e 4 f b 1 1 1 1 b f 4 e 
                            4 d f 1 1 1 1 1 1 f d 4 
                            4 4 f 6 6 6 6 6 6 f 4 4 
                            . . . f f f f f f . . . 
                            . . . f f . . f f . . . 
                            `, SpriteKind.Friendly)
                    } else if (RandomFriendly == 4) {
                        mySprite4 = sprites.create(img`
                            . . . . . f f f f . . . . . 
                            . . . f f 5 5 5 5 f f . . . 
                            . . f 5 5 5 5 5 5 5 5 f . . 
                            . f 5 5 5 5 5 5 5 5 5 5 f . 
                            . f 5 5 5 d b b d 5 5 5 f . 
                            f 5 5 5 b 4 4 4 4 b 5 5 5 f 
                            f 5 5 c c 4 4 4 4 c c 5 5 f 
                            f b b f b f 4 4 f b f b b f 
                            f b b 4 1 f d d f 1 4 b b f 
                            . f b f d d d d d d f b f . 
                            . f e f e 4 4 4 4 e f e f . 
                            . e 4 f 6 9 9 9 9 6 f 4 e . 
                            . 4 d c 9 9 9 9 9 9 c d 4 . 
                            . 4 f b 3 b 3 b 3 b b f 4 . 
                            . . f f 3 b 3 b 3 3 f f . . 
                            . . . . f f b b f f . . . . 
                            `, SpriteKind.Friendly)
                    }
                    mySprite4.setVelocity(randint(-20, 20), 50)
                    tiles.placeOnTile(mySprite4, tiles.getTileLocation(index2, index))
                    tiles.setTileAt(tiles.getTileLocation(index2, index), assets.tile`myTile6`)
                }
            }
        }
    }
}
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
let mySprite4: Sprite = null
let RandomFriendly = 0
let mySprite3: Sprite = null
let Random = 0
let projectile: Sprite = null
let TileDecider = 0
let mySprite: Sprite = null
let Mover = 1
let Boss_Checker = 1
let speed = 60
mySprite = sprites.create(assets.image`Player`, SpriteKind.Player)
info.setLife(3)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles0)
scene.setBackgroundColor(9)
scene.cameraFollowSprite(mySprite)
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
TileDecider = randint(1, 2)
if (TileDecider == 1) {
    tiles.replaceAllTiles(sprites.dungeon.floorLight1, assets.tile`myTile8`)
    EnemyAlly_Spawn_Places()
} else {
    tiles.replaceAllTiles(sprites.dungeon.floorLight1, assets.tile`myTile7`)
    EnemyAlly_Spawn_Places()
}
game.onUpdateInterval(10, function () {
    if (stop == 0) {
        mySprite.vx = speed
    }
    mySprite.vy += 3
    boss.setPosition(mySprite.x, mySprite.y - 144 * Mover)
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
