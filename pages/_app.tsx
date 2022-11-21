import { ChakraProvider } from '@chakra-ui/react'
import { createContext, useMemo, useState } from 'react';

export interface SearchContextProps {
  searchWord: string;
  setSearchWord: (f: string) => void;
  searchHistory: string[]; 
  setSearchHistory: (f: string[]) => void;
}

export const SearchContext = createContext<SearchContextProps>({
  searchWord: '',
  setSearchWord: () => {
    // do nothing
  },
  searchHistory: [],
  setSearchHistory: () => {
    // do nothing
  },
});

const SearchProvider = (props: any) => {
  const [searchWord, setSearchWord] = useState('');
  const [searchHistory, setSearchHistory] = useState('');
  const value = useMemo(() => ({ searchWord, setSearchWord, searchHistory, setSearchHistory }), [searchWord]);

  return <SearchContext.Provider value={value} {...props} />;
};
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
        <SearchProvider>
          <Component {...pageProps} />
        </SearchProvider>
    </ChakraProvider>
  )
}

export default MyApp