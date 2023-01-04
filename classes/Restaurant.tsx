import { getDistance } from "geolib";

export default class Restaurant{
    nom : string;
    note : number;
    distance : number;
    photo : string;
    latitude : number;
    longitude : number;
    constructor(nom:string, userPosition:{latitude:number,longitude:number})
    {
        this.nom=nom;
        this.latitude=47.850812;
        this.longitude=1.892373;
        this.note=Math.floor(Math.random() * 5);
        this.distance=getDistance({latitude:this.latitude,longitude:this.longitude},userPosition)
        this.photo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/273px-McDonald%27s_Golden_Arches.svg.png";
    }
}