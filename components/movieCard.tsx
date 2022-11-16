import { Card, Image, CardBody, Stack, Heading, Text } from "@chakra-ui/react";

export default function CardWparrerwithMovie(title: string, movie_image: string) {
return (
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={movie_image}
    alt={title}
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{title}</Heading>

      <Text py='2'>
        blablabla
      </Text>
    </CardBody>
  </Stack>
</Card>
)}


