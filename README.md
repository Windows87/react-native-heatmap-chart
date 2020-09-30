
# react-native-react-native-heatmap

## Getting started

`$ npm install react-native-react-native-heatmap --save`

### Mostly automatic installation

`$ react-native link react-native-react-native-heatmap`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-react-native-heatmap` and add `RNReactNativeHeatmap.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNReactNativeHeatmap.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNReactNativeHeatmapPackage;` to the imports at the top of the file
  - Add `new RNReactNativeHeatmapPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-react-native-heatmap'
  	project(':react-native-react-native-heatmap').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-react-native-heatmap/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-react-native-heatmap')
  	```


## Usage
```javascript
import RNReactNativeHeatmap from 'react-native-react-native-heatmap';

// TODO: What to do with the module?
RNReactNativeHeatmap;
```
  