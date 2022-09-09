namespace SpriteKind {
    export const dandrousProjectile = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() >= 50) {
        laser = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 7 . . . . . . 
            . . . . . . . . . 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 5 . . . . . . 
            . . . . . . . . 7 5 . . . . . . 
            `, spaceship, 0, -50)
        laser.setKind(SpriteKind.Projectile)
        music.zapped.play()
        pause(1000)
        laser2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            7 7 7 7 7 7 7 . . . . . . . . . 
            5 5 7 7 7 7 7 7 7 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, laser, 50, 0)
        laser3 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 7 7 7 7 7 7 7 5 5 
            . . . . . . . . . 7 7 7 7 7 7 7 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, laser, -50, 0)
        laser2.setKind(SpriteKind.Projectile)
        laser3.setKind(SpriteKind.Projectile)
        music.zapped.play()
        pause(500)
        laser_4 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 7 . . . . . . 
            . . . . . . . . . 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 5 . . . . . . 
            . . . . . . . . 7 5 . . . . . . 
            `, laser2, 0, 50)
        laser5 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 7 . . . . . . 
            . . . . . . . . . 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 5 . . . . . . 
            . . . . . . . . 7 5 . . . . . . 
            `, laser2, 0, -50)
        laser6 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 7 . . . . . . 
            . . . . . . . . . 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 5 . . . . . . 
            . . . . . . . . 7 5 . . . . . . 
            `, laser3, 0, -50)
        laser7 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 7 . . . . . . 
            . . . . . . . . . 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 7 . . . . . . 
            . . . . . . . . 7 5 . . . . . . 
            . . . . . . . . 7 5 . . . . . . 
            `, laser3, 0, 50)
        laser_4.setKind(SpriteKind.dandrousProjectile)
        laser5.setKind(SpriteKind.dandrousProjectile)
        laser6.setKind(SpriteKind.dandrousProjectile)
        laser7.setKind(SpriteKind.dandrousProjectile)
        music.zapped.play()
    }
})
sprites.onOverlap(SpriteKind.dandrousProjectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 500)
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.dandrousProjectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    laser546 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 7 7 . . . . . . 
        . . . . . . . . 7 7 . . . . . . 
        . . . . . . . . 7 7 . . . . . . 
        . . . . . . . . 7 7 . . . . . . 
        . . . . . . . . 7 7 . . . . . . 
        . . . . . . . . 7 7 . . . . . . 
        . . . . . . . . 7 7 . . . . . . 
        `, spaceship, -10, -50)
    laser09856 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 7 7 . . . . . . 
        . . . . . . . . 7 7 . . . . . . 
        . . . . . . . . 7 7 . . . . . . 
        . . . . . . . . 7 7 . . . . . . 
        . . . . . . . . 7 7 . . . . . . 
        . . . . . . . . 7 7 . . . . . . 
        . . . . . . . . 7 7 . . . . . . 
        `, spaceship, 10, -50)
    laser454 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 7 7 . . . . . . 
        . . . . . . . . 7 7 . . . . . . 
        . . . . . . . . 7 7 . . . . . . 
        . . . . . . . . 7 7 . . . . . . 
        . . . . . . . . 7 7 . . . . . . 
        . . . . . . . . 7 7 . . . . . . 
        . . . . . . . . 7 7 . . . . . . 
        `, spaceship, 0, -50)
    laser546.setKind(SpriteKind.Projectile)
    laser09856.setKind(SpriteKind.Projectile)
    laser454.setKind(SpriteKind.Projectile)
    music.pewPew.play()
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    if (info.score() >= 70) {
        l2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . 4 4 4 4 4 . . . . . 
            . . . . . 4 1 5 5 4 . . . . . 
            . . . . . 4 5 5 5 4 . . . . . 
            . . . . . 4 5 5 5 4 . . . . . 
            . . . . . 4 4 4 4 4 . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `, spaceship, -30, -50)
        l = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . 4 4 4 4 4 . . . . . 
            . . . . . 4 1 5 5 4 . . . . . 
            . . . . . 4 5 5 5 4 . . . . . 
            . . . . . 4 5 5 5 4 . . . . . 
            . . . . . 4 4 4 4 4 . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `, spaceship, 30, -50)
        l.setKind(SpriteKind.Projectile)
        l2.setKind(SpriteKind.Projectile)
        music.zapped.play()
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 500)
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let bird: Sprite = null
let astroids: Sprite = null
let l: Sprite = null
let l2: Sprite = null
let laser454: Sprite = null
let laser09856: Sprite = null
let laser546: Sprite = null
let laser7: Sprite = null
let laser6: Sprite = null
let laser5: Sprite = null
let laser_4: Sprite = null
let laser3: Sprite = null
let laser2: Sprite = null
let laser: Sprite = null
let spaceship: Sprite = null
game.setDialogFrame(img`
    ffffffffffffffffffffffffffffffffffffffffffffffff
    f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1ff
    ffffffffffffffffffffffffffffffffffffffffffffffff
    f1fffffffffffffffffffffffffffffffffffffffffff1ff
    ffffffffffffffffffffffffffffffffffffffffffffffff
    f1fffffffffffffffffffffffffffffffffffffffffff1ff
    ffffffffffffffffff5ffffffffffffffffffffff5ffffff
    f1fffffffffffffffffffff5fffffff5fffffffffffff1ff
    fffffffffffffffffffffffffffffffffff5ffffffffffff
    f1fffff5fffffffffffffffffffffffffffffffffffff1ff
    ffffffffffffffffffffffffffffffffffffffffffffffff
    f1fffffffffffffffffffffffffffffffffffffffffff1ff
    ffffffffffffffffffffffffffffffffffffffffffffffff
    f1fffffffffffffffffffffffffffffffffffffffffff1ff
    ffffffffffffffffffffffffffffffffffffff5fffffffff
    f1fffffffffffffff5fffffffffff5fffffffffffffff1ff
    ffffffff5fffffffffffffffffffffffffffffffffffffff
    f1fffffffffffffffffffffffffffffffffffffffffff1ff
    ffffffffffffffffffffffffffffffffffffffffffffffff
    f1ffffffffffffffffffffffff5fffffff5ffffffffff1ff
    fffffffffffffffffff5ffffffffffffffffffffffffffff
    f1fffffffffffffffffffffffffffffffffffffffffff1ff
    ffffffffffffffffffffffffffffffffffffff5fffffffff
    f1ffffffff5ffffffffffffffffffffffffffffffffff1ff
    ffffffffffffffffff5fffffff5fffffff5fffffffffffff
    f1fffffffffffffffffffffffffffffffffffffffffff1ff
    ffffff5ffffffffffffffffffffffffffffffffff5ffffff
    f1fffffffffffffffffffffffffffffffffffffffffff1ff
    ffffffffffffffffffffffffffffffffffffffffffffffff
    f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1ff
    ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff
    ffbffffffffffffffffffffffffffffffffffbbfffffffff
    fbbbfffffffffffffffffffffffffffffffffbbfffffffff
    fbbbffffffffffbbfffffffffffffffffffffbbffffbbfff
    fb1bfffffffffbbbbbfffffffffffbbbbbfffbbbfffbbbff
    fbbbfffbbbfffb111bffffbbbbbffb111bffbbbbfffbbbff
    fb1bffbbbbbffbbbbbffffbbbbbffbbbbbffb1bbfffbbbff
    fbbbffb1b1bffb111bfbbfb1bbbffb111bffbbbbbbbbbbff
    fb1bffbbbbbffbbbbbfbbfbbb1bffbbbbbbbbb1bbb111bbb
    bbbbffb1b1bffb111bfbbfbbbbbffb111bbbbbbbbbbbbbbb
    bb1bfbbbbbbbbbbbbbfbbfb1bbbbbbbbbbbbb1bbbb111bbb
    bbbbfbb1b1bbbb111bbbbbbbb1bbbb111bbbbbbbbbbbbbbb
    bb1bfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbb111bbb
    bbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbb1bbbb111bbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..
    `)
