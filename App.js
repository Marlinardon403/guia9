import React from 'react';

import { WebView } from 'react-native-webview';

import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>

      <WebView
        style={{flex: 1}}
        originWhitelist={['*']}
        source={{uri:'file:///android_asset/index.html'}}
        style={{ marginTop: 20 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
      
    </SafeAreaView>
  );


}