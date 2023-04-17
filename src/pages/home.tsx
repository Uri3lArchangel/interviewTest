import React from 'react';
import { Header, Hero, How, Events, Stream, Footer } from '../components';

interface props{
  infurakey:any;
  formatic:any
}

export default function Home({infurakey,formatic}:props) {
  return (
    <>
      <Header infurakey={infurakey} formatic={formatic} />
      <Hero />
      <How />
      <Events />
      <Stream />
      <Footer />
    </>
  );
}