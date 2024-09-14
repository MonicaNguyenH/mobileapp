import { View, TextInput } from "react-native";
import Name from "../atoms/Name";
import Photo from "../atoms/Photo";

export default function Preview({ userName, imageUrl, style, width, height}){
    return (
        <View 
            style={{
                flexDirection: "row",
                gap: 10,
                alignItems:"center"
            }}
        >
            <Photo 
                width={width}
                height={height}
                imageUrl={imageUrl}
                style={{
                    borderRadius: 200,
                }}
            />
            <Name 
                userName={userName} 
            />
        </View>
    )
}