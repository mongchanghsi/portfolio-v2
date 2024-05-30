import Hourglass from "@/components/shared/Loaders/Hourglass";
import { PreloaderContainer } from "./style";

interface IProps {
  loading: boolean;
}

const Preloader: React.FC<IProps> = ({ loading }) => {
  return (
    <PreloaderContainer $loading={loading}>
      <Hourglass />
    </PreloaderContainer>
  );
};

export default Preloader;
