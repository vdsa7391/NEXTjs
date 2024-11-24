import React from 'react'
import {formatDate} from './../(root)/lib/utils'
import { FaRegEye } from "react-icons/fa";
import Link from 'next/link'

const BlogPost = ({post}:{post:BlogType}) => {

  const {createdAt, views, author, _id, title} = post;


  return (
    <li className='Blog-post list-none'>
      <div className='flex justify-between w-full'>
        <p>{formatDate(createdAt)}</p>
        <div className='flex gap-1.5'>
          <FaRegEye className='size-6 text-primary' />
          <span>{views}</span>
        </div>
      </div>

      
        <p>{author.name}</p>
        <Link href={`/blog/${_id}`}>
          <h3 className='text-26-semibold line-clamp-1'>{title}</h3>
        
        </Link>

      
      
    </li>
  )
}

export default BlogPost