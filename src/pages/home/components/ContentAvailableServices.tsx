import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonIcon,
  IonButton,
  IonText,
} from "@ionic/react";
import classes from "../index.module.css";
import {
  homeOutline,
  busOutline,
  trashBinOutline,
  hammerOutline,
  cubeOutline,
  peopleOutline,
} from "ionicons/icons";
import { formatPrice } from "../../../utils/helpers/price.helper";

const ContentAvailableServices = () => {
  const services = [
    {
      id: 1,
      title: "🏠 Үйдөн үйгө көчүрүү",
      price: 1500,
      icon: homeOutline,
      badge: "Толук көчүрүү",
      addons: [
        { name: "Грузчиктер", price: "+250 сом" },
        { name: "Лифт жок", price: "+100 сом/кабат" },
        { name: "Түнкү тариф", price: "+300 сом" },
      ],
    },
    {
      id: 2,
      title: "🏬 Базар/Дүкөн",
      price: 800,
      icon: busOutline,
      badge: "Сатып алууларды жеткирүү",
      addons: [
        { name: "Грузчиктер", price: "+250 сом" },
        { name: "Лифт жок", price: "+100 сом/кабат" },
        { name: "Түнкү тариф", price: "+300 сом" },
      ],
    },
    {
      id: 3,
      title: "🗑️ Мусор ташуу",
      price: 1000,
      icon: trashBinOutline,
      badge: "Эски буюмдарды чыгаруу",
      addons: [
        { name: "Грузчиктер", price: "+250 сом" },
        { name: "Лифт жок", price: "+100 сом/кабат" },
      ],
    },
    {
      id: 4,
      title: "🔨 Курулуш материалдары",
      price: 1200,
      icon: hammerOutline,
      badge: "Кирпич, цемент, блок",
      addons: [
        { name: "Грузчиктер", price: "+250 сом" },
        { name: "Лифт жок", price: "+100 сом/кабат" },
      ],
    },
    {
      id: 5,
      title: "📦 Кум, шагыл, таш, топурак",
      price: "Договорная",
      icon: cubeOutline,
      badge: "Көлөмдүү жүктөр",
      addons: [
        { name: "Грузчиктер", price: "+250 сом" },
        { name: "Лифт жок", price: "+100 сом/кабат" },
      ],
    },
    {
      id: 6,
      title: "🤝 Портер кызматы",
      price: 500,
      icon: peopleOutline,
      badge: "Кол менен жүк ташуу",
      addons: [
        { name: "Грузчиктер", price: "+250 сом" },
        { name: "Лифт жок", price: "+100 сом/кабат" },
        { name: "Түнкү тариф", price: "+300 сом" },
      ],
    },
  ];

  return (
    <div className={classes.servicesContainer}>
      <IonText color="light">
        <h2 className={classes.sectionTitle}>Биздин кызматтар</h2>
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
              <h2 className={classes.servicePrice}>
                {typeof service.price === "string"
                  ? service.price
                  : formatPrice(service.price)}
              </h2>
              <span className={classes.serviceBadge}>{service.badge}</span>

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
