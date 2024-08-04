import 'dotenv/config';

export default ({ config }) => ({
  ...config,
  name: "marcjeff",
  slug: "marcjeff",
  icon: "./assets/icon.png",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    bundleIdentifier: "com.yourcompany.waterapp",
    buildNumber: "1.0.0",
    icon: "./assets/icon.png",
  },
  android: {
    package: "com.yourcompany.waterapp",
    versionCode: 1,
    icon: "./assets/icon.png",
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  extra: {
    supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xenh5aGJhd3pmd2llcGZjamFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk4NzQ3MjksImV4cCI6MjAzNTQ1MDcyOX0.fZRxp2Ueu3GP758AszoQn9RPR56vAmAhxuUqPtPxd_o',
    eas: {
      projectId: "0bc5b8a4-6aad-46f5-9f14-3d6e1263c09e",
    },
  },
});
