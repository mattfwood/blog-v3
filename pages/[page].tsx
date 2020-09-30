import fs from 'fs';
import matter from 'gray-matter';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import { preToCodeBlock } from 'mdx-utils';

import Head from 'next/head';
// import Link from 'next/link';
import path from 'path';
import Code from '../components/Code';
// import CustomLink from '../components/CustomLink';
import Layout from '../components/Layout';
import { contentFilePaths, CONTENT_PATH } from '../utils/mdxUtils';
import { Flex, Heading } from 'minerva-ui';
import NowPlaying from '../components/NowPlaying';
import RecentlyPlayed from '../components/RecentlyPlayed';
// import BodyContent from '../../components/BodyContent';

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
  // eslint-disable-next-line
  pre: (preProps) => {
    const props = preToCodeBlock(preProps);
    return <Code {...props} />;
  },
};

export default function PostPage({ source, frontMatter }) {
  const content = hydrate(source, { components });

  return (
    <Layout title={`${frontMatter.title} — Matt Wood`}>
      <div className="post-header">
        <Heading
          as="h1"
          lineHeight={{ xs: '36px', md: '44px' }}
          fontWeight={800}
          fontSize={{ xs: '30px', md: '36px' }}
        >
          {frontMatter.title}
        </Heading>
      </div>
      <main className="prose" style={{ marginBottom: '20px' }}>
        {content}
      </main>
      {frontMatter.title === 'About' ? (
        <RecentlyPlayed />
      ) : (
        <Flex justifyContent="center">
          <NowPlaying />
        </Flex>
      )}
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(CONTENT_PATH, `${params.page}.mdx`);
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

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = contentFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { page: slug } }));

  return {
    paths,
    fallback: false,
  };
};
