import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './Footer'
import Header from './Header'
import MainContent from "./MainContent";

function MyApp(){
    return (
        <div>
            <Header/>
            <input type="checkbox"/>
            <p>Placeholder text</p>

            <input type="checkbox"/>
            <p>Placeholder text</p>

            <input type="checkbox"/>
            <p>Placeholder text</p>

            <input type="checkbox"/>
            <p>Placeholder text</p>

            <input type="checkbox"/>
            <p>Placeholder text</p>
            <Footer/>

        </div>
    )
}
export default  MyApp