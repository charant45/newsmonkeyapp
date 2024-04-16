import React from 'react'

const NewsItem = (props)=> {
    let {title, description, imageUrl, newsUrl, author, date} = props;
    return (
      <div className='my-3'>
        <div className="card">
        {/* <span className='position:absolute translate-middle badge rounded-pill bg-danger' style={{right:'90%',zIndex:'1'}}>{source}</span> */}
        <img src={!imageUrl?"https://tse4.mm.bing.net/th?id=OIP.g3ki8u1_olIq8Yaz59J_bgHaFj&pid=Api&P=0":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {!author?'Unknown':author}</small></p>
          <p className="card-text"><small className="text-muted">Published on {date}</small></p>
          <a rel="noopener noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
      </div>
    )
  
}

export default NewsItem
