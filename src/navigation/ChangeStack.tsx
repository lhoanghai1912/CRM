// ChangeStack.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screen_Name } from './ScreenName';
import CoHoi from '../screens/HomeStack/CoHoi';
import DetailChange from '../screens/HomeStack/Detail/Change';
const Stack = createNativeStackNavigator();
const CoHoiStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Change" component={CoHoi} />
    <Stack.Screen name={Screen_Name.DetailChange} component={DetailChange} />
  </Stack.Navigator>
);
export default CoHoiStack;
