import { Text, SafeAreaView } from 'react-native';
import FetchUsers from './RenderUsers/FetchUsers';
function App() {

  return (
    <SafeAreaView>
     <Text>hello World</Text>
     {/**Lists */}
     <FetchUsers />         
    </SafeAreaView>
  )
}

export default App;
