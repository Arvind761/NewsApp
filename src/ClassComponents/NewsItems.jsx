// import React, { Component } from 'react'

// export default class NewsItems extends Component {
//   render() {
//     return (
//       <>
//        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
//        <div className="card" >
//             <img src={this.props.pic} height="200px"className="card-img-top" alt="..."/>
//             <div className="card-body">
//             <h5 className="card-title" style={{height:"60px"}}>{this.props.title.slice(0,100)+"...."}</h5>
//             <hr/>
//             <p className="card-text" style={{height:"130px"}}>{this.props.description.slice(0,200)}</p>
//             <a href="#" className="btn btn-secondary w-100 btn-sm">Go somewhere</a>
//   </div>
// </div>
//        </div>
//       </>
//     )
//   }
// }


import React, { Component } from 'react'

export default class NewsItems extends Component {
    render() {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="card">
                    <img src={this.props.pic} height="200px" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title" style={{height:'80px'}}>{this.props.title.slice(0,100)+"..."}</h5>
                            <hr />
                            <p className="card-text" style={{height:"180px"}}>{this.props.description && this.props.description.slice(0,300)}</p>
                            <a target="_blank" href={this.props.url} className="btn btn-secondary w-100 btn-sm">Read Full Article</a>
                        </div>
                </div>
            </div>
        )
    }
}

