import Link from 'next/link';
import { Text, Stack, Box, SimpleGrid, IconButton, Button, useQuery } from '@chakra-ui/react'
import ListOfCards from '../components/ListOfCards';
import { useEffect, useState } from 'react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router'

export const lastFiveSearchings = [];

const SearchResult = () => {
  const [showResult, setShowResult] = useState([]);
  const [keyword, setKeyword] = useState((useRouter().query.keyword || '').toString());

  const apiKey = "nTCRt5WnuaiL5Q5VsPEgeGM8oZifd3Ma";
  const endpoint = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?";

  let openMovieDoesntExist = false;

  useEffect(()=>{
    (async()=>{
        const createUrl = `${endpoint}query=${keyword}&api-key=${apiKey}`;
        const res = await fetch(createUrl);
      const searchResult = await res.json();
      setShowResult(searchResult.results);
    })()
    if (lastFiveSearchings.length >5){
      lastFiveSearchings.shift();
      lastFiveSearchings.push(keyword)

    }
    else if (keyword === undefined || keyword === '') {
      openMovieDoesntExist = true;
    }
    lastFiveSearchings.push(keyword);
  },[keyword]);

  console.log(lastFiveSearchings);

  const areReviews = showResult != null;

  if (areReviews){
    return (
      <><Button leftIcon={<ChevronLeftIcon />} colorScheme='pink' variant='solid' position='absolute' right='20px;' top='25px'>
      <Link href="/">Home</Link>
    </Button>
      <Box p={5}>
        <SimpleGrid gap={12} p={12} columns={1}>
          <Text fontSize='4xl'> Search Result for keyword "{keyword}"</Text>
          <Stack spacing={3} rowGap={3}>
            <ListOfCards movieDetails={showResult} />
          </Stack>
        </SimpleGrid>
      </Box></>
    );
  } 
  else if (openMovieDoesntExist || showResult === null){
    <Box p={5}>
    <Stack spacing={3}>
        <Text fontSize='4xl'> Movie does not exist</Text>
        <Text fontSize='xl'><Link href="/">Search last key word..</Link> </Text>
    </Stack>
    </Box>
  }
}
  

export default SearchResult