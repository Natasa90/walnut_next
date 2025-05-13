import {
  faSwimmingPool,
  faWifi,
  faBed,
  faKitchenSet,
  faFire,
  faShower,
  faChair,
  faDrumstickBite,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Facility {
  title: string;
  icon: IconDefinition;
}

export const facilities: Facility[] = [
  { title: "Private Pool", icon: faSwimmingPool },
  { title: "Free WiFi", icon: faWifi },
  { title: "1 Queen Bed + 1 Sofa Bed", icon: faBed },
  { title: "Fully Equipped Kitchen", icon: faKitchenSet },
  { title: "BBQ Grill", icon: faDrumstickBite },
  { title: "Fire Pit", icon: faFire },
  { title: "1 Bathroom", icon: faShower },
  { title: "Private Patio", icon: faChair },
];
