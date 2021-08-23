import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export default function blog({ data }) {
  return (
    <Layout pageTitle='My Blog Posts'>
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.id}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
        id
      }
    }
  }
`;
