import { Title } from "@/styles/Common";
import {
  NavigationContainer,
  NavigationContent,
  NavigationItem,
  NavigationItemIcon,
  NavigationSelection,
  NavigationSelected,
} from "./style";
import HomeSvg from "@/assets/icons/Home.svg";
import UserSvg from "@/assets/icons/User.svg";
import ExperienceSvg from "@/assets/icons/Experience.svg";
import FeaturedSvg from "@/assets/icons/Featured.svg";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";

type INavigation = {
  label: string;
  url: string;
  icon: string;
};

const NavigationData: INavigation[] = [
  { label: "home", url: "#home", icon: HomeSvg },
  { label: "about-me", url: "#me", icon: UserSvg },
  { label: "experience", url: "#experience", icon: ExperienceSvg },
  { label: "featured-works", url: "#works", icon: FeaturedSvg },
];

const Navigation = () => {
  const [active, setActive] = useState("home");

  const currentPosition = useMemo(() => {
    return NavigationData.findIndex(
      (_navigation) => _navigation.label === active
    );
  }, [active]);

  const calculatePosition = useCallback(() => {
    if (currentPosition === 0) return 10;
    return 10 + currentPosition * (40 + 20);
  }, [currentPosition]);

  const handleSelect = (_url: string) => {
    setActive(_url);
  };

  return (
    <NavigationContainer>
      <NavigationSelection>
        <NavigationSelected top={calculatePosition()}></NavigationSelected>
        <NavigationContent>
          {NavigationData.map((_navigation) => {
            return (
              <NavigationItem
                key={_navigation.label}
                onClick={() => handleSelect(_navigation.label)}
              >
                <NavigationItemIcon>
                  <Image src={_navigation.icon} alt={_navigation.label} fill />
                </NavigationItemIcon>
              </NavigationItem>
            );
          })}
        </NavigationContent>
      </NavigationSelection>
    </NavigationContainer>
  );
};

export default Navigation;
