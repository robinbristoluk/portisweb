import { NextPage, GetStaticProps } from 'next'
import Link from 'next/link';
import React from 'react'
import Heading from '../../components/common/Heading';
import BreadCrumb from '../../components/layout/BreadCrumb';
import * as blogSvc from '../../services/blogService';
import { BlogSummary } from '../../types/BlogSummary';

interface BlogsIndexProps {
  blogs: BlogSummary[];
}

const BlogIndex: NextPage<BlogsIndexProps> = ({blogs}) => {
  return (
    <div>
        <BreadCrumb 
            segments={[
                { text: 'Blog' }
            ]}
        />
        <Heading>Blog</Heading>
        <ul>
          {blogs.map(b => <li key={b.slug}><Link href={`/blog/${b.slug}`}><a>{b.title}</a></Link></li>)}
        </ul>
    </div>
  )
}

export default BlogIndex;

export const getStaticProps: GetStaticProps<BlogsIndexProps> = async () => {
  const blogs = await blogSvc.getBlogs();
  
  return {
    props: {
      blogs,
    }
  }
}
