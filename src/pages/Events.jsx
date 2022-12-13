import React from 'react'

import Header from '../components/Header'
import Newevents from '../components/NewsEvents'
import Footer from '../components/Footer'


const Events = () => {
    return (
        <div >
            <div className=" justify-center items-center text-center">
                <Header />
                <Newevents />
                <Footer />
            </div>
        </div>
    )
}

export default Events
