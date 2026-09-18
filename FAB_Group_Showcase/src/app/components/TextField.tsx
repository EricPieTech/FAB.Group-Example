import { TextInput } from "react-native";
import colors from "../style/colors";
//googled how to get the parent function to access text field responses
type propsType = {
  placeHolder: string;
  color?: string;
  textColor?: string;
  value: string;
  changeData: (text: string) => void; //function to change the text
};

const TextField: React.FC<propsType> = ({
  placeHolder,
  color = colors.secondary,
  textColor = "black",
  value,
  changeData,
}) => {
  return (
    <TextInput
      style={{
        borderWidth: 5,
        padding: 5,
        fontSize: 15,
        backgroundColor: color,
        borderRadius: 5,
        width: 150,
      }}
      placeholderTextColor={textColor}
      placeholder={placeHolder}
      value={value}
      onChangeText={changeData}
    />
  );
};

export default TextField;
