import React from 'react';
import { AnimalsProvider } from './AnimalsContext';
import Animals from './Animals';

const AnimalContainer = () => {
  return (
    <div>
      <AnimalsProvider>
        <Animals />
      </AnimalsProvider>
    </div>
  );
};

export default AnimalContainer;