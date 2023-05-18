import { Skeleton, Box } from '@mui/material';
const SkeletonText = () => {
  return <Skeleton
    sx={{
      bgcolor: 'grey.900',
      m: "0 1rem"
    }}
    variant="text"
  />
}

const SkeletonCard = () => {
  let key = 1;
  const texts = Array(3);
  for (let i = 0; i < texts.length; i++) {
    texts[i] = <SkeletonText key={key++} />
  }

  return (
    <Box sx={{
      m: "1rem 0",
      width: "100%",
      maxWidth: "450px"
    }}
    >
      <Skeleton
        sx={{
          bgcolor: 'grey.900',
          m: "0 1rem",
          mb: "1rem"
        }}
        width={150}
        height={50}
        variant="text"
      />
      <Skeleton
        sx={{
          bgcolor: 'grey.900',
          m: "0 1rem",
          mb: "1rem"
        }}
        height={150}
        variant="rounded"
      />
      {texts}
      <Skeleton
        sx={{
          bgcolor: 'grey.900',
          display: 'inline-block',
          m: "0 1rem",
        }}
        width={80}
        variant="text"
      />
    </Box>
  )
}

const LoadingPage = () => {
  let key = 1;
  const cards = Array(9);
  for (let i = 0; i < cards.length; i++) {
    cards[i] = <SkeletonCard key={key++} />
  }

  return <>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        flexWrap: "wrap"
      }}
    >
      {cards}
    </Box>
  </>
}


export default LoadingPage