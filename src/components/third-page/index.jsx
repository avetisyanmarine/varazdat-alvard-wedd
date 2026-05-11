import {
  ThirdPagePart,
  ThirdPagePartCalendar,
  ThirdPagePartContext,
  ThirdPagePartMini,
} from "./styled";
import { Container } from "../../GlobalStyle";
import { ThirdPageBlock } from "./third-page-block";
import { TextShadow } from "../TextShadow";

export const ThirdPage = () => {
  return (
    <ThirdPagePart>
      <Container>
        <TextShadow title="Ժամանակացույց" />
        <ThirdPagePartContext>
          <ThirdPageBlock
            // imageSize={80}
            number={"17:30"}
            bigText="Նշանադրություն"
            smallText="Lazur Rest Ռեստորան"
          />
        </ThirdPagePartContext>
        <ThirdPagePartMini>
          {/* <h3>Սիրով սպասում ենք</h3> */}
          <hr />
        </ThirdPagePartMini>
      </Container>
    </ThirdPagePart>
  );
};
