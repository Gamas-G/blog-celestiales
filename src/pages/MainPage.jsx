import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { LandingPage } from "./LandingPage"
import { BlogPage } from "./BlogPage"
import { ViewPage } from "./ViewPage"




export const MainPage = () =>{

    return(
        <Router>
            <Routes>
                <Route path="/" element={ <LandingPage />}/>
                <Route path="/blog" element={ <BlogPage />}/>
                {/* <Route path="/blog/view" element={ <ViewPage />}/> */}

                <Route path="*" element={ <LandingPage />}/>
            </Routes>
        </Router>
    )
}