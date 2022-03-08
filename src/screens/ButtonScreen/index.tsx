import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useOrientation} from '../../customHooks/UseOrientation';
import {adaptiveDynamicStyle} from '../../adaptiveContext/AdaptiveStylesheet';
import {buttonData} from '../../utils/mockData/MockData';
import {labels} from '../../utils/constant/Labels';
import {useIsEmulator} from 'react-native-device-info';
import {AppColors} from '../../StyleUtils/colors/AppColors';
import {useAppSelector} from '../../reduxStorage/config/Hooks';
import ScreenContent from '../../component/atoms/screenContent/ScreenContainer';
import AppHeader from '../../navigation/components/AppHeader';
import CommonButton from '../../component/atoms/buttons/CommonButton';
import SwipearButton from '../../component/atoms/buttons/SwipeableButton';

export const StyleContext = React.createContext();
const ButtonScreen = () => {
  const {name} = useAppSelector(state => state.profileReducer);

  const orientation = useOrientation();
  const dynamic = adaptiveDynamicStyle(orientation);

  return (
    <StyleContext.Provider value={dynamic}>
      <ScreenContent>
        <AppHeader title={name} displayBackButton={true} />
        <Text style={styles.titleStyle}>
          {useIsEmulator()
            ? labels.RUNNING_APP_ON_SIMULATOR
            : labels.RUNNING_ON_ACTUAL_DEVICE}
        </Text>
        <View style={styles.middleContainerView}>
          <Text style={styles.titleText}>{labels.VARIATION_BUTTON}</Text>
          {buttonData.map((btnObj: any) => {
            return (
              <CommonButton
                buttonText={labels.PRESS_ME}
                onPress={() => {}}
                styleObj={btnObj}
                btnTextStyle={styles.btnTextColor}
              />
            );
          })}
          <View style={styles.swipearBtnView}>
            <SwipearButton
              buttonText={labels.SLIDE}
              onPress={() => {}}
              swiperText={labels.SLIDE_TO_CONTINUE}
              btnTextStyle={styles.btnTextColor}
            />
          </View>
        </View>
      </ScreenContent>
    </StyleContext.Provider>
  );
};
export default ButtonScreen;
const styles = StyleSheet.create({
  middleContainerView: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
    color: AppColors.white,
    marginVertical: 30,
    marginHorizontal: 15,
    letterSpacing: 1,
    backgroundColor: AppColors.sandyBrown,
  },
  swipearBtnView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  titleText: {
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 16,
    letterSpacing: 2,
    color: AppColors.yellow,
  },
  btnTextColor: {
    color: AppColors.white,
  },
});
