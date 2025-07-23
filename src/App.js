import React , { useState } from 'react';
import { Text, SafeAreaView, Button} from 'react-native';
import FetchUsers from './RenderUsers/FetchUsers';
import DisplayPosts from './ReactConcepts/FlatListConcept/components/DisplayPosts';
function App() {

  const [showFetchUsers, setShowFetchUsers] = useState(false);
  const [displayPosts, setDisplayPosts] = useState(false);

  return (
    <SafeAreaView>
     <Text>hell World</Text>
     <Button title={'Load List'} onPress={() => setShowFetchUsers(true)}/>
     <Button title={'Display Posts'} onPress={() => setDisplayPosts(true)}/>
     {/**Lists */}
     {
      showFetchUsers && <FetchUsers />  
     }
     {
      displayPosts && <DisplayPosts />
     }
          
     
    </SafeAreaView>
  )
}

export default App;
