# 打包

```
"build": "./gradlew assembleRelease",
"clean": "./gradlew clean"
```

打包有缓存，真机运行老是不是最新的代码：

```
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res 

```

