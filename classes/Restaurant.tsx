import { getDistance } from "geolib";

export default class Restaurant{
    nom : string;
    note : number;
    photo : string;
    latitude : number;
    longitude : number;
    constructor(nom:string)
    {
        this.nom=nom;
        this.latitude=47.850812;
        this.longitude=1.892373;
        this.note=4.5
        this.photo="";
    }

    public getDistance(latlong : {latitude:number,longitude:number}|null){
        if(latlong)
        {
            return getDistance({latitude:this.latitude,longitude:this.longitude},latlong)
        }
    }
}