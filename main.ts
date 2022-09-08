namespace SpriteKind {
    export const dandrousProjectile = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
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
    laser = sprites.createProjectileFromSprite(img`
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
    laser.setKind(SpriteKind.Projectile)
    music.pewPew.play()
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
let astroids: Sprite = null
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
game.showLongText("shoot torpedos with enter and shoot lasers with spacebar", DialogLayout.Center)
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
effects.starField.startScreenEffect()
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
controller.moveSprite(spaceship, 100, 0)
spaceship.setStayInScreen(true)
game.onUpdateInterval(1000, function () {
    astroids = sprites.createProjectileFromSide(astroid_list._pickRandom(), 0, 50)
    astroids.x = randint(0, scene.screenWidth())
    astroids.setKind(SpriteKind.Enemy)
})
forever(function () {
    music.playMelody("C5 G C5 B G C5 F G ", 120)
})
forever(function () {
    if (info.score() == 40) {
        game.over(true, effects.confetti)
    }
})
