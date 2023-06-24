import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import OmniChannel from '@components/Services/OmniChannel';
import Footer from '@components/ItInnovation/Footer';

const OmniChannelPage = () => {
  return (
    <>
      <Head>
        <title>OMNIKANAL</title>
      </Head>

      <MainLayout>
        <main>
          <OmniChannel />
        </main>
        <Footer/>
      </MainLayout>
    </>
  )
}

export default OmniChannelPage