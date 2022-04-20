import React from "react";

export default function EmptyState(props) {
  const {title} = props;
  return (
    <div className="flex flex-col items-center">
      <h1 className="pb-6 text-lg font-medium text-gray-400 p-8">There is no {title}</h1>
    </div>
  );
}
