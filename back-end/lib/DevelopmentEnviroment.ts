import * as fs from 'fs';
import * as dotenv from 'dotenv';
const envDevelopment = dotenv.parse(fs.readFileSync('./environments/.env.development'));

const DevelopmentEnvironment = () => {
  if (process.env.NODE_ENV === 'development') {
    process.env = {
      ...process.env,
      ...envDevelopment
    };
  }
};

export default DevelopmentEnvironment();
