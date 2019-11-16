import React, { Component } from "react"
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"

import Hit from "./Hit"

import * as S from "../../styles/components/terminalinput"

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME
}

class TerminalInput extends Component{
  constructor(props) {
    super(props)
    this.onSearchStateChange = this.onSearchStateChange.bind(this)
    this.state = {goSearch: false, searchState: {}}
  }
    
  onSearchStateChange = searchState => {
    if(searchState.query.length>1){
      this.setState({
        goSearch: true
      })
    }else{
      this.setState({
        goSearch: false
      })
    }
    this.setState({
      searchState: searchState
    })
  }

  render(){
    const goSearch = this.state.goSearch;
    const algoliaClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)
    if (goSearch) {
      const searchClient = {
        search(requests) {        
          return algoliaClient.search(requests);
        }
      }
      return(
        <S.TerminalInputWrapper>
          <InstantSearch 
            searchClient={searchClient} 
            indexName={algolia.indexName}
            searchState={this.state.searchState}
            onSearchStateChange={this.onSearchStateChange}
          >
            <SearchBox autoFocus translations={{ placeholder: "Pesquisar..." }} />
            <Hits hitComponent={Hit} />
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
      const searchClient = {
        search(requests) {        
          return algoliaClient.search(requests);
        }
      }
      return(
        <S.TerminalInputWrapper>
          <InstantSearch 
            searchClient={searchClient} 
            indexName={algolia.indexName}
            searchState={this.state.searchState}
            onSearchStateChange={this.onSearchStateChange}
          >
            <SearchBox autoFocus translations={{ placeholder: "Pesquisar..." }} />
          </InstantSearch>
        </S.TerminalInputWrapper>
      )
    }
  }
}

export default TerminalInput