import { MutableRefObject, useRef } from "react";
import { SocialData, SocialEnum } from "@/utils/social";
import Duck from "./Duck";
import PFP from "./PFP";
import SocialGrid from "./SocialGrid";
import Description from "./Description";
import CryptoChart from "./CryptoChart";
import OpenForWork from "./OpenForWork";
import DevAnimation from "./DevAnimation";
import TechnologyStack from "./TechnologyStack";
import { AboutMeContainer, AboutMeContent } from "./style";
import useWindowDimensions from "@/hooks/common/useWindowDimensions";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const tl = useRef<GSAPTimeline>();
  const container = useRef() as MutableRefObject<HTMLDivElement>;
  const descriptionRef = useRef() as MutableRefObject<HTMLDivElement>;
  const cryptoChartRef = useRef() as MutableRefObject<HTMLDivElement>;
  const openForWorkRef = useRef() as MutableRefObject<HTMLDivElement>;
  const githubRef = useRef() as MutableRefObject<HTMLDivElement>;
  const linkedinRef = useRef() as MutableRefObject<HTMLDivElement>;
  const cvRef = useRef() as MutableRefObject<HTMLDivElement>;
  const devAnimationRef = useRef() as MutableRefObject<HTMLDivElement>;
  const pfpRef = useRef() as MutableRefObject<HTMLDivElement>;
  const techStackRef = useRef() as MutableRefObject<HTMLDivElement>;

  const { windowDimensions, LARGE_SCREEN_SIZE } = useWindowDimensions();

  const animationDuration = (isMobile: boolean = true) => (isMobile ? 0.2 : 1);

  const baseTweenStyle = {
    opacity: 0.7,
    duration: animationDuration(false),
    scrub: 1,
    ease: "none",
  };

  const createTween = (
    reference: HTMLDivElement,
    tweenConfig: gsap.TweenVars
  ) =>
    gsap.from(reference, {
      ...baseTweenStyle,
      ...tweenConfig,
    });

  const { contextSafe } = useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 1023px)",
        isDesktop: "(min-width: 1024px)",
      },
      (context) => {
        const { isMobile, isDesktop } = context.conditions as {
          isMobile: boolean;
          isDesktop: boolean;
        };

        if (isMobile) {
          const cryptoChartTween = createTween(cryptoChartRef.current, {
            y: 50,
            duration: animationDuration(),
          });
          const descriptionTween = createTween(descriptionRef.current, {
            y: 50,
            duration: animationDuration(),
          });
          const githubTween = createTween(githubRef.current, {
            y: 50,
            duration: animationDuration(),
          });
          const linkedinTween = createTween(linkedinRef.current, {
            y: 50,
            duration: animationDuration(),
          });
          const cvTween = createTween(cvRef.current, {
            y: 50,
            duration: animationDuration(),
          });
          const openForWorkTween = createTween(openForWorkRef.current, {
            y: 50,
            duration: animationDuration(),
          });
          const techStackTween = createTween(techStackRef.current, {
            y: 50,
            duration: animationDuration(),
          });

          tl.current = gsap.timeline({
            scrollTrigger: {
              trigger: container.current,
              start: "top center",
              markers: false,
            },
          });

          tl.current.add(cryptoChartTween);
          tl.current.add(descriptionTween);
          tl.current.add(githubTween);
          tl.current.add(linkedinTween, "-=0.5");
          tl.current.add(cvTween, "-=0.5");
          tl.current.add(openForWorkTween);
          tl.current.add(techStackTween);
        }

        if (isDesktop) {
          const descriptionTween = createTween(descriptionRef.current, {
            x: -200,
          });
          const cryptoChartTween = createTween(cryptoChartRef.current, {
            y: -100,
          });
          const openForWorkTween = createTween(openForWorkRef.current, {
            x: -300,
          });
          const githubTween = createTween(githubRef.current, { x: -100 });
          const linkedinTween = createTween(linkedinRef.current, { y: 100 });
          const cvTween = createTween(cvRef.current, { x: 100 });
          const techStackTween = createTween(techStackRef.current, { x: 200 });
          const devAnimationTween = createTween(devAnimationRef.current, {
            x: 50,
          });

          tl.current = gsap.timeline({
            scrollTrigger: {
              trigger: container.current,
              start: "top center",
              markers: false,
            },
          });

          tl.current.add(descriptionTween);
          tl.current.add(cryptoChartTween, "-=1");
          tl.current.add(openForWorkTween, "-=1");
          tl.current.add(githubTween, "-=1");
          tl.current.add(linkedinTween, "-=1");
          tl.current.add(cvTween, "-=1");
          tl.current.add(techStackTween, "-=1");
          tl.current.add(devAnimationTween, "-=1");
        }
      }
    );
  }, []);

  // const toggleTimeline = contextSafe(() => {
  //   if (windowDimensions.width < LARGE_SCREEN_SIZE) return;
  //   tl.current?.reversed(!tl.current?.reversed());
  // });

  return (
    <AboutMeContainer ref={container}>
      <AboutMeContent>
        {windowDimensions.width >= LARGE_SCREEN_SIZE && (
          <>
            <Duck />
            <DevAnimation ref={devAnimationRef} />
            <PFP ref={pfpRef} />
          </>
        )}
        <Description ref={descriptionRef} />
        <CryptoChart ref={cryptoChartRef} />
        <OpenForWork ref={openForWorkRef} />
        <SocialGrid social={SocialData[SocialEnum.GITHUB]} ref={githubRef} />
        <SocialGrid
          social={SocialData[SocialEnum.LINKEDIN]}
          ref={linkedinRef}
        />
        <SocialGrid social={SocialData[SocialEnum.CV]} ref={cvRef} />
        <TechnologyStack ref={techStackRef} />
      </AboutMeContent>
    </AboutMeContainer>
  );
};

export default AboutMe;
