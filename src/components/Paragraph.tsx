import { theme } from "antd";
import Text, { TextProps } from "antd/es/typography/Text";

const { useToken } = theme;

interface ParagraphProps extends React.PropsWithChildren {
  type?: TextProps['type'];
}

function Paragraph({ children, type }: ParagraphProps) {
  const { token } = useToken();

  return (
    <p className="mb-[1em]">
      <Text type={type}>{children}</Text>
    </p>
  );
}

export default Paragraph;
