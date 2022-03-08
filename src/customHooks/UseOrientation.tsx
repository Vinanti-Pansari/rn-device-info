import React, {useEffect, useState} from 'react';

import {Dimensions} from 'react-native';

export const useOrientation = () => {
  const [orientationInfo, setOrientationInfo] = useState(
    Dimensions.get('screen'),
  );
  useEffect(() => {
    const onChange = (res: any) => {
      setOrientationInfo(res.screen);
    };

    Dimensions.addEventListener('change', onChange);
    return () => Dimensions.removeEventListener('change', onChange);
  }, []);

  return {
    ...orientationInfo,
    isPortrait: orientationInfo.height > orientationInfo.width,
  };
};
