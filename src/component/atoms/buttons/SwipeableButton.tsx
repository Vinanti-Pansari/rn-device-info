import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AppColors} from '../../../StyleUtils/colors/AppColors';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export interface CustomSwipeableButtonProps {
  buttonText: string;
  swiperText: string;
  onPress: () => void;
  styleObj?: object;
  btnTextStyle?: object;
}
const LeftSwipeActions = () => {
  return <View style={styles.rightSwipeView} />;
};

const SwipearButton = (props: CustomSwipeableButtonProps) => {
  const {buttonText, onPress, swiperText, btnTextStyle} = props;

  return (
    <Swipeable onSwipeableClose={onPress} renderLeftActions={LeftSwipeActions}>
      <View style={styles.swipableOuterView}>
        <View style={styles.swipableInnerView}>
          <Text style={btnTextStyle}>{buttonText}</Text>
        </View>
        <Text style={styles.swipearTextStyle}>{swiperText}</Text>
      </View>
    </Swipeable>
  );
};

export default SwipearButton;

const styles = StyleSheet.create({
  swipableOuterView: {
    width: '100%',
    alignSelf: 'center',
    height: 60,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: AppColors.matBlack,
    flexDirection: 'row',
    alignItems: 'center',
  },
  swipableInnerView: {
    height: 60,
    width: 100,
    borderRadius: 4,
    backgroundColor: AppColors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSwipeView: {
    backgroundColor: AppColors.blue,
    width: '100%',
    alignSelf: 'center',
    height: 60,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 30,
  },
  swipearTextStyle: {
    fontSize: 18,
    color: AppColors.white,
    paddingHorizontal: 30,
  },
});
