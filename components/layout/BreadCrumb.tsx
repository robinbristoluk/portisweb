import React from 'react'
import Link from 'next/link';

import { BreadCrumbSegment } from '../../types/BreadCrumbData';

const BreadCrumbItem: React.FC<{segment: BreadCrumbSegment}> = ({segment}) => {
    return segment.link ? 
        <li><Link href={segment.link}><a className='underline'>{segment.text}</a></Link></li> :
        <li>{segment.text}</li>;
}

interface BreadCrumbProps {
    segments?: BreadCrumbSegment[]
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({segments = []}) => {
  return (
    <ul className='text-sm mb-2 flex gap-2'>
        {!segments.length ?
            <BreadCrumbItem segment={{ text: 'Home' }} /> :
            <>
                <BreadCrumbItem segment={{ text: 'Home', link: '/'}} />
                {segments.map(segment => {
                    return <>
                        &gt;
                        <BreadCrumbItem segment={segment} />
                    </>
                })}
            </>
        }
    </ul>
  )
}

export default BreadCrumb;