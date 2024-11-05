import ImagemHero from "../../../src/assets/imagem-hero.jpg";
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
  // const [corFundo, setCorFundo] = useState("black");
  // const [contador, setContador] = useState(0);

  // function handleChangeCorFundo() {
  //   // if (corFundo === "black") setCorFundo("white");
  //   // else setCorFundo("black");
  //   corFundo === "black" ? setCorFundo("white") : setCorFundo("black");
  // }

  // useEffect(() => {
  //   if (contador % 2 === 0) {
  //     setCorFundo("yellow");
  //   } else {
  //     setCorFundo("green");
  //   }
  // }, [contador]);
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
              <ButtonPrimary onClick={() => {}}>Get Started</ButtonPrimary>
              <ButtonSecondary onClick={() => {}}>Learn more →</ButtonSecondary>
            </ButtonContainer>
          </div>
          <img src={ImagemHero} alt="" />
        </MainGridHeroContainer>
      </MainHeroContainer>
    </>
  );
};
