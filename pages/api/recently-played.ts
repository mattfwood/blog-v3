import { initSpotify } from '../../utils/spotify';

export default async (_, res) => {
  const spotify = await initSpotify();
  const data = await spotify.getMyRecentlyPlayedTracks({ limit: 10 });

  if (data.statusCode === 204 || data.statusCode > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const currentSong = {
    id: data.body.item.id,
    song: data.body.item.name,
    album: data.body.item.album.name,
    album_art: data.body.item.album.images[0].url,
    url: data.body.item.external_urls.spotify,
    // artist: artists,
  };
  const songs = data.body.items.map((item) => ({
    id: item.id,
    song: item.name,
    album: item.album.name,
    album_art: item.album.images[0].url,
    url: item.external_urls.spotify,
    // artist: artists,
  }));

  // console.log({ data });
  return res.status(200).json(songs);
};
