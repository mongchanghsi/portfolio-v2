import { RefObject } from "react";

export type ReferencePointer =
  | ((instance: HTMLDivElement | null) => void)
  | RefObject<HTMLDivElement>
  | null
  | undefined;
