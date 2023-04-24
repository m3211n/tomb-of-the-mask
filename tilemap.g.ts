// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile17 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile22 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile18 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile19 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile20 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile21 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile24 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile23 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a000700020c0101010101010b020c08020202020202090b0602020404020202020506020204040202020205060202020202020a030e0d070202020202050202020d03030303030e0202`, img`
. 2 2 2 2 2 2 2 2 . 
2 2 . . . . . . 2 2 
2 . . 2 2 . . . . 2 
2 . . 2 2 . . . . 2 
2 . . . . . . 2 2 2 
2 2 . . . . . 2 . . 
. 2 2 2 2 2 2 2 . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile7,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile22,myTiles.tile23,myTiles.tile24], TileScale.Sixteen);
            case "leve0":
            case "level2":return tiles.createTilemap(hex`0a000a000702020202020202020a05010101010101010104050109030303030601040501040101010105010405010401010101050104050104010101010501040c030b0101010105010407020202020202080104050101010101010101040c03030303030303030b`, img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . 2 2 2 2 2 2 . 2 
2 . 2 . . . . 2 . 2 
2 . 2 . . . . 2 . 2 
2 . 2 . . . . 2 . 2 
2 2 2 . . . . 2 . 2 
2 2 2 2 2 2 2 2 . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile1,myTiles.tile7,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile22,myTiles.tile18,myTiles.tile20,myTiles.tile21,myTiles.tile24,myTiles.tile23], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "empty":
            case "tile2":return tile2;
            case "myTile":
            case "tile14":return tile14;
            case "trap":
            case "tile3":return tile3;
            case "wall0":
            case "tile1":return tile1;
            case "wall5":
            case "tile7":return tile7;
            case "wall12":
            case "tile15":return tile15;
            case "wall13":
            case "tile16":return tile16;
            case "wall14":
            case "tile17":return tile17;
            case "wall19":
            case "tile22":return tile22;
            case "wall15":
            case "tile18":return tile18;
            case "wall16":
            case "tile19":return tile19;
            case "wall17":
            case "tile20":return tile20;
            case "wall18":
            case "tile21":return tile21;
            case "wall21":
            case "tile24":return tile24;
            case "wall20":
            case "tile23":return tile23;
            case "completed":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
