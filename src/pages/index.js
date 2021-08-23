import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt='Kitty pawing at camera'
        src='../images/kitty.jpg'
      />
    </Layout>
  );
};

export default IndexPage;
