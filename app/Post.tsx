import React from 'react';
import { Text, View } from "react-native";
import Preview from "@/components/molecules/previewProfile";
import PostFormat from '@/components/molecules/postFormat';
import { getBackgroundColorAsync } from 'expo-system-ui';

export default function Post() {
  return (
    <View
      style={{
        alignSelf: "center",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 20
      }}
    >
      <Preview 
        userName="Clear-Farm6370"
        imageUrl="https://i.pinimg.com/736x/d5/7c/eb/d57ceb9546385b8d5c224c34502ddcf6.jpg"
        width={50}   
        height={50} 
      />
      
      <PostFormat
        header="[Product Question] Is this sunscreen effective or do you guys have a better suggestion?"
        para="I live in a tropical country and I have oily skin so I want a sunscreen which kind of gives a matte finish so you don’t know it’s there 🤒 Please don’t hate It’s my first time actually looking for a sunscreen."
        width={350}
        height={500}
        imageUrl="https://preview.redd.it/product-question-is-this-sunscreen-effective-or-do-you-guys-v0-297rnmospkod1.jpeg?auto=webp&s=32a9701590869da89d721d9789b457e732e71f8c"
      />
    </View>
  );
}