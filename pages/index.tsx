import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import Layout from '../components/Layout';
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils';
import { Box, Heading, Stack, Text } from 'minerva-ui';

export default function Index({ posts }) {
  const sortedPosts = posts.sort((a, b) => {
    return Number(new Date(b.data.date)) - Number(new Date(a.data.date))
  });
  return (
    <Layout>
      <Heading
        letterSpacing="tight"
        my="32px"
        as="h1"
        fontSize="48px"
        fontWeight={700}
        display="block"
      >
        Hey, I’m Matt Wood.
      </Heading>
      <Stack gap="20px" py="20px" flexDirection="column">
        <Text>
          I'm a self-taught, full-stack developer from Texas. I've spent most of
          my life tinkering with things and trying to make things that are
          useful for myself and others.
        </Text>
        <Text>
          I'm passionate about explaining complex topics in simple and
          approachable ways and sharing the things I learn each day.
        </Text>
        <Text>
          I spend my free time starting more projects than I'll ever be able to
          finish and learning as much as I can along the way.
        </Text>
      </Stack>
      <Box mt="32px">
        {sortedPosts.map((post) => {
          return (
            <Link
              as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
              href={`/posts/[slug]`}
              key={post.filePath}
              passHref
            >
              <Box display="block" as="a" mb="32px" cursor="pointer">
                <Heading as="h3" mb="8px">
                  {post.data.title}
                </Heading>
                <Text color="rgb(160, 174, 192)">{post.data?.description || post?.data?.spoiler}</Text>
              </Box>
            </Link>
          );
        })}
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
