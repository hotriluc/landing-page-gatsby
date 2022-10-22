import * as React from 'react';
import type { HeadFC } from 'gatsby';
import Layout from '../components/layout/Layout';
import HomeBanner from '../components/home/HomeBanner';
import { useAppDispatch } from '../hooks/store-hooks';
import { CursorType } from '../interfaces/Cursor';
import { uiActions } from '../store/ui-store';

const IndexPage = () => {
  const dispatch = useAppDispatch();

  const onCursor = (cursorType: CursorType) => {
    dispatch(uiActions.setCursorType(cursorType));
  };

  return (
    <Layout>
      <HomeBanner onCursor={onCursor} />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
