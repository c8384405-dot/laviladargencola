export interface PlatformLink {
  name: string;
  url: string;
  icon: 'airbnb' | 'booking' | 'escapadarural' | 'bodas' | 'youtube';
  color: string;
  badge: string;
  description: string;
}

export const OFFICIAL_PLATFORMS: PlatformLink[] = [
  {
    name: "Airbnb",
    url: "https://es-l.airbnb.com/rooms/6763834?source_impression_id=p3_1787472866_P3QJeQ4aYp_rdMQH",
    icon: "airbnb",
    color: "#FF385C",
    badge: "Superhost · Verificado",
    description: "Reserva íntegra con cancelación flexible y garantía Airbnb."
  },
  {
    name: "Booking.com",
    url: "https://www.booking.com/hotel/es/la-vila-argensola-historic-in-catalonias-heart.es.html",
    icon: "booking",
    color: "#003580",
    badge: "Puntuación Excelente",
    description: "Confirmación inmediata con el respaldo mundial de Booking.com."
  },
  {
    name: "EscapadaRural",
    url: "https://www.escapadarural.com/casa-rural/barcelona/la-vila-d-argencola",
    icon: "escapadarural",
    color: "#2E7D32",
    badge: "Alojamiento Destacado",
    description: "Portal líder de turismo rural en Cataluña y España."
  },
  {
    name: "Bodas.net",
    url: "https://www.bodas.net/fincas/vila-argencola--e252439",
    icon: "bodas",
    color: "#E91E63",
    badge: "Finca Exclusiva",
    description: "Consultas y presupuestos para bodas y celebraciones privadas."
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@LaViladArgen%C3%A7ola",
    icon: "youtube",
    color: "#FF0000",
    badge: "Vídeos & Canal Oficial",
    description: "Recorridos audiovisuales por la masía y las 166 hectáreas."
  }
];

export const HOTEL_INFO = {
  name: "La Vila d'Argençola",
  subtitle: "Masía Modernista del Siglo XVIII (Ampliación 1922) · 166 Ha",
  location: {
    address: "La Vila d'Argençola",
    postalCode: "08251",
    municipality: "Castellnou de Bages",
    comarca: "Bages / Anoia",
    province: "Barcelona",
    geopark: "Geoparque Mundial UNESCO de la Cataluña Central"
  },
  googleMapsUrl: "https://www.google.es/maps/place/La+Vila+d'Argen%C3%A7ola/@41.859213,1.7909027,17z/data=!4m22!1m12!3m11!1s0x12a454532da7d1a7:0x5451a9abdf8118f4!2sLa+Vila+d'Argen%C3%A7ola!5m2!4m1!1i2!8m2!3d41.859213!4d1.793483!9m1!1b1!16s%2Fg%2F11d_z448pf!3m8!1s0x12a454532da7d1a7:0x5451a9abdf8118f4!5m2!4m1!1i2!8m2!3d41.859213!4d1.793483!16s%2Fg%2F11d_z448pf?hl=ca&entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D",
  estateSize: "166 Hectáreas",
  builtYear: "Siglo XVIII · Ampliación modernista 1922",
  capacity: "14 a 20 Huéspedes",
  bedroomsCount: 6,
  bathroomsCount: 6,
  kitchensCount: 2,
  livingRoomsCount: 3,
  phone: "937 43 32 42",
  phoneRaw: "937433242",
  logo: "/logovila.png",
  documentaryTitle: "La carta",
  documentaryUrl: "https://www.youtube.com/watch?v=-VgK4eeSrag",
  documentaryEmbedUrl: "https://www.youtube-nocookie.com/embed/-VgK4eeSrag",
  registrations: {
    catalunya: "PCC-000965",
    espana: "ESHFTU000008091000534253003000000000000000PCC-0009659"
  }
};

// Authentic photos and architectural plans
export const AUTHENTIC_PHOTOS: string[] = [
  "/media/photo-32.jpeg",
  "/media/photo-02.jpeg",
  "/media/photo-03.jpeg",
  "/media/photo-04.jpeg",
  "/media/photo-05.jpeg",
  "/media/photo-06.jpeg",
  "/media/photo-07.jpeg",
  "/media/photo-08.jpeg",
  "/media/photo-09.jpeg",
  "/media/photo-10.jpeg",
  "/media/photo-11.jpeg",
  "/media/photo-12.jpeg",
  "/media/photo-13.jpeg",
  "/media/photo-14.jpeg",
  "/media/photo-15.jpeg",
  "/media/photo-16.jpeg",
  "/media/photo-17.jpeg",
  "/media/photo-18.jpeg",
  "/media/photo-19.jpeg",
  "/media/photo-20.jpeg",
  "/media/photo-21.jpeg",
  "/media/photo-22.jpeg",
  "/media/photo-01.jpeg",
  "/media/photo-24.jpeg",
  "/media/photo-25.jpeg",
  "/media/photo-26.jpeg",
  "/media/photo-27.jpeg",
  "/media/photo-28.jpeg",
  "/media/photo-29.jpeg",
  "/media/photo-30.jpeg",
  "/media/photo-31.jpeg",
  "/media/photo-23.jpeg",
  "/ELSLLACSLESFONTS.png",
  "/ELSLLACS.png",
  "/LESFONTS.png"
];

