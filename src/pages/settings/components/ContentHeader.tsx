import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import React, { FC } from "react";

interface IProps {
  title: string;
}
const ContentHeader: FC<IProps> = ({ title }) => {
  return (
    <IonHeader collapse="condense">
      <IonToolbar>
        <IonTitle size="large">{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default ContentHeader;
