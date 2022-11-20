import Link from 'next/link';
import { Text, Stack } from '@chakra-ui/react'
import { ModalProvider } from '../components/modal';
import ListOfCards from '../components/listOfCards';

export default function SearchResult({searchResultForMapping}) {
    return (
      <Stack spacing={3}>
        <Text fontSize='4xl'> Search Result here</Text>
        <ModalProvider>
          <ListOfCards movieDetails={searchResultForMapping} />
        </ModalProvider>
        <Text fontSize='xl'><Link href="/">Search last key word..</Link> </Text>
    </Stack>
    );
  }
  
  export async function getServerSideProps() {
    const queryKey = "iron";
    const apiKey = "nTCRt5WnuaiL5Q5VsPEgeGM8oZifd3Ma";
    const endpoint = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?";
    const createUrl = `${endpoint}query=${queryKey}&api-key=${apiKey}`;
    const res = await fetch(createUrl);
    const searchResultForMapping = await res.json();
  
    return { props: { searchResultForMapping } };
  }