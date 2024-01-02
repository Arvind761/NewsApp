


import { useState } from 'react'
import { Link} from 'react-router-dom'

export default function Navbar(props){
    const [search,setSearch]=useState("")
    
   function getInputData(e){
        setSearch(e.target.value)
    }
   function postData(e){
        e.preventDefault()
        props.changeSearch(search)
        setSearch(" ")
    }
  
        return (
            <nav className="navbar navbar-expand-lg bg-secondary sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/All" onClick={()=>props.changeSearch("")}>NewsApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light active" aria-current="page" to="/All" onClick={()=>props.changeSearch("")}>All</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/Politics" onClick={()=>props.changeSearch("")}>Politics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/Education" onClick={()=>props.changeSearch("")}>Education</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/Crime" onClick={()=>props.changeSearch("")}>Crime</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Other
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/Science" onClick={()=>props.changeSearch("")}>Science</Link></li>
                                    <li><Link className="dropdown-item" to="/Technology" onClick={()=>props.changeSearch("")}>Technology</Link></li>
                                    <li><Link className="dropdown-item" to="/Entertainment" onClick={()=>props.changeSearch("")}>Entertainment</Link></li>
                                    <li><Link className="dropdown-item" to="/Sports" onClick={()=>props.changeSearch("")}>Sports</Link></li>
                                    <li><Link className="dropdown-item" to="/Cricket" onClick={()=>props.changeSearch("")}>Cricket</Link></li>
                                    <li><Link className="dropdown-item" to="/Covid-19" onClick={()=>props.changeSearch("")}>Covid-19</Link></li>
                                    <li><Link className="dropdown-item" to="/Jokes" onClick={()=>props.changeSearch("")}>Jokes</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" onClick={()=>props.changeLanguage("hi")}>Hindi</button></li>
                                    <li><button className="dropdown-item" onClick={()=>props.changeLanguage("en")}>English</button></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={postData}>
                            <input className="form-control me-2" name='search' value={search} onChange={getInputData} type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    
}
