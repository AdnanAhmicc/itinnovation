import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Molnvaxel from '@components/Services/Molnvaxel';
import Footer from '@components/ItInnovation/Footer';

const MolnvaxelPage = () => {
  return (
    <>
      <Head>
        <title>Molnväxel</title>
      </Head>

      <MainLayout>
        <main>
          <Molnvaxel />
        </main>
        <Footer/>
      </MainLayout>
    </>
  )
}

export default MolnvaxelPage