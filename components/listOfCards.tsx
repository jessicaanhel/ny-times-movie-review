import React from "react";
import {Image, CardBody, Stack, Heading, Text, Card, SimpleGrid } from "@chakra-ui/react";

interface MovieDetailsProps {
  copyright: string;
  has_more: boolean;
  num_results: number;
  results: {
    byline: string;
    critics_pick: number;
    date_updated: string;
    display_title: string;
    headline: string;
    link: {
      suggested_link_text: string;
      type: string;
      url: string;
    };
    mpaa_rating: string;
    multimedia: {
      height: number;
      src: string;
      type: string;
      width: number
    }
    opening_date: string;
    publication_date: string;
    summary_short: string;
  };
  status: string;
}

const ListOfCards = ({ movieDetails }) : JSX.Element =>  {

  movieDetails.results.forEach(element => console.log(element.multimedia));


  console.log(movieDetails);

  return (
    <SimpleGrid spacing={4} >
          {movieDetails.results.map((detail) => 
      <>
      <div>
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
{
            detail.multimedia != null ? 
            <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={detail.multimedia.src}
            alt='Caffe Latte'
          /> 
          : 
          <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={"https://www.freeiconspng.com/uploads/no-image-icon-6.png"}
          alt='Caffe Latte'
        />
        } 
  <Stack>
    <CardBody>
      <Heading size='md'>{detail.display_title}</Heading>
      <Text py='2'>{detail.summary_short}
      </Text>
    </CardBody>
    </Stack>
    </Card>
    </div>
    </>
    )}
    </SimpleGrid>
    );
}

export default ListOfCards;
