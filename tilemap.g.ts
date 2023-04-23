// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level0":
            case "level1":return tiles.createTilemap(hex`0a000700020c01010101010103020c0d02020202020205030a02020e0e02020202040a02020e0e02020202040a020202020202080706090b020202020204020202090707070707060202`, img`
. 2 2 2 2 2 2 2 2 . 
2 2 . . . . . . 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . 2 2 2 
2 2 . . . . . 2 . . 
. 2 2 2 2 2 2 2 . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "empty":
            case "tile2":return tile2;
            case "wall0":
            case "tile1":return tile1;
            case "wall1":
            case "tile3":return tile3;
            case "wall2":
            case "tile4":return tile4;
            case "wall3":
            case "tile5":return tile5;
            case "wall4":
            case "tile6":return tile6;
            case "wall5":
            case "tile7":return tile7;
            case "wall6":
            case "tile8":return tile8;
            case "wall7":
            case "tile9":return tile9;
            case "wall8":
            case "tile10":return tile10;
            case "wall9":
            case "tile11":return tile11;
            case "wall10":
            case "tile12":return tile12;
            case "wall11":
            case "tile13":return tile13;
            case "myTile":
            case "tile14":return tile14;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
