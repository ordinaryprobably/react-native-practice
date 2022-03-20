import styled from "styled-components/native";
import colors from "../config/colors";
import { BasicText } from "../styled_components/elements/Text";

export default function Card({ title, subtitle, imageUrl }) {
  return (
    <CardView>
      <CardView.Image source={imageUrl} />
      <CardView.Details>
        <CardView.Title>{title}</CardView.Title>
        <CardView.SubTitle>{subtitle}</CardView.SubTitle>
      </CardView.Details>
    </CardView>
  );
}

const CardView = styled.View`
  border-radius: 8px;
  background-color: white;
  width: 100%;
  margin-bottom: 20px;
  overflow: hidden;
`;

const DetailView = styled.View`
  padding: 20px;
`;

const Image = styled.Image`
  width: 100%;
  height: 200px;
`;

const TitleText = styled(BasicText)`
  margin-bottom: 7px;
`;

const SubText = styled(BasicText)`
  color: ${colors.secondary};
  font-weight: bold;
`;

CardView.Image = Image;
CardView.Details = DetailView;
CardView.Title = TitleText;
CardView.SubTitle = SubText;
