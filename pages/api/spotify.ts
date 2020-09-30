import { initSpotify } from '../../utils/spotify';

export default async (_, res) => {
  try {
    const spotify = await initSpotify();
    const data = await spotify.getMyCurrentPlaybackState();

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
  } catch (error) {
    throw new Error(error);
  }
};
