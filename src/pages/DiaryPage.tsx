import styled from "styled-components";
import { Title } from "../styles/SharedStyles";
import construction from "../assets/construction.png";

function DiaryPage() {
  return (
    <>
      <Title>Dagbok</Title>
      <Text>Sidan är under uppbyggnda</Text>
      <CenteredImage src={construction} alt="Under konstruktion" />
    </>
  );
}

export default DiaryPage;

const Text = styled.div`
  font-size: xx-large;
  text-align: center;
  color: orange;
`;

const CenteredImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
`;
