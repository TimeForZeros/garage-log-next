export * from './next-auth';
const config = {
  db: {
    pepper: process.env.PEPPER!,
  },
};

export default config;
