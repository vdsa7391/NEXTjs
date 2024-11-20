import React from 'react'
import Form from 'next/form'
import Resetbtn from '../components/resetbtn'
import { FaSearch } from "react-icons/fa";

const searchForm = ({query}: {query?: string}) => {


  return (
    <Form action={'/'} scroll={false} className='search_form'>
        <input type="text" name='query' defaultValue={query} placeholder='Search Startups' className='search_form-input'/>
        {query && <Resetbtn/> }
        <button className='search_form-btn ' type='submit'><FaSearch /></button>
    </Form>
  )
}

export default searchForm