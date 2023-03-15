import { Box, Link, Typography, styled } from "@mui/material";

const TextContainer = styled("div")(({ theme }) => ({
  width: "50%",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(https://w.wallhaven.cc/full/l3/wallhaven-l397kr.png)`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      padding={8}
    >
      <TextContainer>
        <Typography variant="h2" color="white" mb={4}>
          Title of a longer featured blog post
        </Typography>
        <Typography variant="body1" color="white" mb={2}>
          Multiple lines of text that form the lede, informing new readers quickly and efficiently
          about what's most interesting in this post's contents.
        </Typography>
        <Link fontFamily="Roboto,Helvetica,Arial,sans-serif">Continue reading...</Link>
      </TextContainer>
    </Box>
  );
};

export default Hero;
