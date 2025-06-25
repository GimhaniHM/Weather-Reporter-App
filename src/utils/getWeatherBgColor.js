// utils/getWeatherBgColor.js

const weatherCodeGroups = {
  sunny: [1000],
  cloudy: [1003, 1006, 1009],
  mist: [1030, 1135, 1147],
  rain: [
    1063, 1150, 1153, 1180, 1183, 1186, 1189,
    1192, 1195, 1240, 1243, 1246
  ],
  snow: [
    1066, 1210, 1213, 1216, 1219, 1222, 1225,
    1255, 1258
  ],
  sleet: [
    1069, 1072, 1168, 1171, 1198, 1201,
    1204, 1207, 1249, 1252
  ],
  thunder: [1087, 1273, 1276, 1279, 1282],
  ice: [1237, 1261, 1264],
  blizzard: [1114, 1117],
};

const bgColorMap = {
  sunny: 'bg-orange-300 dark:bg-orange-400',
  cloudy: 'bg-gray-400 dark:bg-gray-500',
  mist: 'bg-purple-200 dark:bg-purple-400',
  rain: 'bg-blue-300 dark:bg-blue-500',
  snow: 'bg-white text-blue-900 dark:bg-blue-100',
  sleet: 'bg-cyan-200 dark:bg-cyan-400',
  thunder: 'bg-indigo-300 dark:bg-indigo-500',
  ice: 'bg-blue-100 dark:bg-blue-300',
  blizzard: 'bg-slate-200 dark:bg-slate-400',
  default: 'bg-gray-200 dark:bg-gray-400',
};

export function getWeatherBgColorByCode(code) {
  for (const [type, codes] of Object.entries(weatherCodeGroups)) {
    if (codes.includes(code)) {
      return bgColorMap[type];
    }
  }
  return bgColorMap.default;
}
