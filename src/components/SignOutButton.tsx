"use client";

import React from "react";
import { Button } from "./ui/button";
import { logOut } from "@/app/authenticate/auth.action";

type Props = {
  children: React.ReactNode;
};

const SignOutButton = (props: Props) => {
  return (
    <Button
      onClick={() => {
        logOut();
      }}
    >
      {props.children}
    </Button>
  );
};

export default SignOutButton;
 