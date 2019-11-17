import React, { useState } from "react"
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"

import PostLoop from "./PostLoop"

import * as S from "../../styles/components/terminalinput"

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME
}

const TerminalInput = (props) => {

  const algoliaClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

  const [searchState, setSearchState] = useState()
  
  let [isSearching,setIsSearching] = useState(false)
  
  function handleSearchState(){
    setSearchState(searchState)
  }

  const searchClient = {
    search(requests) {        
      return algoliaClient.search(requests)
    }
  }

  function onSearchStateChange(searchState) {
    if(searchState.query.length>1){
      handleSearchState()
    }    
  }
  
  const handleInputChange = (e) =>{
    // && e.target.value.charAt(0)!=='/'
    if(e.target.value.length>1){
      setIsSearching(true)
    }else{
      setIsSearching(false)
    } 
    props.setIsSearching(e)
    console.log(isSearching)
  }

  if(isSearching){
    return(
      <S.TerminalInputWrapper>
        <InstantSearch 
          searchClient={searchClient} 
          indexName={algolia.indexName}
          searchState={searchState}
          onSearchStateChange={onSearchStateChange}
        >
          <SearchBox 
            autoFocus 
            focusShortcuts={['/']}
            translations={{ placeholder: "Pesquisar..." }} 
            onChange={e => handleInputChange(e)}
          />
          <Hits hitComponent={PostLoop} />
          <Stats
            translations={{
              stats(nbHits, timeSpentMs) {
                return `${nbHits} resultados encontrados em ${timeSpentMs}ms`
              },
            }}
          />
        </InstantSearch>
      </S.TerminalInputWrapper>
    )
  }else{
    return(
      <S.TerminalInputWrapper>
        <InstantSearch 
          searchClient={searchClient} 
          indexName={algolia.indexName}
          searchState={searchState}
          onSearchStateChange={onSearchStateChange}
        >
          <SearchBox 
            autoFocus 
            focusShortcuts={['/']}
            translations={{ placeholder: "Pesquisar..." }} 
            onChange={e => handleInputChange(e)}
          />
        </InstantSearch>
      </S.TerminalInputWrapper>
    )
  }
}

export default TerminalInput