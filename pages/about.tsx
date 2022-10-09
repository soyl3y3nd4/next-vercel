import Link from "next/link";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";

export default function AboutPage() {
    return (
        <>
            <h1>About Page</h1>
            <h2 className='title'>
                Ir a <Link href='/contact'>Contact</Link>
            </h2>

            <p className='description'>
                Get started by editing <code className='code'>pages/about.jsx</code>
            </p>
        </>
    );
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
    return (
        <MainLayout>
            <DarkLayout>{page}</DarkLayout>
        </MainLayout>
    );
};
