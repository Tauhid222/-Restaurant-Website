

import React from 'react'
import Layout from '../Component/Layout'
import { Link } from 'react-router-dom';
import Baner  from "../images/banner.jpeg"
import "../Style/HomeStyle.css"


const Home = () => {
  return (
    <>
    <Layout>
        <div className="home" style={{backgroundImage:`url(${Baner})`}}>
          <div className='headercontainer'> 
            <h1>Food Website</h1>
            <p>Best Food India</p>
            <Link to="/menu">
            <button>
              ORDER Now
            </button>
            </Link>
            
          </div>
        </div>
    </Layout>
    </>
  )
}

export default Home