function Page({ data }) {
  console.log(data);
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const queryKey = "lebowski";
  const apiKey = "nTCRt5WnuaiL5Q5VsPEgeGM8oZifd3Ma";
  const endpoint = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?";
  const createUrl = `${endpoint}query=${queryKey}&api-key=${apiKey}`;
  const res = await fetch(createUrl);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Page;
