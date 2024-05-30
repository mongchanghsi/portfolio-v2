import { GenericContainer, GenericContent } from "../GenericLayout";
import { ErrorContainer, ErrorHeader, ErrorText } from "./style";

const Custom500View = () => {
  return (
    <GenericContainer>
      <GenericContent>
        <ErrorContainer>
          <ErrorHeader>500</ErrorHeader>
          <ErrorText>Something went wrong! Try refreshing the page.</ErrorText>
        </ErrorContainer>
      </GenericContent>
    </GenericContainer>
  );
};

export default Custom500View;
