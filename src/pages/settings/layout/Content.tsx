import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonToggle,
} from "@ionic/react";
import ContentHeader from "../components/ContentHeader";
import { FC } from "react";
import jsonFile from "../../../../package.json";
import classes from "../page.module.css";

interface IProps {
  title: string;
}
const SettingsContent: FC<IProps> = ({ title }) => {
  const toggleDarkPalette = (shouldAdd: boolean) => {
    document.documentElement.classList.toggle("ion-palette-dark", shouldAdd);
  };

  return (
    <IonContent fullscreen={true}>
      <ContentHeader title={title} />

      <div className={classes.content}>
        <IonList inset={true} className={classes.list}>
          <IonItem className={classes.item}>
            <IonToggle
              checked={true}
              onIonChange={(e) => toggleDarkPalette(e.detail.checked)}
            >
              <IonLabel>Темный режим</IonLabel>
            </IonToggle>
          </IonItem>
        </IonList>

        <div className={classes.version}>
          <p className={classes.versionText}>
            Версия приложения: {jsonFile.version}
          </p>
        </div>
      </div>
    </IonContent>
  );
};

export default SettingsContent;
