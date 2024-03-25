import React from 'react'

const Services = () => {
  const servicesData = [
    { 
      icon: 'flaticon-test', 
      title: "Fonction de recherche avancée:", 
      description: "Une fonction de recherche avancée permettant aux utilisateurs de trouver facilement les équipements dont ils ont besoin en fonction de critères spécifiques tels que le type d'équipement",
    },
    { 
      icon: 'flaticon-test', 
      title: "Profils d'utilisateurs:", 
      description: "Offrir la possibilité aux utilisateurs de créer des profils personnels où ils peuvent spécifier leurs besoins en équipements médicaux et recevoir des notifications lorsque de nouveaux équipements correspondant à leurs critères sont disponibles",
    },
    { 
      icon: 'flaticon-test', 
      title: "Fonctionnalités de communication:", 
      description: "Des fonctionnalités de communication intégrées telles que messagerie instantanée ou forums de discussion pour permettre aux utilisateurs de poser des questions, de demander de l'aide ou de partager des informations sur les équipements médicaux disponibles.",
    },
    { 
      icon: 'flaticon-test', 
      title: "Accessibilité:", 
      description: "Garantir que le site est facilement accessible aux personnes handicapées en conformité avec les normes d'accessibilité Web.",
    },
  ];

  return (
    <section id="services" aria-labelledby="services-heading" className="mt-8">
      <div className="mx-auto p-2 rounded-xl">
        <h2 id="services-heading" className="text-4xl font-bold text-center text-[--textColor] mb-10">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="rounded-xl shadow px-4 bg-cover bg-[#00A4BF] rounded-l-none rounded-b-none" data-aos="fade-up" data-aos-delay="">
               <h3 className="text-lg text-center py-6 text-[--bg] h-24 font-bold">{service.title}</h3>
              <p className="text-[--bg] text-md py-4 pb-12">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services