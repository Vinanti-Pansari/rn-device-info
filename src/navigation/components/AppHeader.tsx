import React from 'react';
import {
  FlexStyle,
  TextStyle,
  View,
  Platform,
  Text,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AppColors} from '../../StyleUtils/colors/AppColors';

const isAndroid = Platform.OS === 'android';

interface AppHeaderProps {
  title: string;
  displayBackButton: boolean;
}

const AppHeader = ({title, displayBackButton}: AppHeaderProps) => {
  const navigation = useNavigation();

  const backHandler = () => {
    displayBackButton && navigation.goBack();
  };

  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        {displayBackButton && (
          <View>
            <Text onPress={backHandler}>{'<'}</Text>
          </View>
        )}
        <View style={styles.middleContainerWidth}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  header: {
    height: isAndroid ? 75 : 60,
    alignItems: 'center' as FlexStyle['alignItems'],
    flexDirection: 'row' as FlexStyle['flexDirection'],
    paddingLeft: 6,
    paddingRight: 10,
    paddingTop: isAndroid ? 15 : 0,
    backgroundColor: AppColors.white,
  },
  middleContainerWidth: {
    width: '90%',
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row' as FlexStyle['flexDirection'],
    alignItems: 'center' as FlexStyle['alignItems'],
  },
  rightContainer: {
    flexDirection: 'row' as FlexStyle['flexDirection'],
    alignContent: 'center' as FlexStyle['alignContent'],
  },
  title: {
    fontSize: 16,
    fontWeight: '700' as TextStyle['fontWeight'],
    padding: 10,
  },
});
