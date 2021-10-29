import "./App.scss";
import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero";
import Sections from "./components/Layout/Sections";
import PersonalProjects from "./components/PersonalProjects/PersonalProjects";
import WorkExperience from "./components/WorkExperience/WorkExperience";

function App() {
    return (
        <div className="App">
            <Header />
            <Sections>
                <Hero />
                <PersonalProjects />

                <WorkExperience />
                <div>contact</div>
            </Sections>
        </div>
    );
}

export default App;
