import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function page({
  params,
}: {
  params: { authtype: string };
}) {
  const { authtype } = await params;
  return (
    <div>
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="font-bold text-[24px] ">Login</CardTitle>
          <CardDescription className="font-sans text-sm ">
            Login into dummys
          </CardDescription>
        </CardHeader>
        <CardContent>
          <label className="block font-semibold text-sm ">Username</label>
          <input
            type="text"
            name="htmlusername"
            placeholder="Enter name of your project"
            className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
          />
          <label>Password</label>
          <input
            type="text"
            name="htmlusername"
            placeholder="Enter name of your project"
            className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
          />
        </CardContent>
      </Card>
      virtual{authtype}
    </div>
  );
}
