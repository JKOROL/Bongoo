import { getDistance } from "geolib";

export default class Restaurant{
    id: number;
    nom : string;
    note : number;
    photo : string;
    latitude : number;
    longitude : number;
    constructor(id:number,nom:string,latitude:number,longitude:number)
    {
        this.id=id;
        this.nom=nom;
        this.latitude=latitude; //47.850812
        this.longitude=longitude; //1.892373
        this.note=Math.floor(Math.random() * 5);
        this.photo="";
    }

    public getDistance(latlong : {latitude:number,longitude:number}|null){
        if(latlong)
        {
            return getDistance({latitude:this.latitude,longitude:this.longitude},latlong)
        }
    }
}