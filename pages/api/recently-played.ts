import { formatDistance } from 'date-fns';
import { initSpotify } from '../../utils/spotify';

export default async (_, res) => {
  const spotify = await initSpotify();
  const data = await spotify.getMyRecentlyPlayedTracks({ limit: 10 });

  if (data.statusCode === 204 || data.statusCode > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const songs = data.body.items.map((item) => {
    const { track } = item;
    const artists = track.artists.map((artist) => artist?.name).join(', ');
    return {
      id: track.id,
      song: track.name,
      album: track.album.name,
      album_art: track.album.images[0].url,
      url: track.external_urls.spotify,
      artist: artists,
      played_at: formatDistance(new Date(item.played_at), new Date(), {
        addSuffix: true,
      }),
    };
  });

  // console.log({ data });
  // return res.status(200).json(data);
  return res.status(200).json(songs);
};
