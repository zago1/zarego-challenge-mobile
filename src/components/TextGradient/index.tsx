import { StyleProp, Text, TextStyle } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-community/masked-view';

interface TextGradientProps {
  text: string;
  colors: string[];
  style?: StyleProp<TextStyle>
}

export const TextGradient = ({ text, colors, style }: TextGradientProps) => {
  return (
    <MaskedView maskElement={<Text style={style}>{text}</Text>}>
      <LinearGradient colors={colors} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
        <Text style={[style, { opacity: 0 }]}>{text}</Text>
      </LinearGradient>
    </MaskedView>
  );
}
