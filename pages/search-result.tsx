import Link from 'next/link';
import { Text, Stack, Box, SimpleGrid, IconButton, Button } from '@chakra-ui/react'
import ListOfCards from '../components/ListOfCards';
import { SearchContext, SearchContextProps } from './_app';
import { useContext, useEffect, useState } from 'react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

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

    if (searchResultForMapping){
      return (
        <><Button leftIcon={<ChevronLeftIcon />} colorScheme='pink' variant='solid' position='absolute' right='20px;' top='25px'>
        Home
      </Button>
        <Box p={5}>
          <SimpleGrid gap={12} p={12} columns={1}>
            <Text fontSize='4xl'> Search Result for keyword "{queryKey}"</Text>
            <Stack spacing={3} rowGap={3}>
              <ListOfCards movieDetails={searchResultForMapping} />
            </Stack>
            <Text fontSize='xl'><Link href="/">Search last key word..</Link> </Text>
          </SimpleGrid>
        </Box></>
      );
    }else {
      <Box p={5}>
      <Stack spacing={3}>
          <Text fontSize='4xl'> Movie does not exist</Text>
          <Text fontSize='xl'><Link href="/">Search last key word..</Link> </Text>
      </Stack>
      </Box>
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