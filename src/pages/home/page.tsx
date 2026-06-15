import { IonPage } from "@ionic/react";
import HomeHeader from "./layout/Header";
import HomeContent from "./layout/Content";

const meta = {
  title: "Портер такси",
};
const HomePage = () => {
  return (
    <IonPage>
      <HomeHeader title={meta.title} />
      <HomeContent title={meta.title} />
    </IonPage>
  );
};

export default HomePage;
