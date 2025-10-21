import { StyleSheet } from 'react-native';
import { ms, spacing } from '../../../../utils/spacing';
import { Fonts } from '../../../../utils/fontSize';
import { colors } from '../../../../utils/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContactWrapper: {
    paddingVertical: spacing.small,
    borderWidth: 0.5,
    justifyContent: 'center',
    borderColor: colors.Gray,
    flexDirection: 'column', // Ensure column direction for proper stacking
    backgroundColor: colors.white,
  },
  mainContent: {
    paddingHorizontal: spacing.medium,
    flexDirection: 'row',
    alignItems: 'center',
  },
  companyImage: {
    width: ms(60),
    height: ms(60),
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: colors.blue,
    borderRadius: 50,
  },
  contactInfo: { paddingLeft: spacing.small, flex: 1 },
  description: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInfo: {
    backgroundColor: '#E4E5E7',
    padding: spacing.small,
    borderRadius: 20,
    fontSize: Fonts.normal,
  },
  iconWrap: {
    borderRadius: 100,
    padding: ms(5),
    borderWidth: 1,
    borderColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
