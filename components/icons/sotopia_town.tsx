import Image from 'next/image';
import sotopiaTown from '../../public/island_only.svg'
export default function sotopiaLogo({ className }: { className?: string }) {
    return (
        <div className={className}>
            <Image src={sotopiaTown} alt="Sotopia Town"/>
        </div>
    );
}