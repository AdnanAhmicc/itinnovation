import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Webbutveckling from '@components/Services/Webbutveckling';
import Footer from '@components/ItInnovation/Footer';

const WebbutvecklingPage = () => {
  return (
    <>
      <Head>
        <title>Webbutveckling</title>
      </Head>

      <MainLayout>
        <main>
          <Webbutveckling />
        </main>
        <Footer/>
      </MainLayout>
    </>
  )
}

export default WebbutvecklingPage