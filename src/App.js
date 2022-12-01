import {useEffect} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"

import {SetAuthToken} from "./utils/token/token"

// components
import Navbar from "./components/navbar.component"
import Footer from "./components/footer.component"

// pages
import NotFound from "./pages/not_found/notfound.page"
import HomePage from "./pages/home/home.page"
import ErasmusJournalPage from "./pages/erasmus_journal/erasmusjournal.page"
import ErasmusArticlePage from "./pages/erasmus_journal/erasmus_article.page"
import LoginPage from "./pages/registration/login.page"
import DashboardPage from "./pages/dashboards/dashboard.page";
import VocabulariesPage from "./pages/vocabulary/vocabulary.page";

import Spanish from "./pages/courses/spanish.page";
import English from "./pages/courses/english.page"

function App(){

    useEffect(() => {
        if(localStorage.token){
            SetAuthToken(localStorage.token);
        }
    }, [])

    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path={"/404"} element={<NotFound/>}/>
                    <Route path={"/"} element={<HomePage/>}/>
                    <Route path={"/jurnal-erasmus"} element={<ErasmusJournalPage/>}/>
                    <Route path={"/jurnal-erasmus/:_id"} element={<ErasmusArticlePage/>}/>
                    <Route path={"/dashboard"} element={<DashboardPage/>}/>
                    <Route path={"/courses"} element={<VocabulariesPage />}/>
                    <Route path={"/courses/spanish"} element={<Spanish />} />
                    <Route path={"/courses/english"} element={<English />} />
                    <Route path={"/login"} element={<LoginPage/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default App
