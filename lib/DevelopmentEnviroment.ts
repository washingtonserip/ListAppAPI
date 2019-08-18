import * as fs from 'fs';
import * as dotenv from 'dotenv';

const DevelopmentEnvironment = () => {
  if (process.env.NODE_ENV === 'development') {
    const file = fs.readFileSync('./environments/.env.development');

    if (file) {
      const envDevelopment = dotenv.parse(file);

      process.env = {
        ...process.env,
        ...envDevelopment
      };
    }
  }
};

export default DevelopmentEnvironment();
