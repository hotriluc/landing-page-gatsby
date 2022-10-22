import * as React from 'react';
import type { HeadFC } from 'gatsby';
import Layout from '../components/layout/Layout';
import HomeBanner from '../components/home/HomeBanner';

const IndexPage = () => {
  return (
    <Layout>
      <HomeBanner />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
