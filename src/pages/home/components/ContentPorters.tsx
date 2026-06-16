import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonRow,
} from "@ionic/react";
import classes from "../index.module.css";
import ContentImageList from "./ImageList";
import { call, logoWhatsapp } from "ionicons/icons";

const ContentPorters = () => {
  const cards = [
    {
      id: 1,
      images: [
        "azamat/IMG_2905.JPG",
        "azamat/IMG_2906.JPG",
        "azamat/IMG_2907.JPG",
        "azamat/IMG_2908.JPG",
        "azamat/IMG_2909.JPG",
        "azamat/IMG_2910.JPG",
      ],
      title: "Азамат",
      subTitle: "Портер",
      description:
        "Жүк ташуу жана көчүрүү кызматы. Базардан сатып алуулар, мебель, техника, курулуш материалдары, мусор ташуу. Арзан, тез, ишенимдүү. 24/7 иштейбиз. 0550 915 053",
      phoneNumber: "996550915053",
    },
    {
      id: 2,
      images: [
        "azamat/IMG_2905.JPG",
        "azamat/IMG_2906.JPG",
        "azamat/IMG_2907.JPG",
        "azamat/IMG_2908.JPG",
        "azamat/IMG_2909.JPG",
        "azamat/IMG_2910.JPG",
      ],
      title: "Азамат",
      subTitle: "Портер",
      description:
        "Жүк ташуу жана көчүрүү кызматы. Базардан сатып алуулар, мебель, техника, курулуш материалдары, мусор ташуу. Арзан, тез, ишенимдүү. 24/7 иштейбиз. 0550 915 053",
      phoneNumber: "996550915053",
    },
  ];

  return (
    <IonGrid className={classes.porters}>
      <IonRow>
        {cards.map((card) => (
          <IonCol size="12" sizeMd="6" sizeLg="4" sizeXl="2" key={card.id}>
            <IonCard className="ion-no-margin">
              <ContentImageList images={card.images} />
              <IonCardHeader>
                <IonCardTitle>{card.title}</IonCardTitle>
                <IonCardSubtitle>{card.subTitle}</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>{card.description}</IonCardContent>

              <IonButton expand="block" href={`tel:+${card.phoneNumber}`}>
                <IonIcon icon={call} /> Позвонить
              </IonButton>
              <IonButton
                expand="block"
                color="success"
                href={`https://wa.me/${card.phoneNumber}`}
              >
                <IonIcon icon={logoWhatsapp} />
                Whatsapp
              </IonButton>
            </IonCard>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
};

export default ContentPorters;
