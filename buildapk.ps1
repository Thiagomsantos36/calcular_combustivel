echo "Set Java JDK Versao 11"
$env:JAVA_HOME = "C:\Program Files\Java\jdk-11"
npm install
npx react-native build-android --mode=release
.\android\gradlew assembleRelease
echo "Pegar o APK na pasta android/app/outputs/apk"