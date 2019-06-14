import { ClickCodes } from "./input";

export default class Map {
	private ctx: CanvasRenderingContext2D;
	private height: number;//use for npm lib
    private width: number; //use for npm lib
    private dungeon: Array<Array<number>>;
    private tileSize: number;
    private mapTileSize: number;
    public showMiniMap: boolean;
    public miniMapOffset:number[];

	constructor(context:CanvasRenderingContext2D, tileSize:number = 64, mapTileSize:number = 6, showMiniMap:boolean = true, miniMapOffset:number[] = [100,100]) {
        this.ctx = context;
        this.tileSize = tileSize;
        this.mapTileSize = mapTileSize;
        this.showMiniMap = showMiniMap;
        this.miniMapOffset = miniMapOffset;
	}

	public genMap(): Map { //example map - can replace with npm lib: https://www.npmjs.com/package/random-dungeon-generator
		this.dungeon = [
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
			[1,2,2,2,2,2,2,2,2,2,2,1,1,6,6,6,6,6,6,6,6,6,6,6,1,],
			[1,2,2,2,2,2,2,2,2,2,2,1,1,6,6,6,6,6,6,6,6,6,6,6,1,],
			[1,2,2,2,2,2,2,2,2,2,2,1,1,6,6,6,6,6,6,6,6,6,6,6,1,],
			[1,2,2,2,2,2,2,2,2,2,2,1,1,6,6,6,6,6,6,6,6,6,6,6,1,],
			[1,2,2,2,2,2,2,2,2,2,2,1,1,6,6,6,6,6,6,6,6,6,6,6,1,],
			[1,2,2,2,2,2,2,2,2,2,2,1,1,6,6,6,6,6,6,6,6,6,6,6,1,],
			[1,2,2,2,2,2,2,2,2,2,0,0,0,0,6,6,6,6,6,6,0,6,6,6,1,],
			[1,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,0,1,1,0,0,],
			[1,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,0,1,1,1,1,],
			[1,2,2,2,2,2,2,2,2,2,2,1,1,7,7,7,7,7,7,7,0,7,7,7,1,],
			[1,2,2,2,2,2,2,2,2,2,2,1,1,7,7,7,7,7,7,7,7,7,7,7,1,],
			[1,2,2,2,2,2,2,2,2,2,2,1,1,7,7,7,7,7,7,7,7,7,7,7,1,],
			[1,2,2,2,2,2,2,2,2,2,2,1,1,7,7,7,7,7,7,7,7,7,7,7,1,],
			[1,2,2,2,2,2,2,2,2,2,2,1,1,7,7,7,7,7,7,7,7,7,7,7,1,],
			[1,2,2,2,2,2,2,2,2,2,2,1,1,7,7,7,7,7,7,7,7,7,7,7,1,],
			[1,2,2,2,2,2,2,2,2,2,2,1,1,7,7,7,7,7,7,7,7,7,7,7,1,],
			[1,2,2,2,2,2,2,2,0,2,2,1,1,7,7,7,7,7,7,7,7,7,7,7,1,],
			[1,1,1,1,1,1,1,1,0,1,1,1,1,7,7,7,7,7,7,7,7,7,7,7,1,],
			[1,1,1,1,1,1,1,1,0,1,1,1,1,7,7,7,7,7,7,7,7,7,7,7,1,],
			[1,3,3,3,3,3,3,3,0,3,3,1,1,7,7,7,7,7,7,7,7,7,7,7,1,],
			[1,3,3,3,3,3,3,3,3,3,3,1,1,7,7,7,7,7,7,7,7,7,7,7,1,],
			[1,3,3,3,3,3,3,3,3,3,3,1,1,7,7,7,7,7,7,7,7,7,7,7,1,],
			[1,3,3,3,3,3,3,3,3,3,3,1,1,7,7,7,7,7,7,7,7,7,7,7,1,],
			[1,3,3,3,3,3,3,3,3,3,3,1,1,7,7,7,7,7,7,7,7,7,7,7,1,],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,],
        ];
        return this;
    }
    
	public displayMap(): void{

		//big one
		this.dungeon.forEach((arr, index) => arr.forEach((x, i) => {
            //this.ctx.fillStyle = `rgb(${x*30},${x*30},${x*30}, .5)`; //by number
			this.ctx.fillStyle = `rgb(${(x == 1 ? 2 : 5) *30},${(x == 1 ? 2 : 5) *30},${(x == 1 ? 2 : 5) *30}, .5)`;// temp tile coloring
			this.ctx.fillRect(i*this.tileSize, index*this.tileSize, this.tileSize, this.tileSize);
		}));

        //small one
        if (this.showMiniMap)
            this.dungeon.forEach((arr, index) => arr.forEach((x, i) => {
                //this.ctx.fillStyle = `rgb(${x*10},${x*30},${x*30}, .5)`; //by number
                this.ctx.fillStyle = `rgb(${(x == 1 ? 2 : 5) *10},${(x == 1 ? 2 : 5) *30},${(x == 1 ? 2 : 5) *30}, .5)`;// temp tile coloring
                this.ctx.fillRect(i*this.mapTileSize + this.miniMapOffset[0], index*this.mapTileSize + this.miniMapOffset[1], this.mapTileSize, this.mapTileSize);
            }));
    }
    
    public colorTile(clickCoords: ClickCodes):void {
        console.log(clickCoords);
        this.ctx.fillStyle = `rgb(200, 0, 0, .5)`;
        this.ctx.fillRect(clickCoords.X - clickCoords.X % this.tileSize, clickCoords.Y - clickCoords.Y % this.tileSize, this.tileSize, this.tileSize);
        
        if (this.showMiniMap)
            this.ctx.fillRect(
                ((clickCoords.X - clickCoords.X % this.tileSize) / this.tileSize) * this.mapTileSize + this.miniMapOffset[0],
                ((clickCoords.Y - clickCoords.Y % this.tileSize) / this.tileSize) * this.mapTileSize + this.miniMapOffset[1],
                 this.mapTileSize, this.mapTileSize);
    }
}