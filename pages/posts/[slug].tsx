import fs from 'fs';
import matter from 'gray-matter';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import { preToCodeBlock } from 'mdx-utils';
import ReactMarkdown from 'react-markdown';

// import dynamic from 'next/dynamic';
import Head from 'next/head';
// import Link from 'next/link';
import path from 'path';
import Code from '../../components/Code';
// import CustomLink from '../../components/CustomLink';
import Layout from '../../components/Layout';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';
import { Flex, Heading, Image, Text } from 'minerva-ui';
// import BodyContent from '../../components/BodyContent';

const readingTime = require('reading-time');

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  // a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Head,
  pre: (preProps) => {
    const props = preToCodeBlock(preProps);
    return <Code {...props} />;
  },
};

const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', dateOptions);
}

export default function PostPage({ source, frontMatter, readTime }) {
  const content = hydrate(source, { components });

  return (
    <Layout title={`${frontMatter.title} — Matt Wood`}>
      <div className="post-header">
        <Heading
          as="h1"
          // lineHeight={1.25}
          lineHeight={{ xs: '36px', md: '44px' }}
          fontWeight={800}
          fontSize={{ xs: '30px', md: '36px' }}
        >
          {frontMatter.title}
        </Heading>
        <Flex opacity={0.6} mt={2}>
          <Text>{formatDate(frontMatter.date)}</Text>
          <Text mx={2}>•</Text>
          <Text>{readTime.text}</Text>
        </Flex>
        <Image src={frontMatter?.banner} />
        {Boolean(frontMatter?.bannerCredit) && (
          <Text fontSize="14px" my={2} textAlign="center">
            <ReactMarkdown source={frontMatter.bannerCredit} />
          </Text>
        )}
      </div>
      <main className="prose" style={{ marginBottom: '60px' }}>
        {content}
      </main>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  const readTimeValue = readingTime(content);

  return {
    props: {
      readTime: readTimeValue,
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
