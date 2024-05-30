import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  ExperienceContainer,
  ExperienceContent,
  ExperienceSection,
  ExperienceSectionDescription,
  ExperienceSectionDescriptionText,
  ExperienceSectionDuration,
  ExperienceSectionHeader,
  ExperienceSectionTitle,
  ExperienceSectionTitleSpan,
  ExperienceSectionViewMore,
  ExperienceWrapper,
} from "./style";
import { MutableRefObject, useRef } from "react";
import { ExperienceData } from "./data";
import useWindowDimensions from "@/hooks/common/useWindowDimensions";
import useTransitionLink from "@/hooks/common/useTransitionLink";

gsap.registerPlugin(ScrollTrigger);

// https://www.youtube.com/watch?v=VvSVw1yLAPM
const Experience = () => {
  const { handleRedirect } = useTransitionLink();

  const { windowDimensions, LARGE_SCREEN_SIZE } = useWindowDimensions();
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const contentRef = useRef() as MutableRefObject<HTMLDivElement>;
  const sectionRef = useRef([]) as MutableRefObject<HTMLElement[]>;
  sectionRef.current = [];
  const innerMaskRef = useRef() as MutableRefObject<SVGRectElement>;

  const addToRefs = (el: any) => {
    if (el && !sectionRef.current.includes(el)) sectionRef.current.push(el);
  };

  useGSAP(() => {
    const scrollTween = gsap.to(sectionRef.current, {
      xPercent: -100 * (sectionRef.current.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: contentRef.current,
        pin: true,
        scrub: 1,
        end: "+=3000",
        markers: false, // For dev
      },
    });

    gsap.to(innerMaskRef.current, {
      width: "107%",
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top left",
        scrub: 1,
        markers: false, // For dev
      },
    });

    sectionRef.current.forEach((section) => {
      if (section.id === "0") return;

      let text = section.querySelectorAll(".animate");
      if (text.length === 0) return;

      gsap.from(text, {
        y: -130,
        opacity: 0,
        duration: 2,
        ease: "elastic",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          containerAnimation: scrollTween,
          start: "left center",
          markers: false, // For dev
        },
      });
    });
  }, []);

  return (
    <ExperienceContainer>
      <ExperienceWrapper ref={wrapperRef}>
        <ExperienceContent ref={contentRef}>
          <svg
            viewBox="0 0 900 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={
              windowDimensions.width < LARGE_SCREEN_SIZE
                ? {
                    position: "absolute",
                    top: "80px",
                    left: "24px",
                    width: "50vw",
                  }
                : {
                    position: "absolute",
                    top: "200px",
                    left: "50px",
                    width: "50vw",
                  }
            }
          >
            <path
              d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
              fill="#DEDEDE"
            />
            <mask
              id="mask0_0_1"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="900"
              height="10"
            >
              <path
                d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
                fill="#DEDEDE"
              />
            </mask>
            <g mask="url(#mask0_0_1)">
              <rect
                ref={innerMaskRef}
                className="mask"
                y="-49"
                height="99"
                fill="#4AE0D0"
              />
            </g>
          </svg>

          {ExperienceData.map((_experience, index) => (
            <ExperienceSection
              ref={addToRefs}
              id={String(index)}
              key={`${_experience.company}_${_experience.role}_${_experience.duration}`}
            >
              <ExperienceSectionHeader>
                <ExperienceSectionTitle className="animate">
                  {_experience.role} @{" "}
                  <ExperienceSectionTitleSpan>
                    {_experience.company}
                  </ExperienceSectionTitleSpan>
                </ExperienceSectionTitle>
                <ExperienceSectionDuration className="animate">
                  {_experience.duration}
                </ExperienceSectionDuration>
              </ExperienceSectionHeader>

              <ExperienceSectionDescription className="animate">
                {_experience.description.map((_description) => (
                  <ExperienceSectionDescriptionText key={_description}>
                    {_description}
                  </ExperienceSectionDescriptionText>
                ))}
              </ExperienceSectionDescription>

              {/* {index === 2 && (
                <ExperienceSectionViewMore
                  onClick={() => handleRedirect("/experiences")}
                >
                  SEE MORE <span>EXPERIENCES</span>
                </ExperienceSectionViewMore>
              )} */}
            </ExperienceSection>
          ))}
        </ExperienceContent>
      </ExperienceWrapper>
    </ExperienceContainer>
  );
};

export default Experience;
