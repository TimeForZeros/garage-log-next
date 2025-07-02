const config = {
  secret: process.env.SECRET!,
  db: {
    pepper: process.env.PEPPER!,
  },
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  },
};

export default config;
