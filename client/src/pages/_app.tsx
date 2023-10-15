import React from 'react';
// import PropTypes from 'prop-types';
import Head from 'next/head';
 import './app.css';
import Layout from '../components/layout/Layout';

// Define the main App component
function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>My Next.js App</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}

// // Define the prop types for the MyApp component
// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   pageProps: PropTypes.object.isRequired,
// };

export default MyApp;