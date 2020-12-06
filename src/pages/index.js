import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';

export default () => (
    <Layout>
        <h1>Home</h1>
        <p>Hello Vancouver</p>
        <Link to="/about">&rarr; Find out more</Link>
    </Layout>
);
