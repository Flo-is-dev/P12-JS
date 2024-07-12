import { getUserInfo } from "./data.js";

export const FormatUserInfo = async (userId) => {
  const userData = await getUserInfo(userId);

  if (userData) {
    const formattedData = userData.map((item) => ({
      id: item.id,
      name: item.name,
      email: item.email,
    }));
    console.log("formattedData***formattedData", formattedData);

    return formattedData;
  } else {
    console.error("No data to format.");
    return null;
  }
};

// Exemple d'utilisation
FormatUserInfo(12).then((formattedData) => {
  console.log("formattedData***formattedData", formattedData);
});
