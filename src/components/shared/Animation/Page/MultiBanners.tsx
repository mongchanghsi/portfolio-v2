import gsap from "gsap";
//@ts-ignore
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import SeoulBacksplash from "@/assets/images/backsplash/seoul.jpeg";
import HCMBacksplash from "@/assets/images/backsplash/hochiminh.jpeg";
import LakeTahoeBacksplash from "@/assets/images/backsplash/laketahoe.jpeg";
import SanFransicoBacksplash from "@/assets/images/backsplash/sanfransico.jpeg";
import TokyoBacksplash from "@/assets/images/backsplash/tokyo.jpeg";

export const getRandomBackSplash = () => {
  const rng = Math.floor(Math.random() * 5);

  switch (rng) {
    case 0:
      return SeoulBacksplash;
    case 1:
      return HCMBacksplash;
    case 2:
      return LakeTahoeBacksplash;
    case 3:
      return SanFransicoBacksplash;
    case 4:
      return TokyoBacksplash;
    default:
      return LakeTahoeBacksplash;
  }
};

export const getRandomBackSplashPath = () => {
  const rng = Math.floor(Math.random() * 5);

  const basePath = "assets/backsplash/";

  switch (rng) {
    case 0:
      return basePath + "seoul.jpeg";
    case 1:
      return basePath + "hochiminh.jpeg";
    case 2:
      return basePath + "laketahoe.jpeg";
    case 3:
      return basePath + "sanfransico.jpeg";
    case 4:
      return basePath + "tokyo.jpeg";
    default:
      return basePath + "laketahoe.jpeg";
  }
};

export const Banners = [
  {
    id: "banner-1",
    position: 0,
  },
  {
    id: "banner-2",
    position: 1,
  },
  {
    id: "banner-3",
    position: 2,
  },
  {
    id: "banner-4",
    position: 3,
  },
];

export const animatePageIn = () => {
  const tl = gsap.timeline();

  const bannerOne = document.getElementById(Banners[0].id);
  const bannerTwo = document.getElementById(Banners[1].id);
  const bannerThree = document.getElementById(Banners[2].id);
  const bannerFour = document.getElementById(Banners[3].id);

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 100,
      stagger: 0.2,
      duration: 1.5,
      delay: 1,
    });
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const tl = gsap.timeline();

  const bannerOne = document.getElementById(Banners[0].id);
  const bannerTwo = document.getElementById(Banners[1].id);
  const bannerThree = document.getElementById(Banners[2].id);
  const bannerFour = document.getElementById(Banners[3].id);

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: -100,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
      stagger: 0.2,
      onComplete: () => {
        router.push(href);
      },
    });
  }
};
