import Spotify from 'spotify-web-api-node';
import path from 'path';

require('dotenv').config({
  path: path.join(__dirname, '..', '..', '.env'),
});

const {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_CLIENT_ACCESS_TOKEN,
  SPOTIFY_CLIENT_REFRESH_TOKEN,
} = process.env;

const HOST = 'http://localhost:3000';

const client = new Spotify({
  clientId: SPOTIFY_CLIENT_ID,
  clientSecret: SPOTIFY_CLIENT_SECRET,
  redirectUri: `${HOST}/authorize/callback`,
});

client.setAccessToken(SPOTIFY_CLIENT_ACCESS_TOKEN);
client.setRefreshToken(SPOTIFY_CLIENT_REFRESH_TOKEN);

export default async (_, res) => {
  const data = await client.getMyCurrentPlaybackState();

  if (data.statusCode === 204 || data.statusCode > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const artists = data.body.item.artists
    .map((artist) => artist?.name)
    .join(', ');
  const currentSong = {
    id: data.body.item.id,
    song: data.body.item.name,
    album: data.body.item.album.name,
    album_art: data.body.item.album.images[0].url,
    url: data.body.item.external_urls.spotify,
    artist: artists,
  };

  // console.log({ data });
  return res.status(200).json({ ...currentSong, data });
};
