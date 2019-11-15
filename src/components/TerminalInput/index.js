import React from "react"
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"

import Hit from "./Hit"

import * as S from "../../styles/components/terminalinput"

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME
}

let noResultsLoad = true;

const algoliaClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey);

const searchClient = {
  search(requests) {
    if (noResultsLoad === true) {
      noResultsLoad = false;
      return;
    }
    return algoliaClient.search(requests);
  },
};

const TerminalInput = () => {
  return (
    <S.TerminalInputWrapper>
      <InstantSearch 
        searchClient={searchClient} 
        indexName={algolia.indexName}
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
}

export default TerminalInput