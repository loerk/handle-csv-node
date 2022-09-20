export const leastWords = (arr) => {
  arr.sort((a, b) => Number(a.Words) - Number(b.Words));
  return arr[0].Speaker;
};

export const mostSecurity = (arr) => {
  const securitySpeakers = arr.filter(
    (speach) => speach.Topic === "Internal Security"
  );
  if (!securitySpeakers.length) return null;
  if (securitySpeakers.length === 1) return securitySpeakers[0].Speaker;
  return sortByMost(securitySpeakers, "Speaker");
};

export const mostSpeaches = (arr) => {
  const speaches2013 = arr
    .map((e) => {
      return { ...e, Date: e.Date.split("-") };
    })
    .filter((e) => e.Date[0] === "2013");
  if (!speaches2013.length) return null;
  if (speaches2013.length === 1) return speaches2013[0].Speaker;
  return sortByMost(speaches2013, "Speaker");
};

const sortByMost = (arr, key) => {
  const counted = arr.reduce((acc, curr) => {
    const currCount = acc[curr[key]] ?? 0;
    return { ...acc, [curr[key]]: currCount + 1 };
  }, {});
  const sortedByMost = Object.entries(counted).sort((a, b) => b[1] - a[1]);

  // check if unambiguous winner
  if (sortedByMost[0][1] !== sortedByMost[1][1]) {
    return sortedByMost[0][0];
  }
  return null;
};
