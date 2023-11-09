// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Navbar() {
//   return (
//     <>
//         <nav className="navbar navbar-expand-lg bg-secondary sticky-top">
//   <div className="container-fluid">
//     <Link className="navbar-brand text-light" to="#">NewsApp</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <Link className="nav-link text-light active" aria-current="page" to="/All">All</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link text-light" to="/Politics">Politics</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link text-light" to="/Education">Education</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link text-light" to="/Crime">Crime</Link>
//         </li>
        
//         <li className="nav-item dropdown">
//           <Link className="nav-link text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </Link>
//           <ul className="dropdown-menu">
//             <li><Link className="dropdown-item" to="/Science">Science</Link></li>
//             <li><Link className="dropdown-item" to="/Technology">Technology</Link></li>
//             <li><Link className="dropdown-item" to="/Entertainment">Entertainment</Link></li>
//             <li><Link className="dropdown-item" to="/Sports">Sports</Link></li>
//             <li><Link className="dropdown-item" to="/Cricket">Cricket</Link></li>
//             <li><Link className="dropdown-item" to="/Covid-19">Covid-19</Link></li>
//             <li><Link className="dropdown-item" to="/Jokes">Jokes</Link></li>
//           </ul>
//         </li>
//         <li className="nav-item dropdown">
//           <Link className="nav-link text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Language
//           </Link>
//           <ul className="dropdown-menu">
//             <li><Link className="dropdown-item" to="#">Hindi</Link></li>
//             <li><Link className="dropdown-item" to="#">English</Link></li>
//           </ul>
//         </li>
        
        
//       </ul>
//       <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-light" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
//     </>
//   )
// }



import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    constructor(){
        super()
        this.state = {
            search:""
        }
    }
    getInputData(e){
        this.setState({search:e.target.value})
    }
    postData(e){
        e.preventDefault()
        this.props.changeSearch(this.state.search)
        this.setState({search:""})
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-secondary sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/All" onClick={()=>this.props.changeSearch("")}>NewsApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light active" aria-current="page" to="/All" onClick={()=>this.props.changeSearch("")}>All</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/Politics" onClick={()=>this.props.changeSearch("")}>Politics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/Education" onClick={()=>this.props.changeSearch("")}>Education</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/Crime" onClick={()=>this.props.changeSearch("")}>Crime</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Other
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/Science" onClick={()=>this.props.changeSearch("")}>Science</Link></li>
                                    <li><Link className="dropdown-item" to="/Technology" onClick={()=>this.props.changeSearch("")}>Technology</Link></li>
                                    <li><Link className="dropdown-item" to="/Entertainment" onClick={()=>this.props.changeSearch("")}>Entertainment</Link></li>
                                    <li><Link className="dropdown-item" to="/Sports" onClick={()=>this.props.changeSearch("")}>Sports</Link></li>
                                    <li><Link className="dropdown-item" to="/Cricket" onClick={()=>this.props.changeSearch("")}>Cricket</Link></li>
                                    <li><Link className="dropdown-item" to="/Covid-19" onClick={()=>this.props.changeSearch("")}>Covid-19</Link></li>
                                    <li><Link className="dropdown-item" to="/Jokes" onClick={()=>this.props.changeSearch("")}>Jokes</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" onClick={()=>this.props.changeLanguage("hi")}>Hindi</button></li>
                                    <li><button className="dropdown-item" onClick={()=>this.props.changeLanguage("en")}>English</button></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={(e)=>this.postData(e)}>
                            <input className="form-control me-2" name='search' value={this.state.search} onChange={(e)=>this.getInputData(e)} type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}
