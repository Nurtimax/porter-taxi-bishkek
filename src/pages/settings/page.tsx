import { IonPage } from "@ionic/react";
import SettingsHeader from "./layout/Header";
import SettingsContent from "./layout/Content";

const meta = {
  title: "Настройка",
};
const SettingsPage = () => {
  return (
    <IonPage>
      <SettingsHeader title={meta.title} />
      <SettingsContent title={meta.title} />
    </IonPage>
  );
};

export default SettingsPage;
