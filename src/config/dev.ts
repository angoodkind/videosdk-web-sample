import { getExploreName } from '../utils/platform';

export const devConfig = {
  sdkKey: 'xzBq82pq4A9A6ZGgye8xFvAhaj0MFOqg7DLH',
  sdkSecret: 'HueSOmvdKZTW1B7On1hQTKbdct7fS9OV3cOM',
  webEndpoint: 'zoom.us',
  topic: 'dev',
  name: `${getExploreName()}-${Math.floor(Math.random() * 1000)}`,
  password: '12345',
  signature: '',
  sessionKey: '',
  userIdentity: '',
  // role = 1 to join as host, 0 to join as attendee. The first user must join as host to start the session
  role: 1
};