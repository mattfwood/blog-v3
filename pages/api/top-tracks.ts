import { initSpotify } from '../../utils/spotify';

export default async (_, res) => {
  const spotify = await initSpotify();
  const data = await spotify.getMyTopTracks({
    limit: 10,
    time_range: 'short_term',
  });

  const songs = data.body.items.map((item) => {
    const artists = item.artists.map((artist) => artist?.name).join(', ');
    return {
      id: item.id,
      song: item.name,
      album: item.album.name,
      album_art: item.album.images[0].url,
      url: item.external_urls.spotify,
      artist: artists,
    };
  });

  return res.status(200).json(songs);
};
