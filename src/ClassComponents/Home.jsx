// import React, { Component } from 'react'
// import NewsItems from './NewsItems'

// export default class Home extends Component {
//     constructor(){
//         super()
//         this.state={
//             articles:[],
//             totalResults:0
//         }
//     }
//     async getApiData(){
//         var response = await fetch("https://newsapi.org/v2/everything?q=all&pageSize=20&Language=hi&apiKey=5d89d1b8f19b47be9a8d88bde54f59cf")
//         var result=await response.json()
//         this.setState({
//             articles:result.articles,
//             totalResults:result.totalResults
//         })

//     }
// componentDidMount(){
//     this.getApiData()
// }
// componentDidUpdate(old){
//     if(this.props.q!==old.q){
//         this.getApiData()
//     }
// }
//   render() {
//     return (
//       <div className='container-fluid'>
//       <div className="row">
//         {
//             this.state.articles.map((item,index)=>{
//                 return <NewsItems 
//                 key={index}
//                 title={item.title}
//                 source={item.source}
//                 description={item.description}
//                 pic={item.urlToImage}
//                 date={item.publishedAt}
//                 url={item.url}

//                 />
//             })
//         }
//       </div>
        
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'
import NewsItems from './NewsItems'
// import InfiniteScroll from "react-infinite-scroll-component";
export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            totalResults: 0,
            page:1
        }
    }
    async getApiData() {
        this.setState({page:1})
        if (this.props.search !== "")
            var response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&page=${this.state.page}&pageSize=20&language=${this.props.language}&apiKey=93b7a952ae0c462390338b7e15d3ce8e`)
        else
            var response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&page=${this.state.page}&pageSize=20&language=${this.props.language}&apiKey=93b7a952ae0c462390338b7e15d3ce8e`)
        var result = await response.json()
        this.setState({
            articles: result.articles,
            totalResults: result.totalResults
        })
    }
    fetchMoreData = async()=>{
        this.setState({page:this.state.page+1})
        if (this.props.search !== "")
            var response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&page=${this.state.page}&pageSize=20&language=${this.props.language}&apiKey=93b7a952ae0c462390338b7e15d3ce8e`)
        else
            var response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&page=${this.state.page}&pageSize=20&language=${this.props.language}&apiKey=93b7a952ae0c462390338b7e15d3ce8e`)
        var result = await response.json()
        this.setState({
            articles: this.state.articles.concat(result.articles)
        })
    }
    componentDidMount() {
        this.getApiData()
    }
    componentDidUpdate(old) {
        if (this.props.q !== old.q || this.props.language !== old.language || this.props.search !== old.search)
            this.getApiData()
    }
    render() {
        return (
            <div className='container-fluid'>
                <h5 className='text-center p-2'>{(this.props.search && this.props.search) || this.props.q} News Section</h5>
                {/* <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length<this.state.totalResults}
                    loader={<h4 className='text-center'>Loading...</h4>}
               ></InfiniteScroll> */}
                    <div className="row">
                        {
                            this.state.articles.map((item, index) => {
                                return <NewsItems
                                    key={index}
                                    title={item.title}
                                    source={item.source}
                                    description={item.description}
                                    pic={item.urlToImage}
                                    date={item.publishedAt}
                                    url={item.url}
                                />
                            })
                        }
                    </div>
                {/* </InfiniteScroll> */}
            </div>
        )
    }
}
