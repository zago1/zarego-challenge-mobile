import { StyleProp, Text, TextStyle } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-community/masked-view';

type Props = {
  text: string;
  colors: string[];
  style?: StyleProp<TextStyle>
}

const TextGradient = ({ text, colors, style }: Props) => {
  return (
    <MaskedView maskElement={<Text style={style}>{text}</Text>}>
      <LinearGradient colors={colors} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
        <Text style={[style, { opacity: 0 }]}>{text}</Text>
      </LinearGradient>
    </MaskedView>
  );
}

export { TextGradient }
