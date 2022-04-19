import React from "react";

export default function OrganizationBadge({ organization }) {
  const { avatar_url, description } = organization;

  return (
    <img
      className="w-8 h-8 object-cover rounded-full border-2 border-gray-700 mx-2 my-1"
      src={avatar_url}
    />
  );
}
