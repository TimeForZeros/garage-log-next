export * from './next-auth';
const config = {
  url: process.env.URL,
  db: {
    pepper: process.env.PEPPER!,
  },
};

export default config;
