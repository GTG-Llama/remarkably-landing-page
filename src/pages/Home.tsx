import React from 'react';
import { Helmet } from 'react-helmet-async';
import Index from './Index';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Remarkably - AI-Powered Essay Grading for Teachers</title>
        <meta 
          name="description" 
          content="Remarkably is an AI grading platform built for real classrooms. It grades handwritten and typed essays, mirrors your personal marking style, and provides instant, high quality feedback." 
        />
      </Helmet>
      <Index />
    </>
  );
};

export default Home; 