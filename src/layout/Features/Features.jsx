import { useState, useEffect } from "react";
import ImagemHero from "../../../src/assets/imagem-hero.jpg";
import {
  MainFeaturesContainer,
  MainGridFeaturesContainer,
  TitleStyled,
  SubTitleStyled,
  ButtonPrimary,
  ButtonSecondary,
  ButtonContainer,
} from "./Features.styled";

export const Features = () => {
  const [resultApi, setResultApi] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setResultApi(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsuarios();
  }, []);

  return (
    <>
      <MainFeaturesContainer>
        <MainGridFeaturesContainer>
          <TitleStyled>
            {resultApi.length > 0 ? resultApi[0].name : "Carregando nome..."}
          </TitleStyled>
          <div style={{ gridRowStart: 1 }}>
            <SubTitleStyled>
              {resultApi.length > 0
                ? resultApi[1].address.street +
                  " - " +
                  resultApi[1].address.zipcode
                : "Carregando website..."}
            </SubTitleStyled>
            <ButtonContainer>
              <ButtonPrimary onClick={() => {}}>Alo</ButtonPrimary>
              <ButtonSecondary onClick={() => {}}></ButtonSecondary>
            </ButtonContainer>
          </div>
          <img src={ImagemHero} alt="" />
        </MainGridFeaturesContainer>
      </MainFeaturesContainer>
    </>
  );
};
