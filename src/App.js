import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Dropdown from "./components/Dropdown";
import EmployeeDropdown from "./components/Main";
import Newdropdown from "./components/Newdropdown";
import Cardlogo from "./components/Cardlogo";
import Date from "./components/Date";
import Lottiimage from "./components/Lottiimage";


function App() {
  let todos = [{
    sno:1,
    title:"Go to the market",
    desc:"you need to go to the market to get this job done1"
},
{
    sno:2,
    title:"Go to the mall",
    desc:"you need to go to the mall to get this job done2"
},
{
    sno:3,
    title:"Go to the ghat",
    desc:"you need to go to the ghat to get this job done3"
}

]
  return (
    <>
  

    <Header title="My Todos list" searchBar={true}/>
    <Lottiimage/>
    {/* <Todos todos={todos}/> */}
    <div>
      <Date/>
     <Cardlogo/>
    <Dropdown/>
    {/* <EmployeeDropdown/> */}

    {/* <Newdropdown/> */}
    </div>

    <Main/>

    
    
    {/* <Footer/> */}
    </>
  );
}

export default App;
