// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {details} = props
  const {id, title, description, publishedDate} = details
  return (
    <li className="list-container">
      <div className="title-published">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
      <hr />
    </li>
  )
}
export default BlogItem
