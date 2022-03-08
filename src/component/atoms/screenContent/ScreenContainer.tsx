import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import {screenStyle} from '../../../StyleUtils/styles/screenContentStyle';

const ScreenContent = ({children}: any) => (
  <SafeAreaView style={{flex: 1}}>
    <ScrollView
      alwaysBounceVertical={false}
      style={screenStyle.mainView}
      contentContainerStyle={[screenStyle.middleContainer]}>
      {children}
    </ScrollView>
  </SafeAreaView>
);

export default ScreenContent;
