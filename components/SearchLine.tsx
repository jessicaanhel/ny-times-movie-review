import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import React, { useContext } from "react";
import { useRouter } from 'next/router'
import { SearchContext } from "../pages/_app";


const SearchLine = () : JSX.Element =>  {
  const { searchWord, setSearchWord, searchHistory, setSearchHistory } = useContext(SearchContext);

  const handleChange = (keyword) => setSearchWord(keyword.target.value);
  console.log(searchWord);
  
  const handleOnclick = () => {
    setSearchHistory([...searchHistory, searchWord]);
    router.push('/search-result');
}

  const router = useRouter()
  
    return (
      <InputGroup size="md">
      <Input
        onChange={handleChange}
        placeholder='Enter the name of the movie or keyword'
        size='md'
        // value={searchWord}
      />
        <InputRightElement width="4.5rem">
          <Button onClick={handleOnclick}>
            Enter
          </Button>
        </InputRightElement>
      </InputGroup>
    )
  }

  export default SearchLine;