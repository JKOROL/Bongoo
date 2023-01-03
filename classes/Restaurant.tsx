export default class Restaurant{
    nom;
    note;
    distance;
    photo;
    constructor(nom:string)
    {
        this.nom=nom;
        this.note=Math.floor(Math.random() * 5);
        this.distance=Math.floor(Math.random() * 5);
        this.photo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/273px-McDonald%27s_Golden_Arches.svg.png";
    }
}