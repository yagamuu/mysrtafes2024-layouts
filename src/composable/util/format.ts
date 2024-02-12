export const formatSeconds = (baseSeconds: number): string => {
  const seconds = baseSeconds % 60;
  const minutes = Math.floor(baseSeconds / 60) % 60;
  const hours = Math.floor(baseSeconds / 3600);

  const zeroPadding = (num: number): string => num.toString().padStart(2, '0');

  return `${hours}:${zeroPadding(minutes)}:${zeroPadding(seconds)}`;
};

export const formatSecondsToStartInTime = (baseSeconds: number): string => {
  const minutes = Math.floor(baseSeconds / 60) % 60;
  const hours = Math.floor(baseSeconds / 3600);

  const zeroPadding = (num: number): string => num.toString().padStart(2, '0');

  return `${hours ? `${hours}時間` : ''}${zeroPadding(minutes)}分`;
};
