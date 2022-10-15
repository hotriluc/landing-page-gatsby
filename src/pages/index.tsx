import * as React from 'react';
import type { HeadFC } from 'gatsby';
import Layout from '../components/layout/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <div>hello it is home page</div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
