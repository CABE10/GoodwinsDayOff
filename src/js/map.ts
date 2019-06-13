export default class Map {
	private ctx: CanvasRenderingContext2D;
	private height: number;//use for npm lib
    private width: number; //use for npm lib
    private dungeon: Array<Array<number>>;
    private tileSize: number;
    private mapTileSize: number;
    public showMiniMap: boolean;

	constructor(context:CanvasRenderingContext2D, tileSize:number = 64, mapTileSize:number = 6, showMiniMap:boolean = true) {
        this.ctx = context;
        this.tileSize = tileSize;
        this.mapTileSize = mapTileSize;
        this.showMiniMap = showMiniMap;
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
			this.ctx.fillStyle = `rgb(${x*30},${x*30},${x*30}, .5)`;
			this.ctx.fillRect(i*this.tileSize, index*this.tileSize, this.tileSize, this.tileSize);
		}));

        //small one
        if (this.showMiniMap)
            this.dungeon.forEach((arr, index) => arr.forEach((x, i) => {
                this.ctx.fillStyle = `rgb(${x*10},${x*30},${x*30}, .5)`;
                this.ctx.fillRect(i*this.mapTileSize, index*this.mapTileSize, this.mapTileSize, this.mapTileSize);
            }));
    }
    
    public colorTile(clickCoords: number[]):void {
        
        this.ctx.fillStyle = `rgb(200, 0, 0, .5)`;
        this.ctx.fillRect(4*this.tileSize, 2*this.tileSize, this.tileSize, this.tileSize);
    }
}