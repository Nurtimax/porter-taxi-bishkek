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
        "IMG_2905.JPG",
        "IMG_2906.JPG",
        "IMG_2907.JPG",
        "IMG_2908.JPG",
        "IMG_2909.JPG",
        "IMG_2910.JPG",
      ],
      title: "Card Title",
      subTitle: "Card Subtitle",
      description:
        "Here's a small text description for the card content. Nothing more, nothing less.",
    },
    {
      id: 2,
      images: [
        "IMG_2905.JPG",
        "IMG_2906.JPG",
        "IMG_2907.JPG",
        "IMG_2908.JPG",
        "IMG_2909.JPG",
        "IMG_2910.JPG",
      ],
      title: "Card Title",
      subTitle: "Card Subtitle",
      description:
        "Here's a small text description for the card content. Nothing more, nothing less.",
    },
  ];

  return (
    <IonGrid className={classes.porters}>
      <IonRow>
        {cards.map((card) => (
          <IonCol size="12" sizeMd="6" sizeLg="4" sizeXl="2">
            <IonCard className="ion-no-margin">
              <ContentImageList images={card.images} />
              <IonCardHeader>
                <IonCardTitle>{card.title}</IonCardTitle>
                <IonCardSubtitle>{card.subTitle}</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>{card.description}</IonCardContent>

              <IonButton expand="block">
                <IonIcon icon={call} /> Позвонить
              </IonButton>
              <IonButton expand="block" color="success">
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
