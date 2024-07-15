import { getUserActivity, getUserAverageSessions } from "./data.js";

export const formatUserAverageSessions = async (userId) => {
  try {
    const data = await getUserActivity(userId);

    if (!data || !data.sessions) {
      console.error("No data available");
      return [];
    }

    const formattedUserAverageSessions = data.sessions.map((session) => ({
      day: new Date(session.day).getDate().toString(),
      poids: session.kilogram,
      calories: session.calories,
    }));

    return formattedUserAverageSessions;
  } catch (error) {
    console.error("Error fetching or formatting user sessions:", error);
    return [];
  }
};

export const formatAverageSessions = async (userId) => {
  try {
    const sessions = await getUserAverageSessions(userId);
    if (!sessions) {
      console.error("No session data available");
      return [];
    }

    const dayLabels = ["L", "M", "M", "J", "V", "S", "D"];
    return sessions.map((session) => ({
      day: dayLabels[session.day - 1], // Utilisez l'index pour convertir le numéro de jour en label
      sessionDuration: session.sessionLength, // Renomme sessionLength en sessionDuration
    }));
  } catch (error) {
    console.error("Error fetching or formatting user sessions:", error);
    return [];
  }
};
