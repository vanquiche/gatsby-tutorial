// snippet : imr
import React from 'react';
import {graphql} from 'gatsby';
import { MDXRenderer as Mdx } from 'gatsby-plugin-mdx';
import Layout from '../../components/Layout';

// snippet: nfn
const BlogPost = ({data}) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <Mdx>
        {data.mdx.body}
      </Mdx>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      body
    }
  }
`;

export default BlogPost;
