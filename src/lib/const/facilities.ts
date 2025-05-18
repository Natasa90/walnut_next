import {
  faSwimmingPool,
  faWifi,
  faBed,
  faKitchenSet,
  faFire,
  faShower,
  faChair,
  faDrumstickBite,
	faSquareParking,
  faUtensils,
  faPepperHot,
  faChildren,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Facility {
  title: string;
  icon: IconDefinition;
}

export const facilities: Facility[] = [
  { title: "home.facilities.privatePool", icon: faSwimmingPool },
  { title: "home.facilities.freeWifi", icon: faWifi },
  { title: "home.facilities.beds", icon: faBed },
  { title: "home.facilities.kitchen", icon: faKitchenSet },
  { title: "home.facilities.bbq", icon: faDrumstickBite },
  { title: "home.facilities.firePit", icon: faFire },
  { title: "home.facilities.bathroom", icon: faShower },
  { title: "home.facilities.patio", icon: faChair },
	{ title: "home.facilities.parking", icon: faSquareParking },
  { title: "home.facilities.outdoorKitchen", icon: faUtensils },
  { title: "home.facilities.playground", icon: faChildren },
	{ title: "add one more", icon: faChildren },
];