game.setDialogTextColor(2)
game.splash("this game is a bullet hell game so don't get surprised if there is so many projectiles! ")
game.showLongText("shoot torpedos with enter and shoot lasers with spacebar and hold spacebar to shoot a beam", DialogLayout.Center)
game.splash("you can shoot beams when you have 70 points and shoot torpedos when you have 50 points")
let astroid_list = [
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c c . . . . . . 
    . . . . . . a b a a . . . . . . 
    . . . . . c b a f c a c . . . . 
    . . . . c b b b f f a c c . . . 
    . . . . b b f a b b a a c . . . 
    . . . . c b f f b a f c a . . . 
    . . . . . c a a c b b a . . . . 
    . . . . . . c c c c . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c . . . . . . 
    . . . . . c a a a a . . . . . . 
    . . . . . a a f f b a . . . . . 
    . . . . c a b f f c b . . . . . 
    . . . . c b b b a f c b . . . . 
    . . . . c b a c a b b b . . . . 
    . . . . . b b f f a a c . . . . 
    . . . . . . a a b b c . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c . . . . . . . 
    . . . . c a a a a . . . . . . . 
    . . . . a a f f b a . . . . . . 
    . . . c a b f f c b . . . . . . 
    . . . c b b b a f c b . . . . . 
    . . . c b a c a b b b . . . . . 
    . . . . b b f f a a c . . . . . 
    . . . . . a a b b c . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . c a a a c . . . . . . . 
    . . . c c f a b b c . . . . . . 
    . . . b f f b f a a . . . . . . 
    . . . b b a b f f a . . . . . . 
    . . . c b f b b a c . . . . . . 
    . . . . b a f c c . . . . . . . 
    . . . . . b b c . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . c c 8 . . . . 
    . . . . . . 8 c c c f 8 c c . . 
    . . . c c 8 8 f c a f f f c c . 
    . . c c c f f f c a a f f c c c 
    8 c c c f f f f c c a a c 8 c c 
    c c c b f f f 8 a c c a a a c c 
    c a a b b 8 a b c c c c c c c c 
    a f c a a b b a c c c c c f f c 
    a 8 f c a a c c a c a c f f f c 
    c a 8 a a c c c c a a f f f 8 a 
    . a c a a c f f a a b 8 f f c a 
    . . c c b a f f f a b b c c 6 c 
    . . . c b b a f f 6 6 a b 6 c . 
    . . . c c b b b 6 6 a c c c c . 
    . . . . c c a b b c c c . . . . 
    . . . . . c c c c c c . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . c c c c . . 
    . c c c c c . c c c c c f c c . 
    c c a c c c c c 8 f f c f f c c 
    c a f a a c c a f f c a a f f c 
    c a 8 f a a c a c c c a a a a c 
    c b c f a a a a a c c c c c c c 
    c b b a a c f 8 a c c c 8 c c c 
    . c b b a b c f a a a 8 8 c c . 
    . . . . a a b b b a a 8 a c . . 
    . . . . c b c a a c c b . . . . 
    . . . . b b c c a b b a . . . . 
    . . . . b b a b a 6 a . . . . . 
    . . . . c b b b 6 6 c . . . . . 
    . . . . . c a 6 6 b c . . . . . 
    . . . . . . . c c c . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . c b a c . . . . . . 
    . . . . c c b c f a c . . . . . 
    . . . . a f b b b a c . . . . . 
    . . . . a f f b a f c c . . . . 
    . . . . c b b a f f c . . . . . 
    . . . . . b b a f a . . . . . . 
    . . . . . . c b b . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . c c . . . . . . . . 
    . . . . c a f b c . . . . . . . 
    . . . . b f f b c c . . . . . . 
    . . . a a f b a b a c . . . . . 
    . . . c a c b b f f b . . . . . 
    . . . . b f f b f a b . . . . . 
    . . . . a f f b b b a . . . . . 
    . . . . . a b b c c . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . c c c c . . . . 
    . . . . c c c c c c c c c . . . 
    . . . c f c c a a a a c a c . . 
    . . c c f f f f a a a c a a c . 
    . . c c a f f c a a f f f a a c 
    . . c c a a a a b c f f f a a c 
    . c c c c a c c b a f c a a c c 
    c a f f c c c a b b 6 b b b c c 
    c a f f f f c c c 6 b b b a a c 
    c a a c f f c a 6 6 b b b a a c 
    c c b a a a a b 6 b b a b b a . 
    . c c b b b b b b b a c c b a . 
    . . c c c b c c c b a a b c . . 
    . . . . c b a c c b b b c . . . 
    . . . . c b b a a 6 b c . . . . 
    . . . . . . b 6 6 c c . . . . . 
    `,
img`
    . . . . . . . c c c a c . . . . 
    . . c c b b b a c a a a c . . . 
    . c c a b a c b a a a b c c . . 
    . c a b c f f f b a b b b a . . 
    . c a c f f f 8 a b b b b b a . 
    . c a 8 f f 8 c a b b b b b a . 
    c c c a c c c c a b c f a b c c 
    c c a a a c c c a c f f c b b a 
    c c a b 6 a c c a f f c c b b a 
    c a b c 8 6 c c a a a b b c b c 
    c a c f f a c c a f a c c c b . 
    c a 8 f c c b a f f c b c c c . 
    . c b c c c c b f c a b b a c . 
    . . a b b b b b b b b b b b c . 
    . . . c c c c b b b b b c c . . 
    . . . . . . . . c b b c . . . . 
    `,
img`
    . . . . . . c c c . . . . . . . 
    . . . . . a a a c c c . . . . . 
    . . . c a c f a a a a c . . . . 
    . . c a c f f f a f f a c . . . 
    . c c a c c f a a c f f a c . . 
    . a b a a c 6 a a c c f a c c c 
    . a b b b 6 a b b a a c a f f c 
    . . a b b a f f b b a a c f f c 
    c . a a a c c f c b a a c f a c 
    c c a a a c c a a a b b a c a c 
    a c a b b a a 6 a b b 6 b b c . 
    b a c b b b 6 b c . c c a c . . 
    b a c c a b b a c . . . . . . . 
    b b a c a b a a . . . . . . . . 
    a b 6 b b a c . . . . . . . . . 
    . a a b c . . . . . . . . . . . 
    `
]
effects.starField.startScreenEffect(5000)
spaceship = sprites.create(img`
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c 7 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . 8 7 . . . . . . . 
    . . . . . . 8 8 5 6 . . . . . . 
    . . . . . . 8 7 5 6 . . . . . . 
    . . . . . c c c 6 6 6 . . . . . 
    . . . . 8 8 7 7 7 5 6 6 . . . . 
    . . 8 f f f c c 6 6 f f 6 6 . . 
    . 8 8 8 8 6 6 7 7 7 7 5 7 6 6 . 
    8 8 8 8 8 8 6 6 7 7 7 5 7 7 6 6 
    8 8 8 8 8 8 6 6 7 7 7 7 5 7 6 6 
    `, SpriteKind.Player)
spaceship.setPosition(77, 111)
controller.moveSprite(spaceship, 100, 100)
spaceship.setStayInScreen(true)
forever(function () {
    for (let index = 0; index < 8; index++) {
        music.playMelody("C5 G C5 D G C5 F G ", 500)
        music.playMelody("F E - G A E D G ", 500)
    }
    music.playMelody("G A B - F G A D ", 500)
    music.playMelody("F G A B D E A D ", 500)
})
forever(function () {
    if (info.score() == 200) {
        game.over(true, effects.confetti)
    }
})
forever(function () {
    if (info.score() == 40) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
    } else if (info.score() == 80) {
        scene.setBackgroundImage(img`
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            `)
        effects.clouds.startScreenEffect(5000)
    } else if (info.score() == 120) {
        scene.setBackgroundImage(img`
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888cccc888888888888888888888888888888888888888888888888888888888888888888888888888888cccc8888888888888888888888888888888888888888888888888888
            888888888888888888888cccccc8888888888888888888888888888888888888888888888888888888888888888888888888888cccccc888888888888888888888888888888888888888888888888888
            888888888888888888888cccccc88cc888888888888888888888888888888888888888888888888888888888888888888888888cccccc88cc88888888888888888888888888888888888888888888888
            888888888888888888ccccccccc8ccccc8888888888888888888888888888888888888888888888888888888888888888888ccccccccc8ccccc888888888888888888888888888888888888888888888
            88888888888888888cccccccccccccccc888888888888888888888888888888888888888888888888888888888888888888cccccccccccccccc888888888888888888888888888888888888888888888
            8888888888888888ccccccccccccccccccc888888888888888888888888888888888888888888888888888888888888888ccccccccccccccccccc8888888888888888888888888888888888888888888
            8888888888888888cccccccccccccccccccc88888888888888888888888888888888888888888888888888888888888888cccccccccccccccccccc888888888888888888888888888888888888888888
            88888888888888888ccccccccccccccccccc888cc8888888888888888888888888888888888888888888888888888888888ccccccccccccccccccc888cc8888888888888888888888888888888888888
            8888888888888cccc8cccccccccccccccccc88ccccc8888888888888888888888888888888888888888888888888888cccc8cccccccccccccccccc88ccccc88888888888888888888888888888888888
            888888888888cccccc8cccccccccccccccc888ccccc888888888888888888888888888888888888888888888888888cccccc8cccccccccccccccc888ccccc88888888888888888888888888888888888
            888888888888cccccccccccccccccccccc8ccccccccc88888888888888888888888888888888888888888888888888cccccccccccccccccccccc8ccccccccc8888888888888888888888888888888888
            888888888888cccccccccccccccccccccccccccccccc88888888888888888888888888888888888888888888888888cccccccccccccccccccccccccccccccc8888888888888888888888888888888888
            8888888888888ccccccccccccccccccccccccccccccc888888888888888888888888888888888888888888888888888ccccccccccccccccccccccccccccccc8888888888888888888888888888888888
            88ccc8888cccc8ccccccccccccccccccccccccccccc88cc8888888888888cccc88888888888888888888ccc8888cccc8ccccccccccccccccccccccccccccc88cc8888888888888cccc88888888888888
            8ccccc88ccccccccccccccccccccccccccccccccccc8cccc88888888888cccccc888888888888888888ccccc88ccccccccccccccccccccccccccccccccccc8cccc88888888888cccccc8888888888888
            8ccccc8cccccccccccccccccccccccccccccccccccc8cccc88888888888cccccc8ccc88888888888888ccccc8cccccccccccccccccccccccccccccccccccc8cccc88888888888cccccc8ccc888888888
            88cccccccccccccccccccccccccccccccccccccccccccccc8888888888888ccccccccc88888888888888cccccccccccccccccccccccccccccccccccccccccccccc8888888888888ccccccccc88888888
            8cccccccccccccccccccccccccccccccccccccccccccccc888888888cccc8ccccccccc8888888888888cccccccccccccccccccccccccccccccccccccccccccccc888888888cccc8ccccccccc88888888
            cccccccccccccccccccccccccccccccccccccccccccccccc8888888cccccccccccccc8888888888188cccccccccbbccccccccccccccccccccccccccccccccccccc8888888cccccccccccccc888888888
            ccccccccccccccccccccccccccccccccccccccccccccccccc8ccc88cccccccccccccccccc888888bbbcccccccccbbbccccccccccccccccccccccccccccccccccccc8ccc88cccccccccccccccccc88888
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88881bbbcccccccccbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc888bbbbbbbccccccbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8888
            cccccccccccccccccccccccccccccccccccccccccbbbbbbbbbcccccccccccccccccccccccccccbbbbbbbccccccbbbbbccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccbbbbbbbbbcccccccccccccccccccccccccccbbbbbbbccccccbbbbbccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbccccccccccccc
            cccccccccccccccccccbbbcccccccccccccccccccb11bbbbbbcccccccccccccccccccccccccccb11bbbbcccccbbbbbbbccccccccccccccccccccbbcccccccccccccccccccbb1b1bbbbbccccccccccccc
            ccccccccccccccccccbbbbbccccccccccccccccccbbbbbbb1bcccccccccccccccccccccccccccbbbbbbbcccccbbbbbbbcccccccccccccccccccbbbbccccccccccccccccccbbbbbb11bbccccccccccccc
            cccccccccccccccccbbbbbbccccccccccccccccccbbbbbbbbbccccccccccbccccccccbbbbbcccb1bbbbbcccccbbbbbbbcccccccccccccccccbbbbbbccccccccccccccccccbbbbbbbbbbccccccccccccc
            cccccccccccccccccbbb1bccccccbccccccccccccbbbbbbbbbcccccccccbbccccccccbbbbbcccbbbbbbbcccccbbbbbbbcccccccccccccccccbbb1bccccccbbcccccccccccbbbb1bbbbbccccccccbbccc
            cccccccccccccccccbbbbbbcccccbccccccccccccbbbbbbb1bcccccccccbbccccccccbbbbbcccbbbbbbbcccccbbbbbbbcccccccccccccccccbbbbbbcccccbbcccccccccccbbbbbbb1bbccccccccbbccc
            ccccccccbbbccccccbb11bcccccbbbcccccccccccbbbbbbbbbccbbbbbbcbbccccccccbbbbbcccbbbbbbbcccccbbbbbbbcccccccccbbccccccbbb1bcccccbbbcccccccccccbbbbbbbbbbcbbbbbbbbbccc
            bcbbccccbbbbbbbbbbb1bbbcccbbbbbccccccccccbbbbbbb1bccb11bbbcbbcccccccccbb1bbccbbbbbbbcccbbbbbbbbbbcbbccccbbbbbbbbbbbbb1bccccbbbbccccccccccbbbbbb11bbcb11bbbbbbccc
            bbbbcccccb1bb1bbbbbbbbbcccbbbbbccccccccccbbbbbbbbbccbbbb1bcbbccccccccbbbbbbccbb1bbbbcccbbbbbbbbbbbbbccccbb1bbb1bbbbbbbbccccbbbbccccccccccbbbbbbbbbbcbbbb1bbbbccc
            bb1bcccccbbb1111bbbbbbbcccbbbbbccccccccccbbbbbbbbbccbbbb1bbbbccccccccbbbbbbccbbbbbbbcccbbbbbbbbbbb1bccccbbbb1b11bbbbbbbccccbbbbccccccccccbbbbbbbbbbcbbbb1bbbbccc
            bbbbccccbbbbbbbbbbbbbbbbccbbbbbbccbbcbbcbbbbbbbbbbbcb11bbbbbbccccccccbbbbbbccbbbbbbbcccbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbccbbbbbbcccbccbbbbbbbbbbbbbcb11bbbbbbccc
            bb1bccccbbbbbbbbbbbbbbbbccbbbbbbccbbbbbbbbbbbbbbbbbcbbbbbbbbbccbccbccbbbbbbccbbbbbbbcccbbbbbbbbbbb1bccccbbbbbbbbbbbbbbbbccbbbbbbcccbbbbbbbbbbbbbbbbcbbbbbbbbbccc
            bbbbbcbb1b1bbbbbbbbbbbbbccbbbbbbbcbbbb11bbbbbbbbbbbbb11ccbbbbbbbcbbbccbb1bbccbbbbbbbcccbbbbbbbbbbbbbbbcbbb1bbbbbbbbbbbbbccbbbbbbbcccb11bbbbbbcbbbbbbb11cccbbbcbb
            bbbbbcbbbbbbbbbbbbbbbbbbbb1bbbbbbcbbbbbbbbbcccbbbbbbbbbcccbbbbbbcbbbcbbbbbbccbbbbbbbcccbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbccbbbbbbbbbcccbbbcbb
            bbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbcccbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbccbbbbbbbbbcccbbbbbb
            bbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbcccccccbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbcb1bbbbbbcccccccbbbbbcccccbbbbb
            bbbbbcccccccccbbbbbbbbbbbbbbbbbbbcbbbbbbbcccccccbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbcbbbbbbbbcccccccbbbbbcccccbbbbb
            bbbbbcccccccccbbbbbbbbbbbbbbbbbbbcbbbbbbbcccccccbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbcbbbbbbbbcccccccbbbbbcccccbbbbb
            bbbbbcddccccccbbbbbbbbbbbbbbbbbbbcbbbbbbbcddccccbbbbbcccccccbb111bbbbbbbbbbbbbbbccbbbbcbbbbbbbbbbbbbbccdcdcccccbbbbbbbbbbbbbbbbbbcbbbbbbbbcccccccbbbbcccccccc11b
            bbbbbcccccccdcbbbbbbbbbbbbbbbbbbbcbbbbbbbcccccccbbbbbcccccccbbb11bbbbbbbbbbbbbbccccbbbcbbbbbbbbbbbbbbccccccddccbbbbbbbbbbbbbbbbbbcbbbbbbbbcccccccbbbbccccccccbbb
            bbbbbcccccccccbbbbbbbbbbcbbbbbbbbcccccbbbcdcccccbbbbbcccccccbbbbbbbbbbb1bbbbbccccccbbbcbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbccccbbbbcccdcccbbbbccccccccbbb
            bbbbbcccccccccbbbbbbbbbccbbbbbbbbcccccbbbcccccccbbbbbcccccccbb1bbbbbbbbbbbbbbcccdcbbbbbbccbbbbbbbbbbbccccdcccccbbbbbbbbccbbbbbbbbbccccbbbbcccdcccbbbbccccccccb1b
            bbbbbcccccccdcbbbbbbbbbccbbbbbbbbcccccbbbcccccccbbbbbcccccccbb111bbbbbbbbbbbbccccccbbbbbccbbbbbbbbbbbcccccccdccbbbbbbbbccbbbbbbbbccccccbbbcccccccbbbbcccccccc11b
            bbbbbcccccccccbbccccccbccbbbbbbbbcccccbbbcccccccbbbbbcccccccbbbbbbbbbcc1bbbbbcccdcbbbbbcccbbbbbbbbbbbccccccccccbcccccccccbbbbbbbbccccccbbbcccdcccbbbbccccccccbbb
            bbbbbcccccccdcbbcddcccbccbbbbbbbbbccdccbbcccccccbbbccccccccccbccbbbbcccccccccccccdcbbbbccccbbbbbbbbbbccccccddccbcddccccccbbbbbbbbcccccccbbcccccccbbccccccccccccc
            bbbbbcccccccccbbccccdcbccbbbbbbbbccccccbbccdccccbbbcccccccccccccbbbbccdcccdccccccccbbbbccccbbbbbbbbbbccccccccccbccccdccccbbbbbbbbcccccccbbccccdccbbccccccccccccc
            bbbbbcccccccccbbccccdccccbbbbbbbbccccccbbcccccccbbbcccccccccccdcbbbbccccdcddcccccccbbbbccccbbbbbbbbbbccccccccccbccccdccccbbbbbbbbcccccccbbcccccccbbccccccccccccc
            bccbcccccccccccbcddccccccbbbbbbbbccccccbbcccccccbbbcccccccccccccbbbbccccccccccccccccbbccccccbbbcbbcccccccccccccbcddccccccbbbbbbbbcccccccbbcccccccbbccccccccccccc
            cccccccccccccccbcccccccccbbcbbcbbccccccbbcccccccbbbcccccccccccdcbbbbccccccccccccccccbbccccccbbbccccccccccccccccbcccccccccbbbbbcbbcccccccbbcccccccbbccccccccccccc
            ccddcccccccccccccddddcccccccbcccbbccdccbbcccccccbbbcccccccccccccccbcccdcccccccccccccbbcccccccbbbcddccccccccccccccddcdccccbccbcccbcccccccbbcccccccbbccccccccccccc
            ccccccccccccccccccccccccccccbcccbccccccbbcccccccbbbcccccccccccccccbccccccccccccccccccccccccccbcccccccccccccccccccccccccccbccbcccccccccccbbccccdccbbccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccbbbcccccccccccccccbccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbbccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccbccccccccccccccccccccccccccbcdccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccbccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccdcccccccccccccccccccbccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccbccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccc
            ccccccccccccccccccccccccccdddcccccccccccccccccccccbcccccccccccccccbccccccccccccccccccccccccccbcccccccccccccccccccccccccccddcdcdccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccddcccccccccccccccccccccbcccccccccccccccbccccccccccccccccccccccccccbccccccccccccccccccccccccccccccdcdccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccdccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccccdcccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccdddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcdccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccc6cccccccccccccccc6cccccccccccccccccccccc6cccccccccccccccc6cccccccccccccccccccccc6cccccccccccccccc6cccccccccccccccccccccc6cccccccccccccccc6ccccc
            cccccc6ccc66ccccc66cccc6ccc6cccc6c66ccc6cccccc6ccc66ccccc66cccc6ccc6cccc6c66ccc6cccccc6ccc66ccccc66cccc6ccc6cccc6c66ccc6cccccc6ccc66ccccc66cccc6ccc6cccc6c66ccc6
            cc6ccc66c66cc6ccc66ccc66ccc66ccc6cc66c66cc6ccc66c66cc6ccc66ccc66ccc66ccc6cc66c66cc6ccc66c66cc6ccc66ccc66ccc66ccc6cc66c66cc6ccc66c66cc6ccc66ccc66ccc66ccc6cc66c66
            cc66cc66c66cc66ccc66c66cccc66c6c66c6666ccc66cc66c66cc66ccc66c66cccc66c6c66c6666ccc66cc66c66cc66ccc66c66cccc66c6c66c6666ccc66cc66c66cc66ccc66c66cccc66c6c66c6666b
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            `)
    } else {
    	
    }
})
game.onUpdateInterval(100, function () {
    if (info.score() <= 79) {
        astroids = sprites.createProjectileFromSide(astroid_list._pickRandom(), randint(-50, 50), 50)
        astroids.x = randint(0, scene.screenWidth())
        astroids.setKind(SpriteKind.Enemy)
    } else if (info.score() >= 80) {
        bird = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f . . . . . . f . . . . . . 
            . f . f . f f . f . f . . . . . 
            f . . . f f f f . . . f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, randint(-50, 50), 50)
        bird.x = randint(0, scene.screenWidth())
        bird.setKind(SpriteKind.Enemy)
        animation.runImageAnimation(
        bird,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f . . . . . . f . . . . . . 
            . f f f . f f . f f f . . . . . 
            f f . f f f f f f . f f . . . . 
            f . . . f f f f . . . f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f . . . . . . f . . . . . . 
            f f f f . f f . f f f f . . . . 
            f f . f f f f f f . f f . . . . 
            . . . . f f f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            f f f . . . . . . f f f . . . . 
            f f f f . f f . f f f f . . . . 
            . . . f f f f f f . . . . . . . 
            . . . . f f f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            f . . . . . . . . . . f . . . . 
            f f f . . . . . . f f f . . . . 
            . f f f . f f . f f f . . . . . 
            . . . f f f f f f . . . . . . . 
            . . . . f f f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            f f f . . . . . . f f f . . . . 
            f f f f . f f . f f f f . . . . 
            . . . f f f f f f . . . . . . . 
            . . . . f f f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f . . . . . . f . . . . . . 
            f f f f . f f . f f f f . . . . 
            f f . f f f f f f . f f . . . . 
            . . . . f f f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
})
