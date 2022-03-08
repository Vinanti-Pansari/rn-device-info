import {AppColors} from '../StyleUtils/colors/AppColors';

export const adaptiveDynamicStyle = (orientation: any) => {
  const width = orientation.isPortrait ? orientation.width : orientation.height;
  const height = orientation.isPortrait
    ? orientation.height
    : orientation.width;
  let dynamicStyles = {
    inputBlock: {
      width: width * 0.94,
      borderWidth: 1,
      borderRadius: 4,
      padding: 20,
      alignSelf: 'center',
      backgroundColor: AppColors.white,
    },
  };
  return dynamicStyles;
};
