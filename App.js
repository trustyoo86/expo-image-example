import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewShot from 'react-native-view-shot';

export default function App() {
  const viewShotEl = useRef(null);

  useEffect(() => {
    viewShotEl.current.capture().then((uri) => {
      console.log("do something with ", uri);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <ViewShot ref={viewShotEl} options={{ format: 'jpg', width: 200, height: 300 }}>
        <Text>Hi?.............</Text>
      </ViewShot>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
