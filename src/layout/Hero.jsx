import { useState } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { Title } from "../components/HeroContainer/Title";
import { Subtitle } from "../components/HeroContainer/Subtitle";
import { FirstImage } from "../components/HeroContainer/FirstImage";
import { ButtonPrimary } from "../components/HeroContainer/ButtonPrimary";
import { ButtonSecondary } from "../components/HeroContainer/ButtonSecondary";

export const Hero = () => {
  return (
    <>
      <NavBar></NavBar>
      <Title></Title>
      <Subtitle></Subtitle>
      <FirstImage></FirstImage>
      <ButtonPrimary></ButtonPrimary>
      <ButtonSecondary></ButtonSecondary>
    </>
  );
};
