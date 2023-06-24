import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import BredBand from '@components/Services/Bredband';
import Footer from '@components/ItInnovation/Footer';
const BredBandPage = () => {
  return (
    <>
      <Head>
        <title>BredBand</title>
      </Head>

      <MainLayout>
        <main>
          <BredBand />
        </main>
        <Footer/>
      </MainLayout>
    </>
  )
}

export default BredBandPage;