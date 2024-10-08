import {
  NavBarStyled,
  ListStyled,
  ItemListStyled,
  ContainerItensStyled,
} from "./NavBar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <NavBarStyled>
        <ListStyled>
          <ItemListStyled>
            <Link to="/">
              <FontAwesomeIcon icon={faHouse} size="xl" />
            </Link>
          </ItemListStyled>
          <ContainerItensStyled>
            <ItemListStyled>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
              >
                Product
              </a>
            </ItemListStyled>
            <ItemListStyled>
              <a
                href="https://www.youtube.com/watch?v=xqFTe96OWPU"
                target="_blank"
              >
                Features
              </a>
            </ItemListStyled>
            <ItemListStyled>
              <a href="/marketplace">Marketplace</a>
            </ItemListStyled>
            <ItemListStyled>
              <a href="/company">Company</a>
            </ItemListStyled>
          </ContainerItensStyled>
          <ItemListStyled>
            <a href="/login">Log in →</a>
          </ItemListStyled>
        </ListStyled>
      </NavBarStyled>
    </>
  );
};
