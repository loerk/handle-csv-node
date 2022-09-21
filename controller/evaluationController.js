import * as fs from 'fs';
import csv from 'csvtojson';

import { mockData } from '../mockData.js';
import { leastWords, mostSecurity, mostSpeaches } from '../helpers/_helpers.js';
export const getEvaluatedData = async (req, res) => {
  const { url } = req.query;
  if (!url)
    return res
      .status(403)
      .json({ message: 'please enter at least one url to the request' });
  // creates MockData CSV from given string
  try {
    fs.writeFileSync('FILE.CSV', mockData);
    const result = { mostSpeaches: null, mostSecurity: null, leastWordy: null };

    const politicalSpeakers = await csv().fromFile('FILE.CSV');
    const leastWordy = leastWords(politicalSpeakers);
    const mostSec = mostSecurity(politicalSpeakers);
    const mostSpeachesIn2013 = mostSpeaches(politicalSpeakers);
    (result.mostSpeaches = mostSpeachesIn2013),
      (result.mostSecurity = mostSec),
      (result.leastWordy = leastWordy);

    res.status(200).json(result);
  } catch (error) {
    res
      .status(400)
      .json({ message: 'something went wrong while analyzing the data' });
  }
};
