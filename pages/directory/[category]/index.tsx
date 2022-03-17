import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import React from 'react'

import { Business } from '../../../types/Business';
import { CategorySummary } from '../../../types/CategorySummary';
import * as categorySvc from '../../../services/categoryService';
import Heading from '../../../components/common/Heading';
import BreadCrumb from '../../../components/layout/BreadCrumb';

interface DirectoryCategoryProps {
    category: CategorySummary;
    businesses: Business[];
  }

const DirectoryCategory: NextPage<DirectoryCategoryProps> = ({category, businesses}) => {
    return (
        <div>
          <BreadCrumb 
            segments={[
                { text: 'Directory', link: '/directory' },
                { text: category.title }
            ]}
          />
            <Heading>{category.title}</Heading>
            <ul>
              {businesses.map(business => <li key={business.id}><Link href={`/directory/${category.slug}/${business.id}`}><a>{business.title}</a></Link></li>)}
            </ul>
        </div>
    )
}

export default DirectoryCategory;

export const getStaticPaths: GetStaticPaths = async () => {
    const categories = await categorySvc.getCategories();

    return {
        paths: categories.map(category => ({ params: { category: category.slug } })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<DirectoryCategoryProps> = async ({ params }) => {
    const [category, businesses] = await Promise.all([
      categorySvc.getCategoryBySlug(params?.category as string),
      categorySvc.getBusinessesInCategory(params?.category as string),
    ]);

    if (!category) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
        category,
        businesses,
      },
    }
  }
