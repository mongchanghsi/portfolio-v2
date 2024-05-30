import { GenericContainer, GenericContent } from "../GenericLayout";
import { ErrorContainer, ErrorHeader, ErrorText } from "./style";

const Custom404View = () => {
  return (
    <GenericContainer>
      <GenericContent>
        <ErrorContainer>
          <ErrorHeader>404</ErrorHeader>
          <ErrorText>
            Oh no! Are you lost? We can&apos;t seem to find what are you looking
            for.
          </ErrorText>
        </ErrorContainer>
      </GenericContent>
    </GenericContainer>
  );
};

export default Custom404View;
