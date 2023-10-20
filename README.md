# Login-SignUp-UI-in-React-Native-Reanimated

- [React Native Expo](https://reactnative.dev/)
- [NativeWind](https://www.nativewind.dev/quick-starts/expo)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [React Navigation](https://reactnavigation.org/)
  
## Steps

- npx create-expo-app login-ui -e with-reanimated
- npm i nativewind
- npm i --dev tailwindcss@3.3.2
- npx tailwindcss init
```
// tailwind.config.js
module.exports = {
- content: [],
+ content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

3. Add the Babel plugin

Modify your babel.config.js

// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
+   plugins: ["nativewind/babel"],
  };
};
```
- npm install @react-navigation/native
- npx expo install react-native-screens react-native-safe-area-context
- npm install @react-navigation/native-stack

## Run App
- npx expo start -w
- expo start --tunnel
- Scan QR Code By Your Phone android or ios

