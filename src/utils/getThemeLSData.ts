type TGetCartLSData = () => boolean;

export const getCartLSData: TGetCartLSData = () => {
  const data = localStorage.getItem("theme");
  return data ? JSON.parse(data) : false;
};
