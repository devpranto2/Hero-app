import React from 'react';
import Banner from '../Banner/Banner';
import State from '../State/State';
import Apps from '../Apps/Apps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data=useLoaderData();
    // console.log(data)
    return (
        <div>
            <Banner></Banner>
            <State></State>
            <Apps data={data}></Apps>
        </div>
    );
};

export default Home;