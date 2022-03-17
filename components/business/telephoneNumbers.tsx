import React from 'react'

interface TelephoneNumberProps {
    numbers: string[];
}

const TelephoneNumbers: React.FC<TelephoneNumberProps> = ({numbers}) => {
  return (
    <section className='mb-4'>
        <h4>Telephone</h4>
        {numbers.length ?
            <ul>
                {numbers.map(t => <li key={t}><a href={`tel:${t}`}>{t}</a></li>)}
            </ul>  :
            <p className='italic'>No telephone number available</p>
        }
    </section>
  )
}

export default TelephoneNumbers;
