import { url } from "inspector";
import { Text, View } from "react-native";

export default function Label({ userName }){
    return (
        <>
            <View> {/** you need to have something after return otherwise the computer won't know what to return. you can also put a pair of brackets */}
                <Text
                    style={{color:"black", fontSize: 18}}>{userName}
                </Text>
            </View>
        </>
    )
};