import Image from "next/image";
import style from "../../styles/Hero.module.css";
import EditOffIcon from "@mui/icons-material/EditOff";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import GroupsIcon from "@mui/icons-material/Groups";
import classNames from "classnames";
import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledBox,
  StyledBoxImg,
  StyledBoxText,
  StyledDescription,
} from "./elements";
import { useEffect, useState } from "react";

export const Hero = ({
  image,
  title,
  description,
  ctaText,
  data,
  ...props
}) => {
  const [active, setActive] = useState("");
  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        <StyledContainer {...props}>
          <StyledTextContainer>
            <StyledTitle>{title}</StyledTitle>
            <StyledDescription>{description}</StyledDescription>
          </StyledTextContainer>
          <div className={classNames(style.test)}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />

            <StyledBox>
              {data.map((eachElement, index) => {
                return (
                  <StyledBoxImg
                    onClick={() => {
                      setActive(eachElement.title);
                    }}
                    key={index}
                    className={classNames(
                      style.element,
                      active === eachElement.title ? style.active : ""
                    )}
                  >
                    {eachElement.icon === "icon1" ? (
                      <EditOffIcon
                        fontSize="large"
                        style={{ paddingLeft: "7%" }}
                      />
                    ) : (
                      eachElement.icon === "icon2"
                    )}
                    {eachElement.icon === "icon2" ? (
                      <EmojiPeopleIcon
                        fontSize="large"
                        style={{ paddingLeft: "7%" }}
                      />
                    ) : (
                      eachElement.icon === "icon3"
                    )}
                    {eachElement.icon === "icon3" ? (
                      <GroupsIcon
                        fontSize="large"
                        style={{ paddingLeft: "7%" }}
                      />
                    ) : (
                      eachElement.icon === "icon3"
                    )}

                    <StyledBoxText style={{}}>
                      <h3
                        style={{ paddingTop: "5px" }}
                        className={
                          active === eachElement.title ? style.activeHeader : ""
                        }
                      >
                        {eachElement.title}
                      </h3>
                      <p>{eachElement.description}</p>
                    </StyledBoxText>
                  </StyledBoxImg>
                );
              })}
            </StyledBox>
          </div>
        </StyledContainer>
      </div>
    </div>
  );
};
