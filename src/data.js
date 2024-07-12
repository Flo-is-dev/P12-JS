import axios from "axios";

export async function getUserInfo(userId) {
  try {
    const response = await axios.get(`http://localhost:3000/user/${userId}`);
    const userData = response.data;

    return userData;
  } catch (error) {
    console.error("Error fetching user information:", error);
    return null;
  }
}

export async function getUserActivity(userId) {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${userId}/activity`
    );
    const activityData = response.data;
    return activityData;
  } catch (error) {
    console.error("Error fetching user activity:", error);
    return null;
  }
}

export async function getUserAverageSessions(userId) {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${userId}/average-sessions`
    );
    const averageSessionsData = response.data;
    return averageSessionsData.data.sessions;
  } catch (error) {
    console.error("Error fetching user average sessions:", error);
    return null;
  }
}

export async function getUserPerformance(userId) {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${userId}/performance`
    );
    const performanceData = response.data.data;
    return performanceData;
  } catch (error) {
    console.error("Error fetching user performance:", error);
    return null;
  }
}

export const fetchActivityOverview = async (userId) => {
  try {
    const response = await fetch(`http://localhost:3000/user/${userId}`);
    const data = await response.json();
    if (response.ok) {
      return data.data.keyData;
    } else {
      throw new Error("Error fetching glucide count data");
    }
  } catch (error) {
    throw new Error("Error fetching glucide count data:" + error);
  }
};

// TODO exemple de de switch MOCK & CALL API

// export const fetchLipidesCount = async (userId) => {
//     try {
//       let url = mockVar ? "./data.json" : "localhost:3000/user/${userId}";
//       const response = await fetch(`http://localhost:3000/user/${userId}`);
//       const data = await response.json();
//       if (response.ok) {
//         return data.data.keyData.lipidCount;
//       } else {
//         throw new Error("Error fetching lipide count data");
//       }
//     } catch (error) {
//       throw new Error("Error fetching lipide count data:" + error);
//     }
//   };
