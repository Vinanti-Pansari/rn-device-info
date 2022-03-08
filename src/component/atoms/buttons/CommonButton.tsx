import React, {useState} from 'react';
import type {TextInputProps} from 'react-native';
import {TextInput, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AppColors} from '../../../StyleUtils/colors/AppColors';

export interface CustomButtonProps {
  buttonText: string;
  onPress: () => void;
  styleObj?: object;
  btnTextStyle?: object;
}

const CommonButton = (props: CustomButtonProps) => {
  const {buttonText, onPress, styleObj, btnTextStyle} = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonView, styleObj]}>
      <Text style={[styles.textStyle, btnTextStyle && btnTextStyle]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  buttonView: {
    height: 60,
    width: '90%',
    backgroundColor: AppColors.sandyBrown,
    borderRadius: 4,
    alignSelf: 'center',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 14,
    textAlign: 'left',
    fontWeight: '600',
    paddingVertical: 16,
    letterSpacing: 2,
    color: AppColors.black,
  },
});
