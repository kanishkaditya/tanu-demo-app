import Header from "./components/header.js";
import './stylesheets/general.css';
import './stylesheets/header.css';
import './stylesheets/about.css';
import './stylesheets/interest.css';
import CustomBody from "./components/interest.js";
export default function App(){
    return (
        <div>
        <Header/>
        <CustomBody heading='About Me' discription='I am a frontend developer and recent graduate of the University of Washington. I have experience in HTML, CSS, and JavaScript, and I am currently learning React.'/>
        <CustomBody heading='Interest' discription='I am interested in learning more about React and how to use it to build websites.'/>
        </div>
    )
}
