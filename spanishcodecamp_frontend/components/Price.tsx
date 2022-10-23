import React from "react";
import PriceCard from "./PriceCard";

const Price = () => {
  const premiun = [
    {
      name: "Acceso todos los cursos.",
    },
    {
      name: "Adquiere conocimientos avanzados.",
    },
    {
      name: "Aprende Frameworks como React, Django, etc.",
    },
    {
      name: "Practica con nuestros ejercicios y projectos.",
    },
    {
      name: "Visualiza tus avances con el monitor de seguimiento.",
    },
  ];
  const free = [
    { name: "Acceso a cursos gratis." },
    { name: "Adquiere conocimientos basicos." },
    { name: "Practica con nuestros ejercicios." },
  ];

  const unit = [
    { name: "Acceso de por vida por los cursos que compres." },
    { name: "Adquiere conocimientos avanzados." },
    { name: "Practica con nuestro ejercicios." },
    { name: "Visualiza tus avances con el monitor de seguimiento" },
  ];

  return (
    <div className="flex flex-col items-center text-white">
      <span className="text-[4rem] font-extrabold">Precios</span>
      <div className="flex items-end gap-[4rem]">
        <PriceCard
          type={1}
          title="Plan Gratuito"
          description="Adquiere acceso a todos los cursos gratuitos."
          contain={free}
          price="$0"
          priceType=""
        />
        <PriceCard
          type={2}
          title="Plan Premiun"
          description="Adquiere acceso a todos los cursos de la plataforma."
          contain={premiun}
          price="$5"
          priceType="/mes"
        />
        <PriceCard
          type={3}
          title="Plan Estandar"
          description="Compra los cursos de manera individual."
          contain={unit}
          price="$10"
          priceType="/c"
        />
      </div>
    </div>
  );
};

export default Price;
