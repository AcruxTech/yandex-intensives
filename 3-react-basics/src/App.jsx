import {Layout } from "./components/Layout/Layout";
import { CinemaPage } from "./pages/CinemaPage/CinemaPage";
import { cinemas } from "./constants/mock";

const test = 'Hello'

export function App() {
    return <Layout a={test}>
        <CinemaPage cinemas={cinemas}/>
    </Layout>
}