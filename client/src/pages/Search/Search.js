import React, { useState } from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import SearchForm from '../../components/SearchForm'
import Results from '../../components/Results'

const SearchPage = () => {
    

    return (
        <>
            <Navbar />
            <Header />
            <SearchForm />
            <Results>
                
            </Results>
        </>
    )
}

export default SearchPage