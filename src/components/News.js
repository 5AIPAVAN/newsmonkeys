import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps={
    category:'sports',
    pageSize:6
  }

  static propTypes={
         category:PropTypes.string,
         pageSize:PropTypes.number
  }

  articles=[
    // {
    //     "source": {
    //         "id": "fox-sports",
    //         "name": "Fox Sports"
    //     },
    //     "author": "Yaron Weitzman",
    //     "title": "Emotion vs. Analytics: Why James Harden and Daryl Morey were always destined to implode",
    //     "description": "How did perhaps the NBA's tightest superstar-GM partnership sour so quickly and publicly? FOX Sports spoke to nearly a dozen people connected to James Harden, Daryl Morey and the 76ers to find out.",
    //     "url": "http://www.foxsports.com/stories/nba/why-james-harden-and-daryl-morey-were-always-destined-to-implode",
    //     "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/10/1408/814/09.27.23_Inside-The-Morey-Harden-Rift_16x9.jpg?ve=1&tl=1",
    //     "publishedAt": "2023-10-03T14:00:58Z",
    //     "content": "The first time James Harden asked Daryl Morey for a favor was during the 2012-13 season, not long after the star guard had arrived in Houston. It was a small request. \r\nHarden thought the Rockets cou… [+20547 chars]"
    // },
    // {
    //     "source": {
    //         "id": "the-wall-street-journal",
    //         "name": "The Wall Street Journal"
    //     },
    //     "author": "Jessica Toonkel, Sarah Krouse",
    //     "title": "Netflix Plans to Raise Subscription Prices After Actors Strike Ends",
    //     "description": "Company to become the latest streamer to lift fees; Disney weighs launching a new live-sports tier abroad",
    //     "url": "https://www.wsj.com/business/media/netflix-price-increase-actors-strike-792de9be?mod=hp_lead_pos3",
    //     "urlToImage": "https://images.wsj.net/im-861721/social",
    //     "publishedAt": "2023-10-03T13:51:00Z",
    //     "content": null
    // },
    // {
    //     "source": {
    //         "id": "bleacher-report",
    //         "name": "Bleacher Report"
    //     },
    //     "author": null,
    //     "title": "New Travis Hunter Show ",
    //     "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
    //     "url": "https://bleacherreport.com/videos/464068-twelve-talks-with-travis-hunter-episode-5-vod",
    //     "urlToImage": null,
    //     "publishedAt": "2023-09-27T14:37:29.508984Z",
    //     "content": "Copyright © 2023 Bleacher Report, Inc. Turner Broadcasting System, Inc.\r\n All Rights Reserved.\r\n BleacherReport.com is part of Bleacher Report Turner Sports Network, part of the Turner Sports and Ent… [+200 chars]"
    // },
    // {
    //     "source": {
    //         "id": "bleacher-report",
    //         "name": "Bleacher Report"
    //     },
    //     "author": null,
    //     "title": "⭐️ New Micah Parsons Show ⭐️",
    //     "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
    //     "url": "https://bleacherreport.com/videos/464011-the-edge-with-micah-parsons-episode-3-vod",
    //     "urlToImage": null,
    //     "publishedAt": "2023-09-27T14:37:24.039991Z",
    //     "content": "Copyright © 2023 Bleacher Report, Inc. Turner Broadcasting System, Inc.\r\n All Rights Reserved.\r\n BleacherReport.com is part of Bleacher Report Turner Sports Network, part of the Turner Sports and Ent… [+200 chars]"
    // },
    // {
    //     "source": {
    //         "id": "usa-today",
    //         "name": "USA Today"
    //     },
    //     "author": null,
    //     "title": "Daily Briefing",
    //     "description": "The day's top stories, from sports to movies to politics to world events.",
    //     "url": "https://profile.usatoday.com/newsletters/daily-briefing/",
    //     "urlToImage": "https://profile.usatoday.com/newsletters/resources/usat/property/usatoday/newsletter-thumbs/8872UT-E-NLETTER02@2x.jpg",
    //     "publishedAt": "2021-08-15T15:35:07+00:00",
    //     "content": "The day's top stories, from sports to movies to politics to world events."
    // }
];

constructor(props){   // CONSTRUCTOR RUNS WHEN AN OBJECT OF THIS CLASS(News) IS CREATED
  super(props);
  console.log("CONSTRUCTOR OF NEWS COMPONENT");
  this.state={
    articles:this.articles,
    loading:false ,  
    page:1  
  }
  document.title=`NEWS APP-${this.props.category}`
}

async update(){

  let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=cb359238e8444422b53814e22b03649e&page=${this.state.page}&pagesize=${this.props.pageSize}`;
  this.setState({loading:true})
  let data =  await fetch(url);
  let parsedData = await data.json();
 
  console.log(parsedData);
  this.setState({articles:parsedData.articles,
                 Total_results:parsedData.totalResults,
                loading : false})

}
async componentDidMount(){
  console.log("componentDidMount IS RUNNING");
  
  let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=cb359238e8444422b53814e22b03649e&page=1&pagesize=${this.props.pageSize}`;
  this.setState({loading:true})
  let data =  await fetch(url);
  let parsedData = await data.json();
 
  console.log(parsedData);
  this.setState({articles:parsedData.articles,
                 Total_results:parsedData.totalResults,
                loading : false})
}

handleNext= async () => {
  console.log("NEXT CLICKED");



  if(this.state.page+1 > Math.ceil(this.state.Total_results/this.props.pageSize)){

  }else{
  // let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=cb359238e8444422b53814e22b03649e&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
  // this.setState({loading:true})
  // let data =  await fetch(url);
  // let parsedData = await data.json();

  // console.log(parsedData);
  // this.setState({articles:parsedData.articles,
  //               page:this.state.page+1,
  //             loading:false})
  //             }

  await this.setState({page:this.state.page+1})
  this.update()
}
}
 
handlePrevious= async () =>{
  console.log("PREVIOUS CLCIKED");
 
  // let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=cb359238e8444422b53814e22b03649e&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
  // this.setState({loading:true})
  // let data =  await fetch(url);
  // let parsedData = await data.json();
 
  // console.log(parsedData);
  // this.setState({articles:parsedData.articles,
  //               page:this.state.page-1,
  //             loading:false})

  await this.setState({page:this.state.page -1})
  this.update()

}

  render() {

    console.log("RENDER COMPLETED");

    return (
      <div className="container my-3">
       <h2 className="text-center" style={{margin : "35px 0px"}}>NEWS APP - TOP {(this.props.category).toUpperCase()} HEADLINES</h2>
       {this.state.loading &&<div className="text-center"><Spinner/></div>}
        {/* {this.state.articles.map((element)=>{console.log(element)})} */}
        
        <div className="row my-4">

            {!this.state.loading && this.state.articles.map((element)=>{
                    return <div className="col-md-4 my-3" key={element.url}>
                    <NewsItem source={element.source} date={element.publishedAt} author={element.author?element.author:"Unknown"} title={element.title?element.title:"No Title"} description={element.description?element.description:"No Description"} imageurl={element.urlToImage} newsurl={element.url}/>
                    </div>
                })}         

        </div>

        <div className="container d-flex justify-content-between">
          <button className="btn btn-primary" disabled={this.state.page<=1} onClick={this.handlePrevious}> &larr; Previous</button>
          <button className="btn btn-primary" disabled={this.state.page+1>Math.ceil(this.state.Total_results/this.props.pageSize)}onClick={this.handleNext} >Next &rarr;</button>
        </div>

      </div>
    )
  }
}

export default News
