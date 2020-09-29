import fs from 'fs';
import matter from 'gray-matter';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import { preToCodeBlock } from 'mdx-utils';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import path from 'path';
import Code from '../../components/Code';
// import CustomLink from '../../components/CustomLink';
import Layout from '../../components/Layout';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';
import { Heading, Text } from 'minerva-ui';

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

export default function PostPage({ source, frontMatter, readTime }) {
  const content = hydrate(source, { components });

  return (
    <Layout>
      <div className="post-header">
        <Heading
          as="h1"
          lineHeight={1.25}
          fontWeight={700}
          fontSize={{ xs: '2.25rem', md: '3rem' }}
        >
          {frontMatter.title}
        </Heading>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
        <Text>{readTime.text}</Text>
      </div>
      <main>{content}</main>
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
