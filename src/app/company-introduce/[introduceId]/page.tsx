"use client";
import React from "react";
import { useParams } from "next/navigation";

const page = () => {
  const params = useParams<{ introduceId: string }>();

  return <div>page {params.introduceId}</div>;
};

export default page;
