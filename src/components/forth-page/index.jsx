import { Container, Flexible } from "../../GlobalStyle";
import { ForthPageBlock } from "./fortg-page-block";
import { ForthPagePart, ForthPagePartContext } from "./styled";
import Restaurant from "../../assets/image/restoran.jpg";
import HeartLine from "../../assets/image/heartline.png";
import LineAes from "../../assets/image/lineaes.png";
import AttendanceGuests from "../AttendanceGuests";
export const ForthPage = () => {
  return (
    <ForthPagePart>
      <Container>
        {/* <img src={Photof2} className="rounded-[15px]" alt="" /> */}
        <ForthPagePartContext>
          <ForthPageBlock
            ImageSrc={Restaurant}
            bigText={"Lazur Rest Ռեստորան"}
            mapSrc={"https://maps.app.goo.gl/dRAftimaUaD4aSD17"}
          />
        </ForthPagePartContext>
      </Container>
      <img src={LineAes} alt="" className="w-full" />

      <div className="text-center my-14">
        <h2>Dress Code</h2>
        <img src={HeartLine} className="mx-auto my-8 w-[300px]" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
            padding: "10px",
          }}
        >
          {/* Սպիտակ */}
          <div
            title="Սպիտակ"
            style={{
              width: "40px",
              height: "40px",
              background: "#FFFFFF",
              border: "1px solid #ddd",
              borderRadius: "50%",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          ></div>

          {/* Կաթնագույն */}
          <div
            title="Կաթնագույն"
            style={{
              width: "40px",
              height: "40px",
              background: "#F5F5DC",
              borderRadius: "50%",
              border: "1px solid #e0e0e0",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          ></div>

          {/* Մարմնագույն */}
          <div
            title="Մարմնագույն"
            style={{
              width: "40px",
              height: "40px",
              background: "#E3BC9A",
              borderRadius: "50%",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          ></div>

          {/* Բաց վարդագույն */}
          <div
            title="Բաց վարդագույն"
            style={{
              width: "40px",
              height: "40px",
              background: "#FFB6C1",
              borderRadius: "50%",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          ></div>

          {/* Բուրգունդի */}
          <div
            title="Բուրգունդի"
            style={{
              width: "40px",
              height: "40px",
              background: "#800020",
              borderRadius: "50%",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          ></div>
        </div>

        <p
          style={{
            color: "#2b2929",
            fontSize: "14px",
            marginTop: "15px",
            fontStyle: "italic",
          }}
        >
          Խնդրում ենք ընտրել հագուստ նշված երանգների մեջ
        </p>
        <hr className="mx-auto my-8 w-[300px]" />
      </div>
      <Container>
        <AttendanceGuests />
      </Container>
    </ForthPagePart>
  );
};
