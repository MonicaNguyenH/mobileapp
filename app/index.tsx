import { Text, View } from "react-native";
import LabelledButton from "@/components/molecules/labelledButton";
import InputForm from "@/components/molecules/inputForm";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LabelledButton buttonText="click me!" labelText="This is a label" />
      <InputForm buttonText="Click Me!" labelText="This is a label" />
    </View>
  );
}
