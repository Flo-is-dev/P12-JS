import { getUserActivity } from "./data.js";

export const formatUserAverageSessions = async (userId) => {
  try {
    const data = await getUserActivity(userId);

    if (!data || !data.sessions) {
      console.error("No data available");
      return [];
    }

    const formattedUserAverageSessions = data.sessions.map((session) => ({
      day: new Date(session.day).getDate().toString(), // Assumant que 'day' est une date
      poids: session.kilogram, // Assumant que 'kilogram' est disponible
      calories: session.calories, // Assumant que 'calories' sont disponibles
    }));

    return formattedUserAverageSessions;
  } catch (error) {
    console.error("Error fetching or formatting user sessions:", error);
    return [];
  }
};
