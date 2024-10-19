
// import { Link } from "react-router-dom";


export function Navbar({name,dayLightColorSetting,showAlert}){

    const {darkStateModifier,darkModeState} =dayLightColorSetting;


    function darkModeStateHandler(){
        if(darkModeState==="light"){
            darkStateModifier('dark');
            showAlert("Dark Mode is enabled", "success",2);
        }
        else{
            darkStateModifier('light');
            showAlert("Light Mode is enabled", "success",2);
        }
    }
   

  


    return (
    <nav className={ `navbar  navbar-expand-lg navbar-head-${darkModeState}-container`  } >

    <div className={`container-fluid `}   >
        <a className="navbar-brand " >{name}</a>
        <button className="navbar-toggler "   type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className={` navbar-collapse  justify-content-between `}  id="navbarNavDropdown" >
            <ul className={`navbar-nav `} >
            <li className="nav-item">
                <a className="nav-link   active" aria-current="page" href="#"  >Home</a>
            </li>
            {/* <li className="nav-item " >
                <a className="nav-link" to="/about" >About</a>
            </li> */}
            {/* <li className="      nav-item ">
                <a className="nav-link" href="/"  >Pricing</a>
            </li> */}
            {/* <li className="nav-item dropdown "  >
                <a className="nav-link dropdown-toggle"  href="/" role="button" da
                ta-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
                </a>
            <ul className="dropdown-menu" >
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
            </li> */}
        </ul>
            <div className="form-check form-switch" >
                <input className="form-check-input" onClick={darkModeStateHandler} type="checkbox" role="switch"   id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
        </div>
    </div>
    </nav>
    );
}


