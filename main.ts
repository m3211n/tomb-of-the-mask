controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, -500)
    animation.runImageAnimation(
    mySprite,
    assets.animation`hero_up`,
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`empty`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`completed`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(-500, 0)
    animation.runImageAnimation(
    mySprite,
    assets.animation`hero_left`,
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(500, 0)
    animation.runImageAnimation(
    mySprite,
    assets.animation`hero_right`,
    500,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, 500)
    animation.runImageAnimation(
    mySprite,
    assets.animation`hero_down`,
    200,
    true
    )
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`empty`, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
assets.animation`hero_right`,
500,
true
)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 4))
