import { MIMEType } from "@/types/mime-type";
import Text from "antd/es/typography/Text";
import { Fragment } from "react";

interface MimeTypesProps {
  mimeTypesAllowed: MIMEType[];
  andMore?: boolean;
}

function MimeTypes({ mimeTypesAllowed, andMore }: MimeTypesProps) {
  const formats = mimeTypesAllowed.map((mimeType, index, array) => {
    const key: React.Key = `${mimeType}-${index}`;

    if (index < array.length - 1) {
      return (
        <Fragment key={key}>
          <Text code>
            {mimeType}
          </Text>
          ,{" "}
        </Fragment>
      );
    }

    return (
      <Text key={key} code>
        {mimeType}
      </Text>
    );
  });

  return (
    <>
      {formats}
      {andMore && `, and more.`}
    </>
  );
}

export default MimeTypes;
