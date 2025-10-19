export const getAppData = () => {
  const appDataStr = localStorage.getItem('installedApps');

  if (appDataStr) {
    const appDataStrData = JSON.parse(appDataStr);
    return appDataStrData;
  } else {
    return [];
  }
};

export const addDataToDB = (id) => {
  const storedApps = getAppData();
  console.log('Stored Apps:', storedApps);

  // If storedApps is array of ids, this is correct:
  const exists = storedApps.find((item) => item === id);

  if (!exists) {
    storedApps.push(id);
    localStorage.setItem('installedApps', JSON.stringify(storedApps));
    return true; // success
  } else {
    return false; // already installed
  }
};

export const removeDataFromDB = (id) => {
  const storedApps = getAppData();
  const updated = storedApps.filter((item) => item !== id);
  localStorage.setItem('installedApps', JSON.stringify(updated));
};
