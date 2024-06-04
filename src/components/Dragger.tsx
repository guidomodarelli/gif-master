"use client";

import { InboxOutlined } from "@ant-design/icons";
import { UploadProps, App as AntdApp, UploadFile, GetProp } from "antd";
import DraggerAntd from "antd/es/upload/Dragger";
import React, { useState } from "react";
import type { DragEndEvent } from "@dnd-kit/core";
import { DndContext, PointerSensor, useSensor } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface DraggerProps {
  multiple?: boolean;
}

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

interface DraggableUploadListItemProps {
  originNode: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >;
  file: UploadFile<any>;
}

const DraggableUploadListItem = ({
  originNode,
  file,
}: DraggableUploadListItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: file.uid,
  });

  const style: React.CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition,
    cursor: "move",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      // prevent preview event when drag end
      className={isDragging ? "is-dragging" : ""}
      {...attributes}
      {...listeners}
    >
      {/* hide error tooltip when dragging */}
      {file.status === "error" && isDragging
        ? originNode.props.children
        : originNode}
    </div>
  );
};

export default function Dragger(props: DraggerProps) {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const { message } = AntdApp.useApp();
  const { multiple = false } = props;

  const sensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setFileList((prev) => {
        const activeIndex = prev.findIndex((i) => i.uid === active.id);
        const overIndex = prev.findIndex((i) => i.uid === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };

  const draggeAntdrProps: UploadProps = {
    name: "file",
    multiple,
    listType: "picture",
    fileList: fileList,
    onChange({ file, fileList }) {
      setFileList(fileList);
      if (file.status === "done") {
        message.success(`"${file.name}" file uploaded successfully.`);
      }
    },
    async onPreview(file: UploadFile) {
      let src = file.url as string;
      if (!src) {
        src = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(file.originFileObj as FileType);
          reader.onload = () => resolve(reader.result as string);
        });
      }
      const image = new Image();
      image.src = src;
      const imgWindow = window.open(src);
      imgWindow?.document.write(image.outerHTML);
    },
    itemRender(originNode, file) {
      return <DraggableUploadListItem originNode={originNode} file={file} />;
    },
  };

  return (
    <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
      <SortableContext
        items={fileList.map((i) => i.uid)}
        strategy={verticalListSortingStrategy}
      >
        <DraggerAntd {...draggeAntdrProps}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Choose or Drag and drop your file(s) here to upload.
          </p>
        </DraggerAntd>
      </SortableContext>
    </DndContext>
  );
}
