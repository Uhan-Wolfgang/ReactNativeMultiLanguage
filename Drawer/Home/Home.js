import { Button, View } from 'react-native';
import { useContext } from 'react';
import { Languages } from '../Context/Languages/LanguagesContext';
import { Text } from 'react-native';

export default function HomeScreen({ navigation }) {
    
    const  {Langtype,Language} = useContext(Languages);
    const [LanguageType , setLanguageType] = Langtype;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Button
          onPress={() => navigation.navigate('Notifications')}
          title={LanguageType}
        /> */}
        <Button
          onPress={() => setLanguageType((e)=>(e=='ar')?'fr':'ar')}
          title={LanguageType}
        />
        <Text>{ Language.hello}</Text>
      </View>
    );
  }