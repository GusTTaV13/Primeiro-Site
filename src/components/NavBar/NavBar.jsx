import {
  NavBarStyled,
  ListStyled,
  ItemListStyled,
  ContainerItensStyled,
} from "./NavBar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../src/assets/mark.svg";

export const NavBar = () => {
  return (
    <>
      <NavBarStyled>
        <ListStyled>
          <ItemListStyled>
            <FontAwesomeIcon icon={faHouse} size="fa-2xl" />
            <img src={logo} alt="" srcset="" />
          </ItemListStyled>
          <ContainerItensStyled>
            <ItemListStyled>Product</ItemListStyled>
            <ItemListStyled>Features</ItemListStyled>
            <ItemListStyled>Marketplace</ItemListStyled>
            <ItemListStyled>Company</ItemListStyled>
          </ContainerItensStyled>
          <ItemListStyled>Log in →</ItemListStyled>
        </ListStyled>
      </NavBarStyled>
    </>
  );
};
