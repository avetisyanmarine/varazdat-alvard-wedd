import MainPhoto from "../../assets/image/mainPhoto.jpg";
import { Container, Flexible } from "../../GlobalStyle";
import { FirstPagePart, FirstPagePartContext } from "./styled";

export const FirstPage = () => {
  return (
    <FirstPagePart>
      <img src={MainPhoto} />
      <Container>
        <FirstPagePartContext>
          <div
            className="text-[#fff] maintext"
            style={{ textShadow: "5px 7px 9px #000" }}
          >
            <h4>Նշանադրության Հրավեր</h4>
            <div data-aos="fade-up" className="text-center text-[#fff] mt-[65vh]">
              <h3>Վարազդատ և Ալվարդ</h3>
              <h5 className="text-[25px]">16.06.2026</h5>
            </div>
          </div>
        </FirstPagePartContext>
      </Container>
    </FirstPagePart>
  );
};
