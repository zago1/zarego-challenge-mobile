import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

export const Screen = ({ children }: React.PropsWithChildren) => {

  return <View style={styles.container}>{children}</View>

}