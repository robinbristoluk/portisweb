import { NextPage, GetStaticProps } from 'next'
import Link from 'next/link';
import React from 'react'
import Heading from '../../components/common/Heading';
import BreadCrumb from '../../components/layout/BreadCrumb';
import * as categorySvc from '../../services/categoryService';
import { CategorySummary } from '../../types/CategorySummary';

interface CategoriesIndexProps {
  categories: CategorySummary[];
}

const CategoryIndex: NextPage<CategoriesIndexProps> = ({categories}) => {
  return (
    <div>
        <BreadCrumb 
            segments={[
                { text: 'Directory' }
            ]}
        />
        <Heading>Category</Heading>
        <ul>
          {categories.map(c => <li key={c.slug}><Link href={`/directory/${c.slug}`}><a>{c.title}</a></Link></li>)}
        </ul>
    </div>
  )
}

export default CategoryIndex;

export const getStaticProps: GetStaticProps<CategoriesIndexProps> = async () => {
  const categories = await categorySvc.getCategories();
  
  return {
    props: {
      categories,
    }
  }
}
