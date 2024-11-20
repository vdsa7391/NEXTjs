import React from 'react'
import SearchForm from '../components/searchForm'

const hero = async({searchParams} : {searchParams : {query?: string}}) => {

    const query = searchParams.query || "";
    console.log(query)
    


  return (
  <div className='pink_container'>
    
        <div className='y-heading'>pitch, vote, and grow</div>
        <h1 className='heading'>pitch your startup and <br/>connect with entrepreneurs</h1>
        <p className='sub-heading |max-w-2xl'>Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competions</p>
        <SearchForm query={query}/>



  </div>
   

  )
}

export default hero