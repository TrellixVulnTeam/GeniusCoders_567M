import React from 'react'
import { Link } from 'react-router-dom'

const BlogItem = ({title,id,img}) => {
  return (
<div className="card col-12 col-sm-12 col-md-4" >
<img src={img} className="card-img-top" alt="err" />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>

    <Link to={`blog/${id}`} className="btn btn-primary">Description</Link>
  </div>
</div>
  )
}

export default BlogItem