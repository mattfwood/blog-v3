import { Box, Image, Text, Link, Stack } from 'minerva-ui';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';

const ART_SIZE = '60px';

const RecentlyPlayed = () => {
  const { data, error } = useSWR('/api/recently-played', fetcher);

  const isLoaded = Boolean(data) && !error;

  return (
    <Stack gap="16px">
      {isLoaded &&
        data?.map((song) => (
          <Box
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            py="16px"
            width="100%"
            borderBottom="1px solid rgb(26, 32, 44)"
          >
            <Image
              alt="Spotify album cover"
              height={ART_SIZE}
              width={ART_SIZE}
              borderRadius={8}
              src={song?.album_art || '/images/spotify-placeholder.jpg'}
            />
            {/* {isLoaded ? (
              <Image
                alt="Spotify album cover"
                height={ART_SIZE}
                width={ART_SIZE}
                borderRadius={8}
                src={song?.album_art || '/images/spotify-placeholder.jpg'}
              />
            ) : (
              <SkeletonItem
                width={ART_SIZE}
                height={ART_SIZE}
                borderRadius={8}
              />
            )} */}
            <Stack
              gap="0px"
              justifyContent="center"
              alignItems="flex-start"
              display="flex"
              flexDirection="column"
              ml={3}
            >
              <Link
                // @ts-ignore
                color="rgb(255, 255, 255)"
                maxWidth="180px"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
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
                color="gray.500"
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
              <Text
                color="gray.500"
                maxWidth="190px"
                whiteSpace="nowrap"
                overflow="hidden"
                style={{
                  margin: 0,
                }}
              >
                {isLoaded && (song?.played_at || '')}
              </Text>
            </Stack>
          </Box>
        ))}
    </Stack>
  );
};

export default RecentlyPlayed;
