import React, { FC, useEffect } from "react";
import styled from "styled-components";
import Swiper, { Pagination } from "swiper";
import Badge from "@material-ui/core/Badge";
import { withStyles, useTheme } from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import "swiper/swiper-bundle.css";
Swiper.use([Pagination]);

const SwiperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 180px;
`;

const SwiperSlide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChoiceCard = styled.div<{ borderColor: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 4px;
`;

const SwiperLabel = styled.span<{ textColor: string }>`
  margin-top: 8px;
  color: ${(props) => props.textColor};
  font-size: 12px;
`;

const SwiperPagination = styled.div<{ activeBulletColor: string }>`
  .swiper-pagination-bullet-active {
    background-color: ${(props) => props.activeBulletColor};
  }
`;

const StyledBadge = withStyles({
  badge: { right: 8, bottom: 8 }
})(Badge);

type Props = {
  choices: { label: string; svgComponent: React.ComponentType }[];
  selectedChoice: string;
  onChangeChoice: (choice: any) => void;
};

const CaroselRadioButtons: FC<Props> = ({
  choices,
  selectedChoice,
  onChangeChoice
}) => {
  const theme = useTheme();
  useEffect(() => {
    new Swiper(".swiper-container", {
      slidesPerView: 2,
      slidesPerGroup: 2,
      centerInsufficientSlides: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }, []);

  return (
    <SwiperContainer className="swiper-container">
      <div className="swiper-wrapper">
        {choices.map((choice) => {
          return (
            <SwiperSlide key={choice.label} className="swiper-slide">
              <StyledBadge
                invisible={selectedChoice !== choice.label}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right"
                }}
                badgeContent={
                  <CheckCircleIcon
                    color="primary"
                    style={{
                      fontSize: 30
                    }}
                  />
                }
              >
                <ChoiceCard
                  borderColor={
                    selectedChoice === choice.label
                      ? theme.palette.primary.light
                      : theme.palette.grey[200]
                  }
                  onClick={() => onChangeChoice(choice.label)}
                >
                  <choice.svgComponent />
                  <SwiperLabel textColor={theme.palette.grey[700]}>
                    {choice.label}
                  </SwiperLabel>
                </ChoiceCard>
              </StyledBadge>
            </SwiperSlide>
          );
        })}
      </div>
      <SwiperPagination
        className="swiper-pagination"
        activeBulletColor={theme.palette.primary.main}
      />
    </SwiperContainer>
  );
};

export default CaroselRadioButtons;
