import Spotify from 'spotify-web-api-node';
import path from 'path';

require('dotenv').config({
  path: path.join(__dirname, '..', '.env'),
});

// const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;

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
//   'user-top-read',
//   'user-library-read',
// ];

export async function initSpotify() {
  const spotify = new Spotify({
    clientId: SPOTIFY_CLIENT_ID,
    clientSecret: SPOTIFY_CLIENT_SECRET,
    redirectUri: `${HOST}/authorize/callback`,
  });

  spotify.setAccessToken(SPOTIFY_CLIENT_ACCESS_TOKEN);
  spotify.setRefreshToken(SPOTIFY_CLIENT_REFRESH_TOKEN);

  try {
    await spotify.getMyCurrentPlaybackState();
  } catch (error) {
    // if the token has expired, refresh it
    if (error.statusCode === 401) {
      const data = await spotify.refreshAccessToken();
      spotify.setAccessToken(data.body['access_token']);
    }
  }

  return spotify;
}

// spotify.setAccessToken(SPOTIFY_CLIENT_ACCESS_TOKEN);
// spotify.setRefreshToken(SPOTIFY_CLIENT_REFRESH_TOKEN);
