import { Text, View } from "react-native";

export default function Bio() {
    return (
        <View>
            <Text
                style={{ color: "gray", fontSize: 20, fontStyle: "italic", textAlign:"center" }}
            >
                "Tech enthusiast, creative thinker, and part-time dreamer. <br/> Always coding with coffee in hand and a head full of quirky ideas! 🚀"
            </Text>
        </View>
    );
}