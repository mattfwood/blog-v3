import Spotify from 'spotify-web-api-node';
import path from 'path';

require('dotenv').config({
  path: path.join(__dirname, '..', '.env'),
});

const {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_CLIENT_ACCESS_TOKEN,
  SPOTIFY_CLIENT_REFRESH_TOKEN,
  // REDIRECT_CODE,
} = process.env;

const HOST = 'http://localhost:3000';

// const scopes = [
//   'user-read-private',
//   'user-read-email',
//   'user-read-currently-playing',
//   'user-read-playback-state',
//   'user-read-recently-played',
// ];

export async function initSpotify() {
  const spotify = new Spotify({
    clientId: SPOTIFY_CLIENT_ID,
    clientSecret: SPOTIFY_CLIENT_SECRET,
    redirectUri: `${HOST}/authorize/callback`,
  });
  // const authorizeURL = spotify.createAuthorizeURL(scopes);

  // console.log({ authorizeURL });

  // const data = await spotify.authorizationCodeGrant(REDIRECT_CODE);

  // console.log(data.body);

  // spotify.setAccessToken(data.body['access_token']);
  // spotify.setRefreshToken(data.body['refresh_token']);

  spotify.setAccessToken(SPOTIFY_CLIENT_ACCESS_TOKEN);
  spotify.setRefreshToken(SPOTIFY_CLIENT_REFRESH_TOKEN);

  return spotify;
}

// spotify.setAccessToken(SPOTIFY_CLIENT_ACCESS_TOKEN);
// spotify.setRefreshToken(SPOTIFY_CLIENT_REFRESH_TOKEN);
