import React from 'react'
import Link from '../../../node_modules/next/link'
import { PostMetadata } from './PostMetadata'

function PostPreview(props: PostMetadata) {
  return (
    <div className='border border-violet-300 p-4 rounded-lg shadow-lg bg-slate-100 m-2'>
      <Link href={`/posts/${props.slug}`}>
        <h2 className='font-bold hover:underline text-slate-700'>{props.title}</h2>
        <p className='text-sm text-slate-500'>{props.date}</p>
        <p className='text-slate-400'>{props.subtitle}</p>
        
      </Link>
      
    </div>
  )
}

export default PostPreview