import { Box } from "@mui/material";

const Error = () => {
  return (
    <Box sx={{
      fontStyle: 'italic',
      ml: '1rem',
    }}>
      <h1>Oh no!</h1>
      <p>Something went wrong.</p>
    </Box>
  )
}

export default Error