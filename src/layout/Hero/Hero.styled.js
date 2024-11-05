import styled from "styled-components";

export const MainHeroContainer = styled.div`
  padding: 10rem 2rem;
  margin: 0 auto;

  img {
    grid-row: span 2 / span 2;
    grid-row-end: 2;

    width: 28.8rem;
    height: 24rem;
    object-fit: cover;
    border-radius: 16px;
  }
`;

export const MainGridHeroContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(1, minmax(0, 1fr));
  column-gap: 2rem;
  row-gap: 1.5rem;
`;

export const TitleStyled = styled.h1`
  grid-column: auto;
  letter-spacing: -0.025em;
  font-size: 3.75rem;
  line-height: 1;
  font-weight: 700;
  text-align: left;
  max-width: 60rem;
`;

export const SubTitleStyled = styled.p`
  font-size: 1.125rem;
  line-height: 2rem;
  text-align: left;
  max-width: 50rem;
`;

export const ButtonPrimary = styled.button`
  background-color: #242424;
`;

export const ButtonSecondary = styled.button`
  background-color: white;
  color: black;
`;

export const ButtonContainer = styled.div`
  display: flex;
  column-gap: 1.5rem;
  align-items: center;
  margin-top: 2.5rem;
`;

// export const FirstImage = styled(ImagemHero)``;
