import React from 'react'
import './textCard.css'

const TextCard = ({title}) => {
  return (
    <article className='textCardArticle'>
        <h2>{title}</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, excepturi deleniti iure natus sed doloremque quaerat illo, cum architecto inventore magnam nam vel hic, neque illum distinctio ea molestias? Nobis libero dolores assumenda amet esse unde facilis aspernatur possimus incidunt, perspiciatis temporibus, hic error rerum, accusantium voluptatibus quidem fuga ratione.</p>
    </article>
  )
}

export default TextCard