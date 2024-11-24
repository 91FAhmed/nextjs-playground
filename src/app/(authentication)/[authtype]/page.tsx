import React from "react";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function page({
  params,
}: {
  params: { authtype: "login" | "signup" };
}) {
  const { authtype } = await params;
  function makeUpper(value: string | undefined) {
    if (!value) return;
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  function addGap() {
    return authtype === "signup"
      ? makeUpper(authtype)?.substring(0, 4) +
          " " +
          makeUpper(authtype)?.substring(4, Number(authtype.length))
      : makeUpper(authtype);
  }

  if (authtype != "login" && authtype != "signup") {
    return notFound();
  }

  return (
    <div className="grid place-content-center h-lvh">
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="font-bold text-[24px] ">{addGap()}</CardTitle>
          <CardDescription className="font-sans text-sm ">
            {makeUpper(authtype)} into dummys
          </CardDescription>
        </CardHeader>
        <CardContent>
          <label className="block font-semibold text-sm ">Username</label>
          <input
            type="text"
            name="htmlusername"
            placeholder="Enter your username"
            className="w-full border border-gray-300 rounded-lg mb-4 p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
          />
          <label className="block font-semibold text-sm">Password</label>
          <input
            type="text"
            name="htmlusername"
            placeholder="Enter your password"
            className="w-full border border-gray-300 mb-4 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
          />
          {authtype === "signup" ? (
            <>
              <label className="block font-semibold text-sm">
                Confirm password
              </label>
              <input
                type="text"
                name="htmlusername"
                placeholder="confirm your password"
                className="w-full border border-gray-300 mb-2 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
              />
            </>
          ) : null}
          <Button className="block mx-auto w-36 mt-3 mb-2 font-semibold text-md pb-8">
            {" "}
            {addGap()}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
