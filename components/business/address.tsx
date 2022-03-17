import React from 'react'

import { Address as BusinessAddress } from '../../types/Business';

interface AddressProps {
    address: BusinessAddress;
}

const Address: React.FC<AddressProps> = (address) => {
  return (
    <section className='mb-4'>
        <h4>Address</h4>
        {address ?
            <address>
                Put  the address here
            </address>  :
            <p className='italic'>No email addresses available</p>
        }
    </section>
  )
}

export default Address;
