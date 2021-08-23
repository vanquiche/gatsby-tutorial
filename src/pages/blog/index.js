import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/Layout';

export default function blog({ data }) {
  const { nodes } = data.allMdx;
  return (
    <Layout pageTitle='My Blog Posts'>
      {nodes.map((node) => {
        return (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>
              {node.frontmatter.title}
              </Link>
              </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        );
      })}
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMM D, YYYY")
        }
        id
        slug
      }
    }
  }
`;
