import React from 'react'
import SearchForm from '../components/searchForm'
import BlogPost from '../components/BlogPost'

const page = async({searchParams} : {searchParams : {query?: string}}) => {

    const query = (await searchParams).query || "";
    const posts= [{
      createdAt: 'yesterday',
      views:55,
      author:{'name':'khushboo'},
      _id:1,
      description:"Here is the description",
      image:"https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category:"robots",
      title:"we rebots"


    }]

  return (<>
  <div className='pink_container'>
        <div className='y-heading'>pitch, vote, and grow</div>
        <h1 className='heading'>pitch your startup and <br/>connect with entrepreneurs</h1>
        <p className='sub-heading |max-w-2xl'>Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competions</p>
        <SearchForm query={query}/>
  </div>
  <section className="section-post">
    <p>{query? `Search results for ${query}`: 'All StartUps'}</p>
    {posts?.length >0 ? (
      
      posts.map((post : BlogType, index: number)=>(
        <BlogPost key={post?._id} post={post}/>
      ))
      ) : (
      <p>No StartUp Found </p>

    )} 
  </section>
   
  </>
  )
}

export default page