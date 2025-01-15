import { ReactElement } from "react";
import { DotLoader } from "react-spinners";

interface ComponentProps {
  clazz: string;
}

const Spinner = ({ clazz }: ComponentProps): ReactElement => {
  return <DotLoader className={clazz} color="#5d71dd" />;
};

export default Spinner;
