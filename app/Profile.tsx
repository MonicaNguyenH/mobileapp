import React from 'react';
import { View } from 'react-native'; 
import ProfileFormat from "@/components/molecules/profileFormat"; // Updated import to match PascalCase
import Bio from "@/components/atoms/Bio";

export default function Profile() {
    return (
        <View
            style={{
                padding: 20,
                flexDirection: "column",
                margin: 150,
                alignItems: "center"
            }}
        >
            <ProfileFormat
                userName="Clear-Farm6370"
                imageUrl="https://i.pinimg.com/736x/d5/7c/eb/d57ceb9546385b8d5c224c34502ddcf6.jpg"
                width={300}   
                height={300} 
            />

            <Bio style={{ marginTop: 20 }} /> 
        </View>
    );
}