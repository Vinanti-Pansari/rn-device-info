import React, {useRef, useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useOrientation} from '../../customHooks/UseOrientation';
import {adaptiveDynamicStyle} from '../../adaptiveContext/AdaptiveStylesheet';
import {labels} from '../../utils/constant/Labels';
import {AppColors} from '../../StyleUtils/colors/AppColors';
import {errLabels} from '../../utils/constant/Errors';
import {updateUserProfile} from '../../thunk/Thunk';
import * as Navigation from '../../navigation/NavigationRef';
import AppHeader from '../../navigation/components/AppHeader';
import ScreenContent from '../../component/atoms/screenContent/ScreenContainer';
import CustomTextInput from '../../component/atoms/textInput/CustomTextInput';
import CommonButton from '../../component/atoms/buttons/CommonButton';
import {useAppDispatch, useAppSelector} from '../../reduxStorage/config/Hooks';
export const StyleContext = React.createContext();
const Home = () => {
  const {name} = useAppSelector(state => state.profileReducer);
  const inputRef = useRef(null);
  const dispatch = useAppDispatch();
  const orientation = useOrientation();
  const dynamic = adaptiveDynamicStyle(orientation);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    if (
      inputRef?.current?.value !== undefined &&
      inputRef?.current?.value !== ''
    ) {
      setErrMsg('');
    }
  }, [errMsg]);

  /**
   * Method to check validations and navigation
   */
  const checkForNameValidation = () => {
    if (
      inputRef?.current?.value === '' ||
      inputRef?.current?.value === undefined
    ) {
      setErrMsg(errLabels.ENTER_NAME);
    } else {
      setErrMsg('');
      dispatch(updateUserProfile(inputRef.current.value));
      Navigation.navigate('ButtonScreen', {});
    }
  };

  return (
    <StyleContext.Provider value={dynamic}>
      <ScreenContent>
        <AppHeader title={'Welcome'} displayBackButton={false} />
        <Text style={styles.titleStyle}>{labels.WELCOME_USER}</Text>

        <View style={styles.commonMargin}>
          <CustomTextInput
            styleObj={dynamic.inputBlock}
            inputRef={inputRef}
            placeHolder={labels.USERNAME}
            label={labels.ENTER_NAME}
            errMsg={errMsg}
          />
        </View>
        <CommonButton
          buttonText={'Next'}
          onPress={checkForNameValidation}
          styleObj={styles.btnView}
        />
      </ScreenContent>
    </StyleContext.Provider>
  );
};
export default Home;
const styles = StyleSheet.create({
  middleContainerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: AppColors.white,
    marginVertical: 20,
    letterSpacing: 2,
  },
  commonMargin: {
    margin: 15,
  },
  btnView: {
    width: '50%',
  },
});
