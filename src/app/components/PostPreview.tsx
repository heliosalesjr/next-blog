import React from 'react'
import Link from '../../../node_modules/next/link'
import { PostMetadata } from './PostMetadata'

function PostPreview(props: PostMetadata) {
  return (
    <div className='border border-indigo-300 p-4 rounded-lg shadow-lg bg-slate-800 m-2'>
      <Link href={`/posts/${props.slug}`}>
        <h2 className='font-bold hover:underline text-indigo-200'>{props.title}</h2>
        <p className='text-sm text-slate-300'>{props.date}</p>
        <p className='text-slate-200'>{props.subtitle}</p>
        
      </Link>
      
    </div>
  )
}

export default PostPreview