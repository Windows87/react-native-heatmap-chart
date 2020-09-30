import React from 'react';
import { SafeAreaView, View, ScrollView, StatusBar } from 'react-native';
import HeatMap from 'react-native-heatmap-chart';

const styles = {
  wrapper: { margin: 12 }
}

const App = () => {
  const click = item => {
    console.log(`Value: ${item.value}`);
    console.log(`Index: ${item.index}`);
  };

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View style={styles.wrapper}>
            <HeatMap values={[0, 4, 6, 1, 7, 3, 0, 8, 6, 2, 0, 10, 20, 12, 0, 0, 10, 0, 17, 8, 0, 6, 0, 6, 10, 23]} onBlockPress={click} />
          </View>
          <View style={styles.wrapper}>
            <HeatMap numberOfLines={3} values={[0, 7, 3, 1, 8, 9, 10, 8, 10, 7, 5, 10, 11]} />
          </View>
          <View style={styles.wrapper}>
            <HeatMap numberOfLines={5} values={[0, 6, 5.5, 6, 3, 3.5, 6.5, 4.5, 9, 2, 4, 3.5, 2.5, 2, 4.5, 5, 2.5, 3]} colors={['#ebedf0', '#c21818', '#ffb300', '#fdd835', '#4caf50']} maximumValue={9} />
          </View>
          <View style={styles.wrapper}>
            <HeatMap values={[1, 6, 3, 2, 1, 7, 9, 10, 6, 8, 10, 11, 24, 10, 14, 16, 40, 11, 13, 14]} blocksSize={15} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};


export default App;