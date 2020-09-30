import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import Layout from '../components/Layout';
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils';
import { Box, Heading, Stack, Text } from 'minerva-ui';
import { formatDate } from './posts/[slug]';

export default function Index({ posts }) {
  const sortedPosts = posts.sort((a, b) => {
    return Number(new Date(b.data.date)) - Number(new Date(a.data.date));
  });
  return (
    <Layout>
      <Box mt="32px">
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
            (post) => process.env.NODE_ENV === 'development' || !post.draft
          )
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
