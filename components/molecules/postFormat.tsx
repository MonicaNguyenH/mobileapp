import { url } from "inspector";
import { Text, View } from "react-native";
import Photo from "../atoms/Photo";

export default function PostFormat({ header, para, imageUrl, style, width, height}){
    return (
        <>
            <View
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10
                }}
            > {/** you need to have something after return otherwise the computer won't know what to return. you can also put a pair of brackets */}
                <Text style={{color:"black", fontSize: 35, fontWeight:"bold"}}>
                    {header}
                </Text>
                <Text style={{color:"black", fontSize: 20}}>
                    {para}
                </Text>
                <Photo
                    width={width}
                    height={height}
                    imageUrl={imageUrl}
                    style={{
                        alignSelf: "center"
                    }}
                />
            </View>
        </>
    )
};