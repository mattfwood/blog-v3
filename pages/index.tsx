import React, { useState } from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import dynamic from 'next/dynamic';

import Layout from '../components/Layout';
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils';
import { Box, Button, Flex, Heading, Text } from 'minerva-ui';
import { formatDate } from '../utils/dates';

const NowPlaying = dynamic(() => import('../components/NowPlaying'));

const POST_INCREMENT = 5;

export default function Index({ posts }) {
  const [postLimit, setPostLimit] = useState(POST_INCREMENT);

  function handleShowMore() {
    setPostLimit(postLimit + POST_INCREMENT);
  }

  const sortedPosts = posts.sort((a, b) => {
    return Number(new Date(b.data.date)) - Number(new Date(a.data.date));
  });
  return (
    <Layout>
      <Box my="32px">
        <Heading
          letterSpacing="tight"
          my="32px"
          mb="32px"
          as="h1"
          fontSize="48px"
          fontWeight={700}
          display="block"
        >
          Sanity Check
        </Heading>
        {sortedPosts
          .filter(
            (post) => process.env.NODE_ENV === 'development' || !post.data.draft
          )
          .slice(0, postLimit)
          .map((post) => {
            const description = post.data?.description || post?.data?.spoiler;
            return (
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
                key={post.filePath}
                passHref
              >
                <Box display="block" as="a" mb="48px" cursor="pointer">
                  <Text opacity={0.6} fontSize="14px" mb="8px">
                    {formatDate(post.data.date)}
                  </Text>
                  <Heading as="h3">{post.data.title}</Heading>
                  {!!description && (
                    <Text mt="8px" color="rgb(160, 174, 192)">
                      {description}
                    </Text>
                  )}
                </Box>
              </Link>
            );
          })}

        <Flex flexDirection="column" alignItems="center">
          {sortedPosts.length > postLimit && (
            <Button
              bg="#5C2586"
              border={0}
              color="white"
              mb={8}
              _hover={{ bg: '#5C2586' }}
              _active={{ bg: '#5C2586' }}
              onClick={handleShowMore}
            >
              More Posts
            </Button>
          )}
          <NowPlaying />
        </Flex>
      </Box>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
