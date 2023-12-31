import mainStyles from '../styles/main.module.css'
import Link from 'next/link';

export default function Header() {
    return (
    <>
        <section className={mainStyles.menu}>

        <div className={mainStyles.logoname}>
            <Link href='/' className={mainStyles.homelink}>Home</Link>
        </div>

        <div className={mainStyles.pagelink}>

        <Link href="/posts/about-me" className={mainStyles.links}> About Me </Link>

        <Link href="/posts/project" className={mainStyles.links}> Projects </Link>

        <Link href="/posts/education" className={mainStyles.links}> Education </Link>
        </div>

        </section>
    </>
    );
}