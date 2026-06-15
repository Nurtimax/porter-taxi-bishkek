import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonIcon,
  IonButton,
  IonText,
} from "@ionic/react";
import classes from "../index.module.css";
// Керектүү иконкаларды импорттоо
import {
  carOutline,
  earthOutline,
  trashOutline,
  cashOutline,
} from "ionicons/icons";

const ContentAvailableServices = () => {
  // Керектүү маалыматтар базасы (Services Data)
  const services = [
    {
      id: 1,
      title: "По городу",
      price: "900 сом",
      icon: carOutline,
      badge: "Фиксированный тариф",
      addons: [
        { name: "Грузчики", price: "+250 сом" },
        { name: "Без лифта", price: "+100 сом/этаж" },
        { name: "Ночной тариф", price: "+300 сом" },
      ],
    },
    {
      id: 2,
      title: "Междугородка",
      price: "Договорная",
      icon: earthOutline,
      badge: "Свяжитесь с водителем",
      addons: [
        { name: "Грузчики", price: "+250 сом" },
        { name: "Ночной тариф", price: "+300 сом" },
      ],
    },
    {
      id: 3,
      title: "Вывоз мусора",
      price: "1500 сом",
      icon: trashOutline,
      badge: "Вывоз крупногабаритного",
      addons: [
        { name: "Грузчики", price: "+250 сом" },
        { name: "Без лифта", price: "+100 сом/этаж" },
      ],
    },
  ];

  return (
    <div className={classes.servicesContainer}>
      <IonText color="light">
        <h2 className={classes.sectionTitle}>Доступных услугах</h2>
      </IonText>

      <div className={classes.servicesContent}>
        {services.map((service) => (
          <IonCard key={service.id} className={classes.glassCard}>
            <IonCardHeader className={classes.cardHeader}>
              <div className={classes.iconWrapper}>
                <IonIcon icon={service.icon} />
              </div>
            </IonCardHeader>

            <IonCardContent className={classes.cardContent}>
              <h3 className={classes.serviceTitle}>{service.title}</h3>
              <h2 className={classes.servicePrice}>{service.price}</h2>
              <span className={classes.serviceBadge}>{service.badge}</span>

              {/* Кошумча кызматтар (Add-ons) бөлүмү */}
              <div className={classes.addonsSection}>
                {service.addons.map((addon, index) => (
                  <div key={index} className={classes.addonRow}>
                    <span className={classes.addonName}>{addon.name}</span>
                    <IonButton
                      size="small"
                      fill="clear"
                      className={classes.addonBtn}
                    >
                      {addon.price} <span>+</span>
                    </IonButton>
                  </div>
                ))}
              </div>
            </IonCardContent>
          </IonCard>
        ))}
      </div>
    </div>
  );
};

export default ContentAvailableServices;
