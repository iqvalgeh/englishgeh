module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // plugins lain taruh DI SINI kalau nanti nambah
      'react-native-reanimated/plugin',
    ],
  };
};
