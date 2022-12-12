type TGetThemeLSData = () => boolean;

export const getThemeLSData: TGetThemeLSData = () => {
  const data = localStorage.getItem("theme");
  return data ? JSON.parse(data) : false;
};
