import { Box, Image, Text, Link, Stack } from 'minerva-ui';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';

const ART_SIZE = '60px';

const TopTracks = () => {
  const { data, error } = useSWR('/api/top-tracks', fetcher);

  const isLoaded = Boolean(data) && !error;

  return (
    <Stack gap="16px">
      {isLoaded &&
        data?.map((song, index) => (
          <Box
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            py="16px"
            width="100%"
            borderBottom="1px solid rgb(26, 32, 44)"
          >
            <Text
              textAlign="right"
              color="rgb(160,174,192)"
              fontWeight={700}
              ml="4px"
              mr="20px"
              width="20px"
            >
              {index + 1}
            </Text>
            <Image
              alt="Spotify album cover"
              height={ART_SIZE}
              width={ART_SIZE}
              borderRadius={8}
              src={song?.album_art || '/images/spotify-placeholder.jpg'}
            />
            <Stack
              gap="0px"
              justifyContent="center"
              alignItems="flex-start"
              display="flex"
              flexDirection="column"
              ml={3}
            >
              <Link
                as="a"
                color="rgb(255, 255, 255)"
                maxWidth="180px"
                whiteSpace="nowrap"
                overflow="hidden"
                // @ts-ignore
                textOverflow="ellipsis"
                fontWeight={600}
                href={song?.url}
                _hover={{
                  color: 'rgb(255, 255, 255)',
                  textDecoration: 'underline',
                }}
                isExternal
              >
                {isLoaded && (song?.song || 'Not Playing')}
              </Link>
              <Text
                color="rgb(160, 174, 192)"
                maxWidth="190px"
                whiteSpace="nowrap"
                overflow="hidden"
                lineHeight="1.5"
                style={{
                  margin: 0,
                }}
              >
                {isLoaded && (song?.artist || 'Spotify')}
              </Text>
            </Stack>
          </Box>
        ))}
    </Stack>
  );
};

export default TopTracks;
