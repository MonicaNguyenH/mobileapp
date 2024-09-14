import { url } from "inspector";
import { View, Image } from "react-native";

export default function Label({ imageUrl, style, width, height }){
    return (
        <>
            <View> {/** you need to have something after return otherwise the computer won't know what to return. you can also put a pair of brackets */}
                <Image
                    source={{ uri: imageUrl }}
                    style={[{ width: width, height: height }, style]}
                />
            </View>
        </>
    )
};