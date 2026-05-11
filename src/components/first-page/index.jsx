import MainPhoto from "../../assets/image/mainPhoto.jpg";
import { Container, Flexible } from "../../GlobalStyle";
import { FirstPagePart, FirstPagePartContext } from "./styled";

export const FirstPage = () => {
  return (
    <FirstPagePart>
      <img className="grayscale contrast-125 brightness-105" src={MainPhoto} />
      <Container>
        <FirstPagePartContext>
          <div
            className="mt-7 text-[#1e1e1e] maintext"
            style={{ textShadow: "5px 7px 9px #000" }}
          >
            <h4>Նշանադրության Հրավեր</h4>
            <div data-aos="fade-up" className="text-center mt-3">
              <h3>Մանվել և Էրիկա</h3>
              <h5>06.06.2026</h5>
            </div>
          </div>
        </FirstPagePartContext>
      </Container>
    </FirstPagePart>
  );
};
