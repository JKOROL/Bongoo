export default class Order{
    idOrder:number;
    idRestaurant:number;
    idUser: number;
    date:string;


    constructor(idOrder:number,idRestaurant:number,idUser:number,date:string)
    {
        this.idOrder=idOrder
        this.idRestaurant=idRestaurant;
        this.idUser=idUser;
        this.date=date;
    }
}