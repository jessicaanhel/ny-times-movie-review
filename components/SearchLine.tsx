import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import React, { useState } from "react";
import { useRouter } from 'next/router'
import Link from "next/link";


const SearchLine = () : JSX.Element =>  {
  const [searchWord, setSearchWord ] = useState('');

  const router = useRouter()

  const handleChangeForKeyWord = (keyword) => setSearchWord(keyword.target.value);
  
  const handleOnclickForSearchButton = () => {
    router.push({
      pathname: '/search-result',
      query: { keyword: searchWord},
  })
}
  
    return (
      <InputGroup size="md">
      <Input
        onChange={handleChangeForKeyWord}
        placeholder='Enter the name of the movie or keyword'
        size='md'
        value={searchWord}
      />
        <InputRightElement width="4.5rem">
          <Button onClick={handleOnclickForSearchButton}>
            Enter
          </Button>
        </InputRightElement>
      </InputGroup>
    )
  }

  export default SearchLine;