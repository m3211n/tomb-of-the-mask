controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, -500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`empty`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`completed`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(-500, 0)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(500, 0)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, 500)
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`empty`, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
assets.animation`myAnim`,
500,
true
)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 4))
