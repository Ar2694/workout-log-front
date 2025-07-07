import React from "react";

interface Props {
  bool: boolean | undefined;
  children: React.ReactNode;
}

export default function ShowHideView({ bool = true, children }: Props) {
  return bool ? children : <></>;
}
