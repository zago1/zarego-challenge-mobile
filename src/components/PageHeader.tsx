import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { TextGradient } from "./TextGradient";
import { LineGradient } from "./LineGradient";
import { GradientStep } from './GradientStep';

type Props = {
  title: string;
  step: number;
  gradient?: boolean;
  style?: ViewStyle;
}

const colors = [
  'rgba(88, 191, 228, 1)',  
  'rgba(162, 136, 230, 1)',  
  'rgba(203, 107, 172, 1)',
  'rgba(227, 92, 96, 1)',
]

export const PageHeader = ({ title, step, gradient, style }: Props) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.titleContainer}>
        <GradientStep number={step} colors={colors} />
        {
          gradient 
            ? <TextGradient
                style={styles.defaultTitleText}
                text={title}
                colors={colors} 
              />
            : <Text style={[styles.defaultTitleText, styles.textColor]} >{title}</Text> 
        }
        
      </View>
      <LineGradient colors={colors}  />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 12
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16
  },
  defaultTitleText: {
    fontWeight: '700',
    fontSize: 30,
  },
  textColor: {
    color: '#FFF'
  }
});




