import { View, Text } from "./Themed";

export default function OrderDetail({navigation,route}){
    const data = route.params.order;
    return (
        <View>
            <View>
                <Text>Commande {data.idOrder} </Text>
            </View>
        </View>
    )
}