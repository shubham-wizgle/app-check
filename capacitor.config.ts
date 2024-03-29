import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.wizgle.appcheck',
  appName: 'app-check',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
