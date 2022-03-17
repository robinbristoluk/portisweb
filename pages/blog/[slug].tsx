import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import Heading from '../../components/common/Heading';
import BreadCrumb from '../../components/layout/BreadCrumb';

import * as blogSvc from '../../services/blogService';
import { BlogSummary } from '../../types/BlogSummary';

interface BlogPageProps {
  blog: BlogSummary;
}

const BlogPage: NextPage<BlogPageProps> = ({blog}) => {
  return (
    <div>
      <BreadCrumb 
        segments={[
          { text: 'Blog', link: '/blog' },
          { text: blog.title }
        ]}
      />
      <Heading>Blog single item</Heading>
    </div>
  )
}

export default BlogPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await blogSvc.getBlogs();
  return {
    paths: blogs.map(blog => ({ params: { slug: blog.slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async ({ params }) => {
  const blog = await blogSvc.getBlogBySlug(params?.slug as string);

  if (!blog) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      blog,
    },
  }
}
