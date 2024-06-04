"use client";

import Dragger from "@/components/Dragger";
import { MediaType } from "@/types/media-type";
import { MIMEType } from "@/types/mime-type";
import { Button } from "antd";
import Text from "antd/es/typography/Text";
import MimeTypes from "../MimeTypes";
import Paragraph from "../Paragraph";
import "./styles.css";

interface UploadFilesProps {
  multiple?: boolean;
  filesLimit?: number;
  mediaType?: MediaType;
  buttonLabel: string;
  mimeTypesAllowed: MIMEType[];
  andMoreMimeTypes?: boolean;
  /* This property is likely intended to specify the
  maximum file size (in MB) allowed for file uploads in the component, giving developers
  a way to set a limit on the size of files that can be uploaded. */
  maxSize?: number;
}

export default function UploadFiles(props: UploadFilesProps) {
  const {
    multiple = false,
    filesLimit = 2000,
    mediaType = "file",
    maxSize = 200,
    buttonLabel,
    mimeTypesAllowed,
    andMoreMimeTypes = false,
  } = props;

  return (
    <article className="flex flex-col gap-8">
      <main className="flex flex-col gap-4">
        <Dragger multiple />
        {/* TODO */}
        {/* <form className="flex gap-2 sm:items-end sm:flex-row flex-col">
          <label className="flex flex-col w-full max-w-[540px]">
            <Text>Or enter the {mediaType} URL</Text>
            <Space.Compact>
              <Input addonBefore="https://" placeholder="www.google.com" />
              <Button htmlType="submit">Agregar</Button>
            </Space.Compact>
          </label>
        </form> */}
        <ul>

        </ul>
      </main>
      <footer>
        <Button className="mb-[1em]" type="primary">
          {buttonLabel}
        </Button>
        <Paragraph>
          Supported {mediaType} types:{" "}
          <MimeTypes
            mimeTypesAllowed={mimeTypesAllowed}
            andMore={andMoreMimeTypes}
          />
        </Paragraph>
        {multiple && (
          <Paragraph>
            You can upload up to {filesLimit} files. Multiple files can be
            selected, or you can upload <Text code>zip</Text>,{" "}
            <Text code>7z</Text>, or <Text code>rar</Text> archives containing
            images.
          </Paragraph>
        )}
        <Paragraph>
          The total maximum allowed size for a file or set of files is {maxSize}{" "}
          MB.
        </Paragraph>
        <Paragraph type="secondary">
          All uploaded files are automatically deleted 1 hour after upload.
        </Paragraph>
      </footer>
    </article>
  );
}
