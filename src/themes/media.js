import { generateMedia } from "styled-media-query";

const media = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em",
});

export default media;
