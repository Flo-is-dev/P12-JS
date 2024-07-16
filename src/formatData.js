import {
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from "./data.js";

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

export const formatAverageDuration = async (userId) => {
  try {
    const sessions = await getUserAverageSessions(userId);
    if (!sessions) {
      console.error("No session data available");
      return [];
    }

    const dayLabels = ["L", "M", "M", "J", "V", "S", "D"];
    return sessions.map((session) => ({
      day: dayLabels[session.day - 1],
      sessionDuration: session.sessionLength,
    }));
  } catch (error) {
    console.error("Error fetching or formatting user sessions:", error);
    return [];
  }
};

export const formatUserPerformance = async (userId) => {
  try {
    const performanceData = await getUserPerformance(userId);
    if (!performanceData) {
      console.error("No performance data available");
      return [];
    }

    const { kind, data } = performanceData;

    return data.map((perf) => ({
      subject: kind[perf.kind],
      A: perf.value,
      fullMark: 150,
    }));
  } catch (error) {
    console.error("Error fetching or formatting user performance:", error);
    return [];
  }
};
