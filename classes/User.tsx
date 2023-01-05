import Order from "./Order";

export default class User{
    id:number;
    nom:string;
    orders:Array<Order>;
    constructor(id:number,nom:string)
    {
        this.id=id;
        this.nom=nom;
        this.orders=[
            new Order(0,0,1,"2022-12-10"),
            new Order(1,0,1,"2022-12-10"),
            new Order(2,1,1,"2022-12-10"),
        ]
    }

    public getOrders(nb:number,offset:number)
    {
        return this.orders.filter((order)=>order.idOrder<nb+offset && order.idOrder>=offset)
    }

    public getOrder(nb:number)
    {
        return this.orders[nb];
    }
}