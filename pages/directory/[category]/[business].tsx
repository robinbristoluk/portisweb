import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import EmailAddresses from '../../../components/business/emailAddresses';
import TelephoneNumbers from '../../../components/business/telephoneNumbers';

import Map from '../../../components/business/map';
import Heading from '../../../components/common/Heading';
import Address from '../../../components/business/address';
import BreadCrumb from '../../../components/layout/BreadCrumb';

import * as categoriesSvc from '../../../services/categoryService';

import { Business } from '../../../types/Business';
import { CategorySummary } from '../../../types/CategorySummary';

interface BusinessPageProps {
    business: Business;
    category: CategorySummary;
}

const BusinessPage: NextPage<BusinessPageProps> = ({business, category}) => {
    return (
        <>
        <Head>
        <link rel="stylesheet" href="../../../node_modules/leaflet/dist/leaflet.css"
   integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
   crossOrigin=""/>
        </Head>
        <div>
            <BreadCrumb 
                segments={[
                    { text: 'Directory', link: '/directory' },
                    { text: category.title, link: `/directory/${business.category}` },
                    { text: business.title }
                ]}
            />
            <Heading>{business.title}</Heading>
            <div className='flex gap-6'>
                <div className='basis-2/3'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident labore non quis adipisci, voluptate hic illum amet inventore quaerat vero perferendis atque molestiae omnis doloremque voluptatum, ea optio possimus blanditiis.</p>
                </div>
                <div className='basis-1/3'>
                    <Address address={business.location.address} />

                    <TelephoneNumbers numbers={business.telephoneNumbers} />

                    <EmailAddresses addresses={business.emailAddresses} />

                    <Map />
                    
                </div>
            </div>
        </div>
        </>
    );
};

export default BusinessPage;

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [],
        fallback: 'blocking',
    }
};

export const getStaticProps: GetStaticProps<BusinessPageProps> = async ({params}) => {
    const [category, business] = await Promise.all([
        categoriesSvc.getCategoryBySlug(params?.category as string),
        categoriesSvc.getBusinessWithIdInCategory(
            params?.business as string, 
            params?.category as string
        )
    ]);
    
    if (!business || !category) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            category,
            business,
        }
    }
};
