import { ComponentProps, ReactNode } from "react";

import { Loader } from "@/uiKit/Loader/style";
import { StyledAsyncBody } from "./style";

interface IAsyncProps extends ComponentProps<typeof StyledAsyncBody> {
  isLoading?: boolean;
  children?: ReactNode;
}

function Async({ isLoading, children, ...props }: IAsyncProps) {
  return isLoading ? (
    <StyledAsyncBody {...props}>
      <Loader />
    </StyledAsyncBody>
  ) : (
    children
  );
}

export default Async;
