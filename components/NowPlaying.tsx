import {
  Box,
  Image,
  Link,
  SkeletonItem,
  Stack,
  Text,
  ThemeProvider,
} from 'minerva-ui';
import useSWR from 'swr';
import { customTheme } from '../pages/_app';
import fetcher from '../utils/fetcher';

const ART_SIZE = '80px';

const NowPlaying = () => {
  const { data, error } = useSWR('/api/spotify', fetcher);

  const isLoaded = Boolean(data) && !error;
  return (
    <ThemeProvider theme={customTheme}>
      <Box
        mb={4}
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        border="1px solid"
        borderRadius={8}
        borderColor="rgb(45, 55, 72)"
        p={4}
        width="100%"
        maxWidth="350px"
      >
        {isLoaded ? (
          <Image
            alt="Spotify album cover"
            height={ART_SIZE}
            width={ART_SIZE}
            borderRadius={8}
            src={data?.album_art || '/images/spotify-placeholder.jpg'}
          />
        ) : (
          <SkeletonItem width={ART_SIZE} height={ART_SIZE} borderRadius={8} />
        )}
        {/* <Skeleton>
      </Skeleton> */}
        <Stack
          gap="0px"
          justifyContent="center"
          alignItems="flex-start"
          display="flex"
          flexDirection="column"
          ml={3}
        >
          {isLoaded ? (
            <Link
              // @ts-ignore
              color="rgb(255, 255, 255)"
              maxWidth="180px"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
              href={data?.url}
              _hover={{
                color: 'rgb(255, 255, 255)',
                textDecoration: 'underline',
              }}
              isExternal
            >
              {data?.song || 'Not Playing'}
            </Link>
          ) : (
            <SkeletonItem />
          )}
          <Text
            color="gray.500"
            maxWidth="190px"
            whiteSpace="nowrap"
            overflow="hidden"
            style={{
              margin: 0,
            }}
          >
            {isLoaded && (data?.artist || 'Spotify')}
          </Text>
        </Stack>

        <Box
          ml="auto"
          width="16px"
          height="16px"
          mt="2px"
          color="rgb(160,174,192)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
          </svg>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default NowPlaying;
