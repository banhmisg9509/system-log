export const getTechs = async () => {
  const res = await fetch('/techs');
  const data = await res.json();
  return data;
};
