import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className='bg-blue-400 p-3'>
            <h1 className='text-6xl font-light text-white pb-3'>Portisweb</h1>
            <nav className='text-white'>
                <Link href='/'><a className='pr-3'>Home</a></Link>
                <Link href='/blog'><a className='pr-3'>Blog</a></Link>
                <Link href='/directory'><a className='pr-3'>Directory</a></Link>
            </nav>
        </header>
    );
}

export default Header;
