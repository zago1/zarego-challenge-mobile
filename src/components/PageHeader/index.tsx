import { View } from 'react-native';

import { TextGradient } from "../TextGradient";


interface PageHeaderProps {
  title: string;
}

export const PageHeader = ({ title }: PageHeaderProps) => {

  return (
    <View>
      <TextGradient
        style={{ fontSize: 30 }}
        text={title}
        colors={[
          'rgba(88, 191, 228, 1)',  
          'rgba(162, 136, 230, 1)',  
          'rgba(203, 107, 172, 1)',
          'rgba(203, 107, 172, 1)',
          'rgba(227, 92, 96, 1)',
          'rgba(227, 92, 96, 1)',
          'rgba(227, 92, 96, 1)',
          'rgba(227, 92, 96, 1)',
          'rgba(227, 92, 96, 1)',
        ]} 
      />
    </View>
  )
}




