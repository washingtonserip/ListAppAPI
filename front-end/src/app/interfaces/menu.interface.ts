import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface Menu {
  text: string;
  icon: IconDefinition;
  onClick: Function;
  isActive?: boolean;
  isInverted?: boolean;
}
