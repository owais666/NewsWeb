import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {

    let{title, description,imgUrl,newsUrl,author,date} = this.props;

    return (
      <div className='my-3'>
        <div className="card" >
  <img src={imgUrl===null?"https://img.etimg.com/thumb/msid-107027276,width-1070,height-580/photo.jpg":imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title===null?"No Title":title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By {author===null?"Unknown":author} on {date.slice(0,10)} </small></p>
 
    <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
