import { TouchableOpacity } from "react-native";
import { View,Text } from "./Themed";

export default function MenuItem({nom,prix,ajoutPanier}:{nom:string,prix:number,ajoutPanier:(nom:string,prix:number)=>void})
{
    return(
        <View>
            <TouchableOpacity onPress={()=>ajoutPanier(nom,prix)}>
                <Text>{nom}</Text>
                <Text>{prix}</Text>
            </TouchableOpacity>
        </View>
    )
}