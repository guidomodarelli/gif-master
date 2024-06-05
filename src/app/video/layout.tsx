import { Segmented } from "antd";
import { SegmentedOptions, SegmentedValue } from "antd/es/segmented";
import { options } from "./video-options";

interface LayoutProps extends React.PropsWithChildren {}

function layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
      <nav className="layout mb-8">
        <Segmented options={options}></Segmented>
      </nav>
      {children}
    </>
  );
}

export default layout;
