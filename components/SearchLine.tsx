import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import React, { useContext, useState } from "react";
import { useRouter } from 'next/router'


const SearchLine = () : JSX.Element =>  {
  const [searchWord, setSearchWord ] = useState('');
  const [ searchHistory, setSearchHistory] = useState([]);

  const router = useRouter()

  const handleChange = (keyword) => setSearchWord(keyword.target.value);
  
  const handleOnclick = () => {
    setSearchHistory([...searchHistory, searchWord]);
    router.push({
      pathname: '/search-result',
      query: { keyword: searchWord, history: searchHistory },
  })
}
  
    return (
      <InputGroup size="md">
      <Input
        onChange={handleChange}
        placeholder='Enter the name of the movie or keyword'
        size='md'
        value={searchWord}
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