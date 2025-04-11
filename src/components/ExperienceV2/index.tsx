import { useState } from "react";
import { ExperienceData, IExperience } from "./data";
import {
  ExperienceWrapper,
  ExperienceContainer,
  ExperienceContent,
  ExperienceContentDescription,
  ExperienceContentDivider,
  ExperienceContentTitleContainer,
  ExperienceContentTitleLabel,
  ExperienceSelection,
  ExperienceSelectionItem,
  ExperienceContentDescriptionItem,
} from "./style";

const Experience = () => {
  const [selected, setSelected] = useState<IExperience>(ExperienceData[0]);

  return (
    <ExperienceWrapper>
      <ExperienceContainer>
        <ExperienceSelection>
          {ExperienceData.map((experience) => (
            <ExperienceSelectionItem
              selected={JSON.stringify(experience) === JSON.stringify(selected)}
              onClick={() => setSelected(experience)}
            >
              {experience.company}
            </ExperienceSelectionItem>
          ))}
        </ExperienceSelection>
        <ExperienceContent>
          <ExperienceContentTitleContainer>
            <ExperienceContentTitleLabel>
              <span>{selected.role}</span>
            </ExperienceContentTitleLabel>
            <ExperienceContentTitleLabel>
              {selected.duration}
            </ExperienceContentTitleLabel>
          </ExperienceContentTitleContainer>
          <ExperienceContentDivider />
          <ExperienceContentDescription>
            {selected.description.map((description) => (
              <ExperienceContentDescriptionItem key={description}>
                {description}
              </ExperienceContentDescriptionItem>
            ))}
          </ExperienceContentDescription>
        </ExperienceContent>
      </ExperienceContainer>
    </ExperienceWrapper>
  );
};

export default Experience;
