import {
  Image,
  ImageRequireSource,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { spacing } from '../utils/spacing';
import icons from '../assets/icons';
import AppStyles from '../components/AppStyle';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { act, use, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageModal from '../components/modal/ModalLanguage';
import i18n from '../language';
import { navigate } from '../navigation/RootNavigator';
import { languages } from '../utils/language';
import { Screen_Name } from '../navigation/ScreenName';
import { colors } from '../utils/color';

interface CustomHeaderProps {
  title?: string;
  leftIcon?: ImageRequireSource;
  leftPress?: () => void;
  leftIcon2?: ImageRequireSource;
  leftPress2?: () => void;
  rightIcon?: ImageRequireSource;
  rightPress?: () => void;
  rightIcon2?: ImageRequireSource;
  rightPress2?: () => void;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  leftIcon,
  leftPress,
  leftIcon2,
  leftPress2,
  rightIcon,
  rightPress,
  rightIcon2,
  rightPress2,
}) => {
  const { t } = useTranslation();
  const [showUser, setShowUser] = useState(false);
  const [modalLanguage, setModalLanguage] = useState(false);
  const dispatch = useDispatch();
  // const navigation = useNavigation();
  const inset = useSafeAreaInsets();
  const { userData } = useSelector((state: any) => state.user);

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setModalLanguage(false);
  };
  return (
    <View
      style={[
        styles.header,
        {
          paddingTop: inset.top,
          borderBottomColor: colors.Gray,
          borderBottomWidth: 0.5,
        },
      ]}
    >
      <View
        style={[
          styles.headerItem,
          {
            width: '15%',
            justifyContent: 'space-between',
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            if (leftPress) leftPress();
          }}
          style={{
            display: leftIcon ? 'flex' : 'none',
          }}
        >
          <Image
            source={leftIcon}
            style={[AppStyles.icon]}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (leftPress2) leftPress2();
          }}
          style={{
            display: leftIcon2 ? 'flex' : 'none',
          }}
        >
          <Image
            source={leftIcon2}
            style={[AppStyles.icon]}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <Text style={[AppStyles.label, { textAlign: 'center', flex: 1 }]}>
        {title}
      </Text>
      {/* <View
        style={[styles.headerItem, { width: '10%', backgroundColor: 'red' }]}
      ></View> */}
      <View
        style={[
          styles.headerItem,
          {
            width: '15%',
            justifyContent:
              rightIcon && rightIcon2 ? 'space-between' : 'flex-end',
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            if (rightPress) rightPress();
          }}
          style={{
            display: rightIcon ? 'flex' : 'none',
          }}
        >
          <Image
            source={rightIcon}
            style={AppStyles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (rightPress2) rightPress2();
          }}
          style={{
            display: rightIcon2 ? 'flex' : 'none',
          }}
        >
          <Image
            source={icons.username}
            style={AppStyles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <LanguageModal
        visible={modalLanguage}
        onClose={() => setModalLanguage(false)}
        onSelectLanguage={handleChangeLanguage}
        selectedLanguage={i18n.language}
        languages={languages}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: colors.white,
    marginBottom: spacing.medium,
    flexDirection: 'row',
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
  },
  headerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default CustomHeader;
