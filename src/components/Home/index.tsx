import {
  HomeContainer,
  HomeDescription,
  HomeTitle,
  HomeTitleSpan,
} from "./style";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>
        Hey, <HomeTitleSpan>Eric</HomeTitleSpan> here
      </HomeTitle>
      <HomeDescription>
        Meet a software engineer who's great at making websites look awesome and
        work smoothly. Experienced in building and optimizing performance for
        significant, impactful large-scale projects.
      </HomeDescription>
      <TypeAnimation
        sequence={[
          "init()",
          2000,
          "dev()",
          2000,
          "debug()",
          2000,
          "test()",
          2000,
          "deploy()",
          2000,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{
          fontSize: "32px",
          display: "inline-block",
          color: "#DEDEDE",
          lineHeight: "100%",
          fontFamily: "monospace",
          backgroundColor: "#2e2e2e",
          padding: "8px 0 8px 12px",
          borderRadius: "4px",
        }}
      />
    </HomeContainer>
  );
};

export default Home;
