import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('./map'), { ssr: false });

export default DynamicComponent;