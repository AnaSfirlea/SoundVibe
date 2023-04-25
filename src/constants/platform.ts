import { Platform } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

const isIOS = Platform.OS === 'ios';
const isIPhoneX = isIphoneX();

export { isIOS, isIPhoneX };

