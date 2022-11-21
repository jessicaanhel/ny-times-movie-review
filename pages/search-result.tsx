import Link from 'next/link';
import { Text, Stack } from '@chakra-ui/react'
import ListOfCards from '../components/ListOfCards';
import { SearchContext, SearchContextProps } from './_app';
import { useContext, useEffect, useState } from 'react';

function SearchResult({searchResultForMapping}) {
  const [queryKey, setQueryKey] = useState('lebowski');
  const { searchWord } = useContext<SearchContextProps>(SearchContext);

    useEffect(() => {
      setQueryKey(searchWord);
    }, [searchWord]);

    // Cant send data to getServerSideProps!
    // 
    // useEffect(() => {
    //   getServerSideProps(queryKey);
    // }, [queryKey]);


    console.log(queryKey)

    if (searchResultForMapping){
      return (
        <Stack spacing={3}>
          <Text fontSize='4xl'> Search Result for keyword "{queryKey}"</Text>
            <ListOfCards movieDetails={searchResultForMapping} />
          <Text fontSize='xl'><Link href="/">Search last key word..</Link> </Text>
      </Stack>
      );
    }else {
      <Stack spacing={3}>
          <Text fontSize='4xl'> Movie does not exist</Text>
          <Text fontSize='xl'><Link href="/">Search last key word..</Link> </Text>
      </Stack>
    }}
  
  
export async function getServerSideProps(keyword?: string) {
  const queryWord = 'iron'
  const apiKey = "nTCRt5WnuaiL5Q5VsPEgeGM8oZifd3Ma";
  const endpoint = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?";
  const createUrl = `${endpoint}query=${queryWord}&api-key=${apiKey}`;
  const res = await fetch(createUrl);
  const searchResultForMapping = await res.json();

return { props: { searchResultForMapping } };}



export default SearchResult