# Things to rename:

 * /app.json names
 * android\app\src\main\java\com\YOUR\APPNAME\MainActivity.java
 * make sure to update `package com.starter;` in MainActivity.java and MainApplication.java to `package com.your.appname`
 * AndroidManifest.xml package="com.starter"
 * android/app/build.gradle line 131 com.starter
   * this is also where you will set your version number


# Notes

 * when you add a new asset to the assets folder, run yarn assets to update /src/assets.ts. 
 * when you add a new screen or modal, add it to /src/navigation.tsx routeParams or modalParams, then add it to main.tsx MainStackScreen or ModalStackScreen
 * use `yarn`
 * run `yarn android`. this will build the android project, deploy it to whichever phones and emulators are connected, and start the metro (react natives webpack) server. react native uses this as a remote web server that it can pull the latest code from.
