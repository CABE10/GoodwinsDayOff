import Input from './input';

export class Player {
	private ctx: CanvasRenderingContext2D;
	private character:Array<HTMLImageElement>;
	private countX:number = 0;
    private countY:number = 0;
    private images:any;

	constructor(images:any, ctx:CanvasRenderingContext2D) {
        this.images = images;
        console.log(images);
        this.ctx = ctx;
		setInterval(()=>{
			this.countX += 1; 
        },100);
        this.update();
    }
    
    public update():void{

        this.character = new Array<HTMLImageElement>();
        Object.keys(this.images).forEach((im:any) => {
            let newImg : HTMLImageElement = new Image();
            newImg.src = this.images[im];
            this.character.push(newImg);
        });
    }

	public draw(input:Input): void {        
        //showing that all input can be passed now
        if (input.KeyCodes !== undefined && input.KeyCodes.length > 0){ 
            console.log("player", input.KeyCodes);
            if (input.KeyCodes.find((el)=>{ return el.key === Input.Type.SPACE && el.type === Input.KeyboardEvent.KEYUP})){
                console.log("space");
                this.countY += 1;
            }
        }

        this.drawCollider(256,256);
        this.character.forEach(c => {
            this.ctx.drawImage(c, (this.countX%13)*64, (this.countY%4)*64, 64, 64, 256, 256, 128, 128);
        });
    }
    
    private drawCollider(centerX:number, centerY:number):void{
        let radius = 32;
  
        this.ctx.beginPath();
        this.ctx.arc(centerX+64, centerY+115, radius, 0, 2 * Math.PI, false);
        //this.ctx.fillStyle = '#0000';
        //this.ctx.fill();
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = `rgb(200, 0, 0, .5)`;
        this.ctx.stroke();
    }
}

export namespace Player {
    export enum Type{
        BODY,
        FEET,
        LEGS,
        TORSO,
        BELT,
        HEAD,
        HANDS,
        WEAPON
    }
}


export default Player;