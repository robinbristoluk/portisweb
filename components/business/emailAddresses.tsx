import React from 'react'

interface EmailAddressesProps {
    addresses: string[];
}

const EmailAddresses: React.FC<EmailAddressesProps> = ({addresses}) => {
  return (
    <section className='mb-4'>
        <h4>Email addresses</h4>
        {addresses.length ?
            <ul>
                {addresses.map(t => <li key={t}><a href={`mailto:${t}`}>{t}</a></li>)}
            </ul>  :
            <p className='italic'>No email addresses available</p>
        }
    </section>
  )
}

export default EmailAddresses;
