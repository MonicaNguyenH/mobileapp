import { Text, View } from "react-native";

export default function Label({ labelText }){
    return <View> {/** you need to have something after return otherwise the computer won't know what to return. you can also put a pair of brackets */}
        <Text
            style={{color:"salmon"}}>{labelText}
        </Text>
    </View>
};