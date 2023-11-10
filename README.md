# 打包

```
"build": "./gradlew assembleRelease",
"clean": "./gradlew clean"
```

# 踩坑：

- 打包有缓存，真机运行老是不是最新的代码：

```
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res 

```

- 真机安装失败

  > 要用adb工具卸载

  - **从AndroidStudio下你的项目的模块级的build.gradle下查看APK的包名（applicationId ）**

  - ##### 彻底卸载原有应用信息

    把手机用数据线和电脑相连，同时打开开发人员选项按钮，运行USB调试，然后在cmd下执行卸载命令 

    > adb uninstall com.reactnative（apk的包名）

  - 重新安装安装包
