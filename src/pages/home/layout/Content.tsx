import { IonContent } from "@ionic/react";
import React, { FC } from "react";
import HomeContentHeader from "../components/ContentHeader";
import ContentAvailableServices from "../components/ContentAvailableServices";
import ContentPorters from "../components/ContentPorters";

interface IProps {
  title: string;
}
const HomeContent: FC<IProps> = ({ title }) => {
  return (
    <IonContent fullscreen={true}>
      <HomeContentHeader title={title} />
      <ContentAvailableServices />
      <ContentPorters />
    </IonContent>
  );
};

export default HomeContent;
