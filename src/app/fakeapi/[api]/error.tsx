"use client";
import React from "react";

export default function ErrorBoundry({ error }: { error: Error }) {
  return <div>Error encountered while fetching api type {error.message}</div>;
}
