import { Fragment } from "react";
import Head from 'next/head'
import Navbar from "./navbar";
import Footer from "./footer";
import FooterPro from "./footerpro";

//Wraps the <component ...> from _app.js page
//help rendering page with constants like navbar, footer etc
function Layout(props){
    return(
        <Fragment>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"/>
                <meta 
                    name="description"
                    content="Winning Streaks - Stock prediction software, most effcient prediction, accuracy more than 65%"
                />
            </Head>
            <header>
                <Navbar/>
            </header>
            {props.children}
            <footer>
                <FooterPro/>
            </footer>
        </Fragment>
    )
}

export default Layout;