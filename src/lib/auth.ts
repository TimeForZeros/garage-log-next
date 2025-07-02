import { Google } from 'arctic';
import config from '@/config';

export const google = new Google(
  config.google.clientID,
  config.google.clientSecret,
  '/login/google/callback',
);
