import React from 'react';
import Banner from '../../components/Banner';
import ImageBanner from '../../components/ImageBanner';
// import Footer from '../components/Footer';
import Movies from '../LatestArticle/LatestArticle';


export default function Home () {
  return (
    <>
      <Banner />
      <ImageBanner />
      <Movies />
      {/* <Footer /> */}
    </>
  )
}