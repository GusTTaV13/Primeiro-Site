import { useState } from "react";
import ImagemHero from "../../src/assets/imagem-hero.jpg";
import {
  MainHeroContainer,
  MainGridHeroContainer,
  TitleStyled,
  SubTitleStyled,
  ButtonPrimary,
  ButtonSecondary,
  ButtonContainer,
} from "./Hero.styled";

export const Hero = () => {
  return (
    <>
      <MainHeroContainer>
        <MainGridHeroContainer>
          <TitleStyled>We’re changing the way people connect.</TitleStyled>
          <div style={{ gridRowStart: 1 }}>
            <SubTitleStyled>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.
              Qui irure qui lorem cupidatat commodo.
            </SubTitleStyled>
            <ButtonContainer>
              <ButtonPrimary>Get Started</ButtonPrimary>
              <ButtonSecondary>Learn more →</ButtonSecondary>
            </ButtonContainer>
          </div>
          <img src={ImagemHero} alt="" />
        </MainGridHeroContainer>
      </MainHeroContainer>
    </>
  );
};
