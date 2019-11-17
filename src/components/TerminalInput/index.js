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

const TerminalInput = () => {

  const algoliaClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

  const [searching,setSearching] = useState(false)
  const [searchState, setSearchState] = useState()

  function handleSearchState(){
    setSearchState(searchState)
  }

  const searchClient = {
    search(requests) {        
      return algoliaClient.search(requests);
    }
  }

  function onSearchStateChange(searchState) {
    // && searchState.query.charAt(0)!=='/'
    if(searchState.query.length>1){
      setSearching(true)
      handleSearchState()
    }else{
      setSearching(false)
    } 
  }
  if(searching){
    return(
      <S.TerminalInputWrapper>
        <InstantSearch 
          searchClient={searchClient} 
          indexName={algolia.indexName}
          searchState={searchState}
          onSearchStateChange={onSearchStateChange}
        >
          <SearchBox autoFocus translations={{ placeholder: "Pesquisar..." }} />
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
          <SearchBox autoFocus translations={{ placeholder: "Pesquisar..." }} />
        </InstantSearch>
      </S.TerminalInputWrapper>
    )
  }

}

export default TerminalInput