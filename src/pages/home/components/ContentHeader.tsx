import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { FC } from "react";

interface IProps {
  title: string;
}
const HomeContentHeader: FC<IProps> = ({ title }) => {
  return (
    <IonHeader collapse="condense">
      <IonToolbar>
        <IonTitle size="large">{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default HomeContentHeader;
