import { Container, Flexible } from "../../GlobalStyle";
import { ForthPageBlock } from "./fortg-page-block";
import { ForthPagePart, ForthPagePartContext } from "./styled";
import Restaurant from "../../assets/image/restoran.jpg";
import HeartLine from "../../assets/image/heartline.png";
import LineAes from "../../assets/image/lineaes.png";
import Hand from "../../assets/image/hand.jpg";
import AttendanceGuests from "../AttendanceGuests";
export const ForthPage = () => {
  return (
    <ForthPagePart>
      <Container>
        {/* <img src={Photof2} className="rounded-[15px]" alt="" /> */}
        <ForthPagePartContext>
          <ForthPageBlock
            ImageSrc={Restaurant}
            bigText={"Paradise Hall Ռեստորան"}
            mapSrc={"https://maps.app.goo.gl/XyZKvTkkycU5u6c6A"}
          />
        </ForthPagePartContext>
      </Container>
      <img src={LineAes} alt="" className="w-full" />
      <Container>
        <div className="text-center mb-10">
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
                width: "45px",
                height: "45px",
                background: "#E6C9C3",
                border: "1px solid #E7E1D5",
                borderRadius: "50%",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            ></div>
            <div
              title="Բուրգունդի"
              style={{
                width: "45px",
                height: "45px",
                background: "#CFA79F",
                borderRadius: "50%",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            ></div>
            <div
              title="Բուրգունդի"
              style={{
                width: "45px",
                height: "45px",
                background: "#A26E61",
                borderRadius: "50%",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            ></div>
            {/* Կաթնագույն */}
            <div
              title="Կաթնագույն"
              style={{
                width: "45px",
                height: "45px",
                background: "#54413B",
                borderRadius: "50%",
                border: "1px solid #e0e0e0",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            ></div>

            <div
              title="Մարմնագույն"
              style={{
                width: "45px",
                height: "45px",
                background: "#000",
                borderRadius: "50%",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            ></div>
            
            <div
              title="Բուրգունդի"
              style={{
                width: "45px",
                height: "45px",
                background: "#C7D8E8",
                borderRadius: "50%",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            ></div>
            <div
              title="Բուրգունդի"
              style={{
                width: "45px",
                height: "45px",
                background: "#C0D7E5",
                borderRadius: "50%",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            ></div>
            <div
              title="Բուրգունդի"
              style={{
                width: "45px",
                height: "45px",
                background: "#8B9BBF",
                borderRadius: "50%",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            ></div>
            <div
              title="Բուրգունդի"
              style={{
                width: "45px",
                height: "45px",
                background: "#AEBEA4",
                borderRadius: "50%",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            ></div>
            <div
              title="Բուրգունդի"
              style={{
                width: "45px",
                height: "45px",
                background: "#5D6744",
                borderRadius: "50%",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            ></div>
          </div>

          <h3 className="mt-10">Սիրելի՛ հյուրեր</h3>
          <h5
            style={{
              color: "#2b2929",
              fontSize: "16px",
              marginTop: "15px",
              fontStyle: "italic",
            }}
          >
            <br /> Մեր տոնի ոճն ու գեղեցիկ մթնոլորտն ամբողջացնելու համար սիրով
            խնդրում ենք, հնարավորության դեպքում, հետևել նշված <b>dress code</b>
            -ին։ <br /> Ձեր մասնակցությունն ու ուշադրությունը մեզ համար շատ
            կարևոր են։
          </h5>
          <hr className="mx-auto my-8 w-[300px]" />
        </div>
        <div className="text-center">
          <img src={Hand} alt="" className="w-full rounded-[15px] mb-7" />
          <h2>Դետալներ</h2>
          <img src={HeartLine} className="mx-auto my-8 w-[300px]" />
          Սիրելի՛ հյուրեր, խնդրում ենք սրահում չծխել և պահպանել հարմարավետ միջավայրը բոլորի համար։
          <hr className="mx-auto my-8 w-[300px]" />
        </div>
        <AttendanceGuests />
      </Container>
    </ForthPagePart>
  );
};
