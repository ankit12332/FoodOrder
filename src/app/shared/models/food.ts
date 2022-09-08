export class Foods{
    id:number;
    price:number;
    name:string;
    favorite:boolean; //we have to initialize it to false
    stars:number; //we have to initialize it to 0
    tags:string[];
    imageUrl:string;
    cookTime:string;
    origins:string[];
    
    constructor(id:number, price:number, name:string, favorite:boolean, stars:number, tags:string[], imageUrl:string, cookTime:string, origins:string[]) { 
        this.id = id
        this.price=price
        this.name=name
        this.favorite=favorite
        this.stars=stars
        this.tags=tags
        this.imageUrl=imageUrl
        this.cookTime=cookTime
        this.origins=origins
     }  
}