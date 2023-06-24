import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Marknadsforning from '@components/Services/Marknadsforning';
import Footer from '@components/ItInnovation/Footer';

const MarknadsforningPage = () => {
  return (
    <>
      <Head>
        <title>Marknadsföring</title>
      </Head>

      <MainLayout>
        <main>
          <Marknadsforning />
        </main>
        <Footer/>
      </MainLayout>
    </>
  )
}

export default MarknadsforningPage