export interface ReviewItem {
  id: number;
  author: string;
  avatarLetter: string;
  source: string;
  rating: number;
  date: string;
  es: {
    stayType: string;
    quote: string;
    detail: string;
  };
  ca: {
    stayType: string;
    quote: string;
    detail: string;
  };
  en: {
    stayType: string;
    quote: string;
    detail: string;
  };
}

export const TESTIMONIALS_DATA: ReviewItem[] = [
  {
    id: 1,
    author: "Aida García",
    avatarLetter: "A",
    source: "Google Reviews",
    rating: 5,
    date: "2026",
    es: {
      stayType: "Fin de semana en grupo",
      quote: "Hemos pasado el fin de semana en La Vila d'Argençola con un grupo de amigos y ha sido una experiencia inmejorable.",
      detail: "La casa es preciosa, muy amplia y con una decoración cuidada al detalle. Las habitaciones son comodísimas, cada una con su baño privado, lo que da muchísima intimidad. La finca de 166 hectáreas es una maravilla para pasear y desconectar por completo."
    },
    ca: {
      stayType: "Cap de setmana en grup",
      quote: "Hem passat el cap de setmana a La Vila d'Argençola amb un grup d'amics i ha estat una experiència immillorable.",
      detail: "La casa és preciosa, molt àmplia i amb una decoració cuidada al detall. Les habitacions són comodíssimes, cadascuna amb el seu bany privat, cosa que dóna moltíssima intimitat. La finca de 166 hectàrees és una meravella per passejar i desconnectar per complet."
    },
    en: {
      stayType: "Weekend Group Getaway",
      quote: "We spent the weekend at La Vila d'Argençola with a group of friends and it was an unbeatable experience.",
      detail: "The house is stunning, exceptionally spacious and meticulously decorated. The bedrooms are extremely comfortable, each with its own en-suite bathroom providing total privacy. The 166-hectare estate is wonderful for hiking and fully unwinding."
    }
  },
  {
    id: 2,
    author: "Laura Murray",
    avatarLetter: "L",
    source: "Google Reviews",
    rating: 5,
    date: "2026",
    es: {
      stayType: "Celebración Familiar (80 cumpleaños)",
      quote: "Una masía espectacular en un entorno privilegiado. Fuimos toda la familia a celebrar un aniversario y estuvimos encantados.",
      detail: "Los espacios exteriores son increíbles para pasear, desconectar y disfrutar de la naturaleza en estado puro. La atención de los anfitriones fue inmejorable, pendientes de cualquier detalle para que nuestra estancia fuera perfecta."
    },
    ca: {
      stayType: "Celebració Familiar (80è aniversari)",
      quote: "Una masia espectacular en un entorn privilegiat. Vam anar tota la família a celebrar un aniversari i vam quedar encantats.",
      detail: "Els espais exteriors són increïbles per passejar, desconnectar i gaudir de la natura en estat pur. L'atenció dels amfitrions va ser immillorable, pendents de qualsevol detall perquè la nostra estada fos perfecta."
    },
    en: {
      stayType: "Family Celebration (80th Birthday)",
      quote: "A spectacular country house in a privileged setting. Our entire family celebrated a birthday here and we were delighted.",
      detail: "The outdoor grounds are incredible for walking, disconnecting, and enjoying pristine nature. The hosts provided top-tier hospitality, ensuring every detail was looked after for a flawless stay."
    }
  },
  {
    id: 3,
    author: "Enric Rius",
    avatarLetter: "E",
    source: "Google Reviews",
    rating: 5,
    date: "2026",
    es: {
      stayType: "Encuentro de amigos",
      quote: "Excelente estancia en La Vila d'Argençola. La combinación de historia, arquitectura modernista y comodidades modernas está lograda a la perfección.",
      detail: "Las dos cocinas y la gran terraza son ideales para grupos numerosos. Poder disfrutar de toda la finca de 166 Ha con total privacidad y tranquilidad no tiene precio."
    },
    ca: {
      stayType: "Trobada d'amics",
      quote: "Excel·lent estada a La Vila d'Argençola. La combinació d'història, arquitectura modernista i comoditats modernes està aconseguida a la perfecció.",
      detail: "Les dues cuines i la gran terrassa són ideals per a grups nombrosos. Poder gaudir de tota la finca de 166 Ha amb total privadesa i tranquil·litat no té preu."
    },
    en: {
      stayType: "Friends Reunion",
      quote: "Excellent stay at La Vila d'Argençola. The blend of rich history, modernist architecture, and modern amenities is achieved to perfection.",
      detail: "The two kitchens and the vast terrace are ideal for large groups. Having an entire 166-hectare private estate all to ourselves with total peace and serenity is priceless."
    }
  },
  {
    id: 4,
    author: "Marta Guiu",
    avatarLetter: "M",
    source: "Google Reviews",
    rating: 5,
    date: "2026",
    es: {
      stayType: "Escapada Rural",
      quote: "Totalmente recomendable. La tranquilidad es absoluta, solo se escuchan los pájaros y la naturaleza.",
      detail: "La masía es comodísima, impecable y muy limpia. La zona de barbacoa es un auténtico lujo con toda la leña disponible y una gran mesa para comer todos juntos al aire libre."
    },
    ca: {
      stayType: "Escapada Rural",
      quote: "Totalment recomanable. La tranquil·litat és absoluta, només se senten els ocells i la natura.",
      detail: "La masia és comodíssima, impecable i molt neta. La zona de barbacoa és un autèntic luxe amb tota la llenya disponible i una gran taula per menjar tots junts a l'aire lliure."
    },
    en: {
      stayType: "Rural Getaway",
      quote: "Highly recommended. Total serenity; you only hear birdsong and rustling trees.",
      detail: "The estate is supremely comfortable, spotless, and clean. The barbecue area is a true luxury with unlimited firewood provided and a long dining table for open-air meals together."
    }
  },
  {
    id: 5,
    author: "Pilar M-Cañavate",
    avatarLetter: "P",
    source: "Google Reviews",
    rating: 5,
    date: "2026",
    es: {
      stayType: "Reunión Familiar",
      quote: "Un lugar mágico. La casa respira historia y buen gusto. Las camas son súper cómodas.",
      detail: "La calefacción funciona de maravilla y los propietarios nos atendieron con una amabilidad y cariño excepcionales. La decoración con piezas de época restauradas le da un encanto único."
    },
    ca: {
      stayType: "Reunió Familiar",
      quote: "Un lloc màgic. La casa respira història i bon gust. Els llits són súper còmodes.",
      detail: "La calefacció funciona de meravella i els propietaris ens van atendre amb una amabilitat i afecte excepcionals. La decoració amb peces d'època restaurades li dóna un encant únic."
    },
    en: {
      stayType: "Family Gathering",
      quote: "A magical place. The estate exudes authentic history and refined taste. Beds are exceptionally comfortable.",
      detail: "Heating works wonderfully and the owners welcomed us with unmatched warmth and dedication. The vintage restored decor adds unforgettable character."
    }
  },
  {
    id: 6,
    author: "Martín Antúnez",
    avatarLetter: "M",
    source: "Google Reviews",
    rating: 5,
    date: "2026",
    es: {
      stayType: "Vacaciones en la Naturaleza & Drones",
      quote: "10 de 10. Pasamos unos días de desconexión total. Volar el dron por la finca de 166 hectáreas fue una gozada.",
      detail: "Espacio abierto sin interferencias, instalaciones impecables y el entorno del Geoparque de la UNESCO de la Cataluña Central es sencillamente impresionante. ¡Repetiremos seguro!"
    },
    ca: {
      stayType: "Vacances a la Natura & Drons",
      quote: "10 de 10. Vam passar uns dies de desconnexió total. Volar el dron per la finca de 166 hectàrees va ser una passada.",
      detail: "Espai obert sense interferències, instal·lacions impecables i l'entorn del Geoparc de la UNESCO de la Catalunya Central és senzillament impressionant. Repetirem segur!"
    },
    en: {
      stayType: "Nature Vacation & Drone Flights",
      quote: "10 out of 10. Pure relaxation and disconnection. Flying drones across the 166-hectare estate was extraordinary.",
      detail: "Boundless open airspace with zero interference, pristine amenities, and the surrounding UNESCO Central Catalonia Geopark is simply breathtaking. We will certainly return!"
    }
  }
];
