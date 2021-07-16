import React from 'react'

import addproject from '../images/addproject.png'
import learn from '../images/learn.png'
import earning from '../images/earning.png'



const Home = () => {
    return (
        <>
        <section className="h-section"></section>
        <section className="top-section">
            <div className="displaypic" id="displaypic">
            <img className="mySlides" alt="error" src={addproject} />
            <img className="mySlides" alt="error" src={learn} />
            <img className="mySlides" alt="error" src={earning} />
            </div>
            <div class="para" id="displaypic">
                <h2 className="headers">Add your project</h2>
                <h2 className="headers">Learn by projects</h2>
                <h2 className="headers">Earn by projects</h2>
            </div>
        </section>
         </>
    )
}

export default Home
