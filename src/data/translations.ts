export type Language = 'es' | 'ca' | 'en';

export interface TranslationDict {
  nav: {
    history: string;
    experiences: string;
    gallery: string;
    video: string;
    reviews: string;
    seeMore: string;
    bookNow: string;
    channel: string;
    phone: string;
  };
  hero: {
    tagline: string;
    title: string;
    description: string;
    reserveOn: string;
    contactPhone: string;
    estatesize: string;
    capacity: string;
    rooms: string;
    geopark: string;
  };
  video: {
    badge: string;
    title: string;
    subtitle: string;
    docuTitle: string;
    docuDesc: string;
    watchOnYoutube: string;
  };
  about: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    featuresTitle: string;
    commonSpacesTitle: string;
    commonSpaces: string[];
    seeFullDetailBtn: string;
  };
  experiences: {
    badge: string;
    title: string;
    subtitle: string;
    huntingTitle: string;
    huntingDesc: string;
    huntingBadge: string;
    droneTitle: string;
    droneDesc: string;
    droneBadge: string;
    wineTitle: string;
    wineDesc: string;
    wineBadge: string;
    geoparkTitle: string;
    geoparkDesc: string;
    geoparkBadge: string;
    historyTitle: string;
    historyDesc: string;
    historyBadge: string;
    baroqueTitle: string;
    baroqueDesc: string;
    baroqueBadge: string;
    tourismTitle: string;
    tourismDesc: string;
    tourismBadge: string;
    bbqTitle: string;
    bbqDesc: string;
    bbqBadge: string;
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
    allPhotos: string;
    counter: string;
    close: string;
  };
  booking: {
    badge: string;
    title: string;
    subtitle: string;
    airbnb: string;
    bookingCom: string;
    escapadaRural: string;
    bodasNet: string;
    youtube: string;
    phoneCall: string;
    registrationsTitle: string;
    catReg: string;
    esReg: string;
    directBookingNote: string;
  };
  seeMoreModal: {
    title: string;
    subtitle: string;
    close: string;
    tabAbout: string;
    tabDocumentary: string;
    tabSpaces: string;
    tabSubdivisions: string;
    tabQuotes: string;
    tabFees: string;
    aboutHeading: string;
    aboutBody: string;
    documentaryHeading: string;
    documentarySub: string;
    documentaryText: string;
    documentaryLinkText: string;
    spacesHeading: string;
    distributionTitle: string;
    distributionItems: string[];
    subdivisionsTitle: string;
    subdivisionsDesc: string;
    guestAccessTitle: string;
    guestAccessDesc: string;
    visitorQuotesTitle: string;
    quotes: { label: string; text: string }[];
    additionalFeesTitle: string;
    fees: { concept: string; price: string }[];
    registrationTitle: string;
    directLinksTitle: string;
    phoneDirect: string;
  };
  testimonials: {
    badge: string;
    title: string;
    googleSummary: string;
    googleRatingText: string;
    verifiedReviewsNote: string;
    previousBtn: string;
    nextBtn: string;
    reviewCounter: string;
  };
  footer: {
    subtitle: string;
    tagline: string;
    navigation: string;
    platforms: string;
    phoneLabel: string;
    rights: string;
    backToTop: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDict> = {
  es: {
    nav: {
      history: "Historia & Masía",
      experiences: "Actividades",
      gallery: "Galería de Fotos",
      video: "Documental & Vídeo",
      reviews: "Opiniones Google",
      seeMore: "Saber Más",
      bookNow: "Reservar",
      channel: "Canal YouTube",
      phone: "Tel: 937433242"
    },
    hero: {
      tagline: "Masía Modernista del XVIII (Ampliación 1922) · 166 Hectáreas",
      title: "El encanto de la tranquilidad en La Vila d'Argençola",
      description: "Destino idílico para familias y grupos de amigos con 166 hectáreas privadas en el corazón del Geoparque UNESCO de la Cataluña Central. Arquitectura modernista e imaginería wagneriana.",
      reserveOn: "Reservar en Plataformas Oficiales",
      contactPhone: "Llamar: 937 433 242",
      estatesize: "166 Ha Privadas",
      capacity: "14-20 Plazas",
      rooms: "6 Hab. / 6 Baños",
      geopark: "Geoparque UNESCO"
    },
    video: {
      badge: "Documental & Entorno Audiovisual",
      title: "La Vila d'Argençola en Imágenes",
      subtitle: "Descubre el documental histórico 'La carta' y la inmensidad de las 166 hectáreas de naturaleza virgen.",
      docuTitle: "Documental 'La carta' (Historia de La Vila d'Argençola)",
      docuDesc: "Un recorrido audiovisual emocionante por el legado, los orígenes modernistas y el patrimonio cultural y natural de la finca.",
      watchOnYoutube: "Ver en YouTube"
    },
    about: {
      badge: "Acerca de este espacio",
      title: "Masía del XVIII con ampliación modernista de 1922",
      p1: "Masía del siglo XVIII, ampliada en estilo modernista e imaginería wagneriana a principios del XX, emana historia y esplendor pasado. No es la típica masía rural tradicional, sino una singular joya arquitectónica.",
      p2: "Destino idílico para familias y grupos de amigos por sus grandes espacios interiores y exteriores. Disfruta de paseos por arboledas, embalses, río, fuentes y campos: un paisaje natural plácido y espectacular al mismo tiempo.",
      p3: "El alojamiento, reformado y decorado elegante y serenamente con piezas de nuestra propia familia, permite disfrutar en común y descansar con total intimidad.",
      featuresTitle: "Puntos Clave del Alojamiento",
      commonSpacesTitle: "Espacios Comunes & Exteriores",
      commonSpaces: [
        "Parking muy amplio dentro de la finca",
        "La Era tradicional catalana",
        "Zona barbacoa con leña incluida",
        "Plaza de la iglesia y capilla histórica",
        "El lago natural y los manantiales",
        "Jardines cuidados y terrazas panorámicas",
        "Paseo privado a lo largo del río"
      ],
      seeFullDetailBtn: "Ver todos los detalles y distribución de La Vila"
    },
    experiences: {
      badge: "Actividades en La Vila y el Entorno",
      title: "Todo lo que puedes disfrutar durante tu estancia",
      subtitle: "Un abanico excepcional de experiencias en 166 hectáreas privadas y en la comarca del Bages y la Cataluña Central.",
      huntingTitle: "Caza Deportiva",
      huntingDesc: "Esta actividad no se menciona habitualmente, pero el huésped con permiso de armas y equipamiento propio puede cazar junto a los cazadores de la Sociedad de Cazadores a la que se tiene cedido el coto.",
      huntingBadge: "Coto Cedido",
      droneTitle: "Vuelo de Drones",
      droneDesc: "Dadas las 166 hectáreas de extensión de la finca, los aficionados a los drones y a la fotografía aérea pueden explayarse libremente en La Vila.",
      droneBadge: "166 Ha de Vuelo",
      wineTitle: "Catas de Vino & Enoturismo D.O. Pla de Bages",
      wineDesc: "Catas de vino a domicilio organizadas en la masía o visitas guiadas a las prestigiosas bodegas del entorno y a las singulares tinas de piedra de la Vall del Flequer.",
      wineBadge: "D.O. Pla de Bages",
      geoparkTitle: "Geoparque Mundial UNESCO de la Cataluña Central",
      geoparkDesc: "Ubicados en pleno Geoparque con visitas geológicas de primer nivel: Parque Cultural de la Montaña de Sal de Cardona, Macizo de Montserrat, Falla del Migmón y Museo de la Minería en Súria, La Plegada del Calvari en Sallent y las formaciones de Artés.",
      geoparkBadge: "Patrimonio UNESCO",
      historyTitle: "Historia Medieval & Ruta de los Maquis",
      historyDesc: "En plena Marca Hispánica medieval y rodeados de románico: Poble Vell de Súria, Castillo de Cardona, Manresa, Monasterio de Sant Benet, núcleo histórico de Castellnou de Bages y senderos de la ruta de los maquis.",
      historyBadge: "Marca Hispánica",
      baroqueTitle: "Ruta del Barroco Catalán",
      baroqueDesc: "Manresa aglutina obras barrocas muy relevantes de Cataluña además del renombrado Museo del Barroco de Cataluña.",
      baroqueBadge: "Arte & Cultura",
      tourismTitle: "Turismo Activo & Naturaleza",
      tourismDesc: "Rutas en bicicleta (BTT), piscinas municipales, pantanos y ríos para el baño, rutas a caballo, vuelos en globo aerostático, petanca, cross golf, senderismo, yoga, observación astronómica de estrellas. Barcelona a 1 h, playas y esquí a 1,5 h.",
      tourismBadge: "Aventura & Relax",
      bbqTitle: "Zona Barbacoa con Leña Incluida",
      bbqDesc: "Espacio cubierto de barbacoa con cabida para todo el grupo, mesa imperial y maravillosas vistas al valle. Os proporcionamos la leña.",
      bbqBadge: "Leña Proporcionada"
    },
    gallery: {
      badge: "Galería Fotográfica",
      title: "Imágenes de La Vila d'Argençola",
      subtitle: "Colección fotográfica completa de la masía, sus estancias, detalles y las 166 hectáreas.",
      allPhotos: "Ver todas las fotos",
      counter: "Foto",
      close: "Cerrar"
    },
    booking: {
      badge: "Reservas Oficiales",
      title: "Reserva tu estancia a través de nuestras plataformas",
      subtitle: "La Vila d'Argençola se reserva exclusivamente a través de los canales oficiales autorizados.",
      airbnb: "Reservar en Airbnb",
      bookingCom: "Reservar en Booking.com",
      escapadaRural: "Reservar en EscapadaRural",
      bodasNet: "Consultar en Bodas.net",
      youtube: "Ver Canal de YouTube",
      phoneCall: "Llamar por teléfono al 937 433 242",
      registrationsTitle: "Datos del Registro Oficial de Turismo",
      catReg: "Cataluña (Número de registro regional)",
      esReg: "España (Número de registro nacional)",
      directBookingNote: "Haz clic en cualquiera de las plataformas oficiales para consultar disponibilidad y tarifas en tiempo real."
    },
    seeMoreModal: {
      title: "Información Completa de La Vila d'Argençola",
      subtitle: "Todo lo que necesitas saber sobre la masía, distribución, documental, servicios y normas de estancia.",
      close: "Cerrar",
      tabAbout: "Acerca del Espacio",
      tabDocumentary: "Documental 'La carta'",
      tabSpaces: "Distribución (14 Plazas)",
      tabSubdivisions: "Els Llacs & Les Fonts",
      tabQuotes: "Visitantes",
      tabFees: "Gastos & Registro",
      aboutHeading: "Una Masía Modernista Única del Siglo XVIII (1922)",
      aboutBody: "LA VILA D'ARGENÇOLA no es la típica masía de estilo rural, ya que es una casa modernista con inspiración wagneriana ampliada a principios del siglo XX sobre la base histórica del siglo XVIII. Destino idílico para familias y grupos de amigos por sus grandes espacios interiores/exteriores. Disfruta de paseos por arboledas, embalses, río, fuentes, campos... un paisaje natural plácido y espectacular al mismo tiempo.",
      documentaryHeading: "Documental Histórico: 'La carta'",
      documentarySub: "Memoria viva, patrimonio y orígenes de La Vila d'Argençola",
      documentaryText: "El documental 'La carta' profundiza en las raíces centenarias de la masía, su singular arquitectura modernista de 1922 con influencias wagnerianas y el vínculo íntimo entre la finca de 166 hectáreas y el paisaje histórico del Bages. Puedes ver la pieza completa en YouTube:",
      documentaryLinkText: "Ver documental 'La carta' en YouTube",
      spacesHeading: "LA VILA - 14 plazas en 6 habitaciones con 6 baños completos",
      distributionTitle: "Distribución Detallada de Estancias:",
      distributionItems: [
        "1 habitación con cama de matrimonio + baño completo privado con ducha.",
        "4 habitaciones con 2 camas individuales + 4 baños completos privados con ducha.",
        "1 habitación con 4 camas individuales + 1 baño completo privado con ducha.",
        "2 cocinas totalmente equipadas con microondas, horno, nevera y congelador, cafeteras de cápsulas/filtro/italiana, tostadora, etc., ambas con mesa para comer, una de ellas con asiento para todos los huéspedes.",
        "3 salas de estar con 3 sofás, que se convierten en sofás cama si se requieren de 1 a 6 plazas adicionales.",
        "Gran terraza amueblada, con toldo corredero y vistas impresionantes del valle de Argençola.",
        "Alojamiento totalmente reformado, todas las habitaciones son diferentes y decoradas con piezas antiguas y vintage, restauradas por nuestra propia familia."
      ],
      subdivisionsTitle: "Opciones para grupos más pequeños:",
      subdivisionsDesc: "Además de alquilar la casa entera (14 plazas), podemos separarlas para grupos más reducidos dando lugar a:\n• ELS LLACS (8 plazas)\n• LES FONTS (6 plazas)\nSi te interesa reservar cualquiera de estas dos opciones, encontrarás los anuncios específicos en las plataformas oficiales.",
      guestAccessTitle: "Acceso de los Huéspedes & Finca",
      guestAccessDesc: "Los huéspedes tienen acceso libre a todo el espacio exterior de la finca que tiene una extensión de nada menos que 166 Ha íntegramente para su disfrute. En el conjunto histórico de la edificación se encuentra también la vivienda del guardés y en la planta superior la residencia vacacional de los propietarios.",
      visitorQuotesTitle: "Así lo han descrito nuestros visitantes:",
      quotes: [
        { label: "La casa", text: "Amplia, luminosa, moderna, cálida, familiar, auténtica, serena, funcional, muy confortable, rústica, romántica, maravillosa, tranquila, magnífica, lujosa, sorprendente." },
        { label: "La decoración", text: "Sofisticada, bonita, cuidada y con piezas familiares restauradas." },
        { label: "Los espacios exteriores", text: "Libertad, paz, naturaleza, inmersión, reflexión, salud, bienestar, diversión, relax, una burbuja de silencio en mitad de la naturaleza." }
      ],
      additionalFeesTitle: "Gastos Adicionales & Suplementos",
      fees: [
        { concept: "Mascota (por favor háganos saber si viene con mascota)", price: "10€ / noche / mascota" },
        { concept: "Cuna con sábanas, trona y bañera para bebé", price: "10€ / noche" },
        { concept: "Plazas extra en sofá-cama (máximo 4 plazas)", price: "25€ / plaza / noche" },
        { concept: "Huésped por el día (visita diurna)", price: "10€ / persona / día" },
        { concept: "Tasa turística (mayores de 16 años)", price: "0,99€ / persona / noche" },
        { concept: "Late check-out (salida tardía bajo petición)", price: "50€" }
      ],
      registrationTitle: "Datos Oficiales del Registro de Turismo",
      directLinksTitle: "Canales Oficiales de Reserva",
      phoneDirect: "Atención Telefónica Directa: 937 433 242"
    },
    testimonials: {
      badge: "Resumen de Reseñas de Google",
      title: "La voz de quienes han vivido La Vila",
      googleSummary: "4,5 de 5 estrellas",
      googleRatingText: "58 reseñas en Google",
      verifiedReviewsNote: "Opiniones auténticas de huéspedes verificados en Google.",
      previousBtn: "Reseña anterior",
      nextBtn: "Reseña siguiente",
      reviewCounter: "Reseña"
    },
    footer: {
      subtitle: "Masía Modernista del XVIII (1922) · 166 Ha Privadas",
      tagline: "Una burbuja de paz, naturaleza y patrimonio en el corazón de Cataluña.",
      navigation: "Secciones",
      platforms: "Plataformas Oficiales",
      phoneLabel: "Teléfono de Contacto",
      rights: "Todos los derechos reservados.",
      backToTop: "Volver arriba"
    }
  },
  ca: {
    nav: {
      history: "Història & Masia",
      experiences: "Activitats",
      gallery: "Galeria de Fotos",
      video: "Documental & Vídeo",
      reviews: "Opinions Google",
      seeMore: "Saber Més",
      bookNow: "Reservar",
      channel: "Canal YouTube",
      phone: "Tel: 937433242"
    },
    hero: {
      tagline: "Masia Modernista del XVIII (Ampliació 1922) · 166 Hectàrees",
      title: "L'encant de la tranquil·litat a La Vila d'Argençola",
      description: "Destinació idíl·lica per a famílies i grups d'amics amb 166 hectàrees privades al cor del Geoparc UNESCO de la Catalunya Central. Arquitectura modernista i imatgeria wagneriana.",
      reserveOn: "Reservar a Plataformes Oficials",
      contactPhone: "Trucar: 937 433 242",
      estatesize: "166 Ha Privades",
      capacity: "14-20 Places",
      rooms: "6 Hab. / 6 Banys",
      geopark: "Geoparc UNESCO"
    },
    video: {
      badge: "Documental & Entorn Audiovisual",
      title: "La Vila d'Argençola en Imatges",
      subtitle: "Descobreix el documental històric 'La carta' i la immensitat de les 166 hectàrees de natura verge.",
      docuTitle: "Documental 'La carta' (Història de La Vila d'Argençola)",
      docuDesc: "Un recorregut audiovisual apassionant pel llegat, els orígens modernistes i el patrimoni cultural i natural de la finca.",
      watchOnYoutube: "Veure a YouTube"
    },
    about: {
      badge: "Sobre aquest espai",
      title: "Masia del XVIII amb ampliació modernista de 1922",
      p1: "Masia del segle XVIII, ampliada en estil modernista i imatgeria wagneriana a principis del XX, emana història i esplendor passat. No és la típica masia rural tradicional, sinó una joia arquitectònica singular.",
      p2: "Destinació idíl·lica per a famílies i grups d'amics pels seus grans espais interiors i exteriors. Gaudeix de passejades per arbredes, embassaments, riu, fonts i camps: un paisatge natural plàcid i espectacular alhora.",
      p3: "L'allotjament, reformat i decorat elegantment i amb serenor amb peces de la nostra pròpia família, permet gaudir en comunitat i descansar amb total intimitat.",
      featuresTitle: "Punts Clau de l'Allotjament",
      commonSpacesTitle: "Espais Comuns & Exteriors",
      commonSpaces: [
        "Aparcament molt ampli dins la finca",
        "L'Era tradicional catalana",
        "Zona barbacoa amb llenya inclosa",
        "Plaça de l'església i capella històrica",
        "El llac natural i les fonts",
        "Jardins cuidats i terrasses panoràmiques",
        "Passeig privat al llarg del riu"
      ],
      seeFullDetailBtn: "Veure tots els detalls i distribució de La Vila"
    },
    experiences: {
      badge: "Activitats a La Vila i a l'Entorn",
      title: "Tot el que pots gaudir durant la teva estada",
      subtitle: "Un ventall excepcional d'experiències en 166 hectàrees privades i a la comarca del Bages i la Catalunya Central.",
      huntingTitle: "Caça Esportiva",
      huntingDesc: "Aquesta activitat no s'esmenta habitualment, però l'hoste amb permís d'armes i equipament propi pot caçar amb els caçadors de la Societat de Caçadors a qui es té cedit el vedat.",
      huntingBadge: "Vedat Cedit",
      droneTitle: "Vol de Drons",
      droneDesc: "Ateses les 166 hectàrees d'extensió de la finca, els aficionats als drons i a la fotografia aèria poden gaudir lliurement a La Vila.",
      droneBadge: "166 Ha de Vol",
      wineTitle: "Tastos de Vi & Enoturisme D.O. Pla de Bages",
      wineDesc: "Tastos de vi a domicili organitzats a la masia o visites guiades als prestigiosos cellers de l'entorn i a les singulars tines de pedra de la Vall del Flequer.",
      wineBadge: "D.O. Pla de Bages",
      geoparkTitle: "Geoparc Mundial UNESCO de la Catalunya Central",
      geoparkDesc: "Ubicats en ple Geoparc amb visites geològiques de primer nivell: Parc Cultural de la Muntanya de Sal de Cardona, Massís de Montserrat, Falla del Migmón i Museu de la Mineria a Súria, La Plegada del Calvari a Sallent i les formacions d'Artés.",
      geoparkBadge: "Patrimoni UNESCO",
      historyTitle: "Història Medieval & Ruta dels Maquis",
      historyDesc: "En plena Marca Hispànica medieval i envoltats de romànic: Poble Vell de Súria, Castell de Cardona, Manresa, Monestir de Sant Benet, nucli històric de Castellnou de Bages i senders de la ruta dels maquis.",
      historyBadge: "Marca Hispànica",
      baroqueTitle: "Ruta del Barroc Català",
      baroqueDesc: "Manresa aglutina obres barroques molt rellevants de Catalunya a més del reconegut Museu del Barroc de Catalunya.",
      baroqueBadge: "Art & Cultura",
      tourismTitle: "Turisme Actiu & Natura",
      tourismDesc: "Rutes en bicicleta (BTT), piscines municipals, pantans i rius per al bany, rutes a cavall, vols en globus aerostàtic, petanca, cross golf, senderisme, ioga, observació astronòmica d'estrelles. Barcelona a 1 h, platges i esquí a 1,5 h.",
      tourismBadge: "Aventura & Relax",
      bbqTitle: "Zona Barbacoa amb Llenya Inclosa",
      bbqDesc: "Espai cobert de barbacoa amb cabuda per a tot el grup, taula imperial i meravelloses vistes a la vall. Us proporcionem la llenya.",
      bbqBadge: "Llenya Proporcionada"
    },
    gallery: {
      badge: "Galeria Fotogràfica",
      title: "Imatges de La Vila d'Argençola",
      subtitle: "Col·lecció fotogràfica completa de la masia, les estances, detalls i les 166 hectàrees.",
      allPhotos: "Veure totes les fotos",
      counter: "Foto",
      close: "Tancar"
    },
    booking: {
      badge: "Reserves Oficials",
      title: "Reserva la teva estada a través de les nostres plataformes",
      subtitle: "La Vila d'Argençola es reserva exclusivament a través dels canals oficials autoritzats.",
      airbnb: "Reservar a Airbnb",
      bookingCom: "Reservar a Booking.com",
      escapadaRural: "Reservar a EscapadaRural",
      bodasNet: "Consultar a Bodas.net",
      youtube: "Veure Canal de YouTube",
      phoneCall: "Trucar per telèfon al 937 433 242",
      registrationsTitle: "Dades del Registre Oficial de Turisme",
      catReg: "Catalunya (Número de registre regional)",
      esReg: "Espanya (Número de registre nacional)",
      directBookingNote: "Fes clic a qualsevol de les plataformes oficials per consultar disponibilitat i tarifes en temps real."
    },
    seeMoreModal: {
      title: "Informació Completa de La Vila d'Argençola",
      subtitle: "Tot el que necessites saber sobre la masia, distribució, documental, serveis i normes d'estada.",
      close: "Tancar",
      tabAbout: "Sobre l'Espai",
      tabDocumentary: "Documental 'La carta'",
      tabSpaces: "Distribució (14 Places)",
      tabSubdivisions: "Els Llacs & Les Fonts",
      tabQuotes: "Visitants",
      tabFees: "Despeses & Registre",
      aboutHeading: "Una Masia Modernista Única del Segle XVIII (1922)",
      aboutBody: "LA VILA D'ARGENÇOLA no és la típica masia d'estil rural, ja que és una casa modernista amb inspiració wagneriana ampliada a principis del segle XX sobre la base històrica del segle XVIII. Destinació idíl·lica per a famílies i grups d'amics pels seus grans espais interiors/exteriors. Gaudeix de passejades per arbredes, embassaments, riu, fonts, camps... un paisatge natural plàcid i espectacular alhora.",
      documentaryHeading: "Documental Històric: 'La carta'",
      documentarySub: "Memòria viva, patrimoni i orígens de La Vila d'Argençola",
      documentaryText: "El documental 'La carta' aprofundeix en les arrels centenàries de la masia, la seva singular arquitectura modernista de 1922 amb influències wagnerianes i el vincle íntim entre la finca de 166 hectàrees i el paisatge històric del Bages. Pots veure la peça completa a YouTube:",
      documentaryLinkText: "Veure documental 'La carta' a YouTube",
      spacesHeading: "LA VILA - 14 places en 6 habitacions amb 6 banys complets",
      distributionTitle: "Distribució Detallada de les Estances:",
      distributionItems: [
        "1 habitació amb llit de matrimoni + bany complet privat amb dutxa.",
        "4 habitacions amb 2 llits individuals + 4 banys complets privats amb dutxa.",
        "1 habitació amb 4 llits individuals + 1 bany complet privat amb dutxa.",
        "2 cuines totalment equipades amb microones, forn, nevera i congelador, cafeteres de càpsules/filtre/italiana, torradora, etc., ambdues amb taula per menjar, una d'elles amb seient per a tots els hostes.",
        "3 sales d'estar amb 3 sofàs, que es converteixen en sofàs llit si es requereixen d'1 a 6 places addicionals.",
        "Gran terrassa moblada, amb tendal corredís i vistes impressionants de la vall d'Argençola.",
        "Allotjament totalment reformat, totes les habitacions són diferents i decorades amb peces antigues i vintage, restaurades per la nostra pròpia família."
      ],
      subdivisionsTitle: "Opcions per a grups més petits:",
      subdivisionsDesc: "A més de llogar la casa sencera (14 places), podem separar-les per a grups més reduïts donant lloc a:\n• ELS LLACS (8 places)\n• LES FONTS (6 places)\nSi t'interessa reservar qualsevol d'aquestes dues opcions, trobaràs els anuncis específics a les plataformes oficials.",
      guestAccessTitle: "Accés dels Hostes & Finca",
      guestAccessDesc: "Els hostes tenen accés lliure a tot l'espai exterior de la finca que té una extensió de ni més ni menys que 166 Ha íntegrament per al seu gaudi. En el conjunt històric de l'edificació es troba també l'habitatge del masover i a la planta superior la residència de vacances dels propietaris.",
      visitorQuotesTitle: "Així ho han descrit els nostres visitants:",
      quotes: [
        { label: "La casa", text: "Àmplia, lluminosa, moderna, càlida, familiar, autèntica, serena, funcional, molt confortable, rústica, romàntica, meravellosa, tranquil·la, magnífica, luxosa, sorprenent." },
        { label: "La decoració", text: "Sofisticada, bonica, cuidada i amb peces familiars restaurades." },
        { label: "Els espais exteriors", text: "Llibertat, pau, natura, immersió, reflexió, salut, benestar, diversió, relax, una bombolla de silenci enmig de la natura." }
      ],
      additionalFeesTitle: "Despeses Addicionals & Suplements",
      fees: [
        { concept: "Mascota (si us plau feu-nos saber si veniu amb mascota)", price: "10€ / nit / mascota" },
        { concept: "Bressol amb llençols, trona i banyera per a nadó", price: "10€ / nit" },
        { concept: "Places extra en sofà-llit (màxim 4 places)", price: "25€ / plaça / nit" },
        { concept: "Hoste pel dia (visita diürna)", price: "10€ / persona / dia" },
        { concept: "Taxa turística (majors de 16 anys)", price: "0,99€ / persona / nit" },
        { concept: "Late check-out (sortida tardana sota petició)", price: "50€" }
      ],
      registrationTitle: "Dades Oficials del Registre de Turisme",
      directLinksTitle: "Canals Oficials de Reserva",
      phoneDirect: "Atenció Telefònica Directa: 937 433 242"
    },
    testimonials: {
      badge: "Resum de Ressenyes de Google",
      title: "La veu de qui ha viscut La Vila",
      googleSummary: "4,5 de 5 estrelles",
      googleRatingText: "58 ressenyes a Google",
      verifiedReviewsNote: "Opinions autèntiques d'hostes verificats a Google.",
      previousBtn: "Ressenya anterior",
      nextBtn: "Ressenya següent",
      reviewCounter: "Ressenya"
    },
    footer: {
      subtitle: "Masia Modernista del XVIII (1922) · 166 Ha Privades",
      tagline: "Una bombolla de pau, natura i patrimoni al cor de Catalunya.",
      navigation: "Seccions",
      platforms: "Plataformes Oficials",
      phoneLabel: "Telèfon de Contacte",
      rights: "Tots els drets reservats.",
      backToTop: "Tornar a dalt"
    }
  },
  en: {
    nav: {
      history: "History & Estate",
      experiences: "Activities",
      gallery: "Photo Gallery",
      video: "Documentary & Video",
      reviews: "Google Reviews",
      seeMore: "Learn More",
      bookNow: "Book Now",
      channel: "YouTube Channel",
      phone: "Tel: 937433242"
    },
    hero: {
      tagline: "18th-Century Modernist Estate (1922 Expansion) · 166 Hectares",
      title: "The charm of tranquility at La Vila d'Argençola",
      description: "An idyllic sanctuary for families and friend gatherings set in 166 private hectares in the UNESCO Central Catalonia Geopark. Modernist architecture with Wagnerian flair.",
      reserveOn: "Book on Official Platforms",
      contactPhone: "Call: 937 433 242",
      estatesize: "166 Private Ha",
      capacity: "14-20 Guests",
      rooms: "6 Bed / 6 Bath",
      geopark: "UNESCO Geopark"
    },
    video: {
      badge: "Documentary & Visual Journey",
      title: "La Vila d'Argençola in Motion",
      subtitle: "Discover the historical documentary 'La carta' and the serenity of 166 private hectares of pristine nature.",
      docuTitle: "Documentary 'La carta' (The History of La Vila d'Argençola)",
      docuDesc: "An evocative audiovisual exploration of the estate's heritage, 1922 modernist origins, and natural sanctuary in Catalonia.",
      watchOnYoutube: "Watch on YouTube"
    },
    about: {
      badge: "About This Space",
      title: "18th-Century Estate with 1922 Modernist Expansion",
      p1: "An 18th-century country estate, expanded in early 20th-century modernist style with Wagnerian imagery, radiating history and timeless grandeur. Far from an ordinary rural house, it is a truly singular architectural gem.",
      p2: "An idyllic destination for families and groups of friends thanks to generous indoor and outdoor grounds. Enjoy strolls through groves, reservoirs, the river, springs, and fields: a serene and magnificent landscape.",
      p3: "The accommodation, completely renovated and serenely decorated with restored family vintage pieces, invites guests to celebrate together while enjoying complete private seclusion.",
      featuresTitle: "Accommodation Highlights",
      commonSpacesTitle: "Common Grounds & Outdoors",
      commonSpaces: [
        "Spacious on-site private parking",
        "Traditional Catalan stone threshing floor (La Era)",
        "Stone barbecue area with firewood included",
        "Historic church square and private chapel",
        "Natural lake and freshwater springs",
        "Manicured gardens and panoramic terraces",
        "Private walkway alongside the river"
      ],
      seeFullDetailBtn: "View complete layout and details of La Vila"
    },
    experiences: {
      badge: "Activities at La Vila & Surroundings",
      title: "Everything you can experience during your stay",
      subtitle: "An exceptional array of activities across 166 private hectares and the Bages region in Central Catalonia.",
      huntingTitle: "Sport Hunting",
      huntingDesc: "This activity is seldom advertised, but guests with a valid firearms license and their own equipment can join hunters from the local Hunting Society holding the estate hunting lease.",
      huntingBadge: "Licensed Grounds",
      droneTitle: "Drone Flying",
      droneDesc: "With 166 hectares of open private grounds, drone and aerial photography enthusiasts have boundless space to fly freely at La Vila.",
      droneBadge: "166 Ha Airspace",
      wineTitle: "Wine Tastings & D.O. Pla de Bages Wine Tourism",
      wineDesc: "In-house sommelier wine tastings arranged at the estate or guided tours to renowned nearby vineyards and the historic stone vats of Vall del Flequer.",
      wineBadge: "D.O. Pla de Bages",
      geoparkTitle: "UNESCO World Geopark of Central Catalonia",
      geoparkDesc: "Located in the heart of the Geopark with world-class geological landmarks: Cardona Salt Mountain Cultural Park, Montserrat Massif, Migmón Fault & Mining Museum in Súria, Sallent Calvari Fold, and Artés formations.",
      geoparkBadge: "UNESCO Heritage",
      historyTitle: "Medieval History & Maquis Trail",
      historyDesc: "Immersed in the medieval Hispanic March surrounded by Romanesque heritage: Súria Old Town, Cardona Castle, Manresa, Sant Benet Monastery, Castellnou de Bages historic core, and Maquis resistance trails.",
      historyBadge: "Hispanic March",
      baroqueTitle: "Catalan Baroque Heritage",
      baroqueDesc: "Manresa showcases exceptional Catalan Baroque landmarks alongside the renowned Baroque Museum of Catalonia.",
      baroqueBadge: "Art & Culture",
      tourismTitle: "Active Tourism & Outdoors",
      tourismDesc: "Mountain biking trails, municipal swimming pools, wild river/reservoir bathing, horseback riding, hot-air balloon flights, pétanque, cross golf, hiking, yoga, and star gazing. Barcelona is 1h away, beaches and ski resorts 1.5h.",
      tourismBadge: "Adventure & Peace",
      bbqTitle: "Barbecue Area with Firewood Included",
      bbqDesc: "Covered stone barbecue facility accommodating the entire group with an imperial dining table and panoramic valley views. We provide the firewood.",
      bbqBadge: "Wood Provided"
    },
    gallery: {
      badge: "Photo Gallery",
      title: "Images of La Vila d'Argençola",
      subtitle: "Complete authentic photo collection of the estate, interior rooms, details, and 166 private hectares.",
      allPhotos: "View all photos",
      counter: "Photo",
      close: "Close"
    },
    booking: {
      badge: "Official Bookings",
      title: "Book your stay through our verified platforms",
      subtitle: "La Vila d'Argençola is booked exclusively via our official authorized channels.",
      airbnb: "Book on Airbnb",
      bookingCom: "Book on Booking.com",
      escapadaRural: "Book on EscapadaRural",
      bodasNet: "Inquire on Bodas.net",
      youtube: "Visit YouTube Channel",
      phoneCall: "Call direct at 937 433 242",
      registrationsTitle: "Official Tourism Registry Information",
      catReg: "Catalonia (Regional Registry Number)",
      esReg: "Spain (National Registry Number)",
      directBookingNote: "Click any of the official platforms to check real-time availability and verified rates."
    },
    seeMoreModal: {
      title: "Full Information on La Vila d'Argençola",
      subtitle: "Everything you need to know about the estate, layout, documentary, amenities, and house rules.",
      close: "Close",
      tabAbout: "About the Estate",
      tabDocumentary: "Documentary 'La carta'",
      tabSpaces: "Layout (14 Guests)",
      tabSubdivisions: "Els Llacs & Les Fonts",
      tabQuotes: "Visitors",
      tabFees: "Fees & Registry",
      aboutHeading: "A Unique 18th-Century Modernist Estate (1922)",
      aboutBody: "LA VILA D'ARGENÇOLA is not a typical rural house; it is a modernist country mansion with Wagnerian inspiration expanded in the early 20th century upon 18th-century stone foundations. An idyllic getaway for families and friends with expansive indoor and outdoor grounds. Enjoy strolls through groves, reservoirs, river paths, and fields—a peaceful and spectacular natural setting.",
      documentaryHeading: "Historical Documentary: 'La carta'",
      documentarySub: "Living heritage, history, and roots of La Vila d'Argençola",
      documentaryText: "The documentary 'La carta' explores the centuries-old history of the country estate, its 1922 modernist architecture with Wagnerian motifs, and the intimate link between the 166 private hectares and the landscape of Central Catalonia. Watch the complete film on YouTube:",
      documentaryLinkText: "Watch documentary 'La carta' on YouTube",
      spacesHeading: "LA VILA - 14 Guests in 6 Bedrooms with 6 Full En-Suite Bathrooms",
      distributionTitle: "Detailed Room & Living Layout:",
      distributionItems: [
        "1 bedroom with double bed + private en-suite bathroom with shower.",
        "4 bedrooms with 2 single beds each + 4 private en-suite bathrooms with shower.",
        "1 bedroom with 4 single beds + 1 private en-suite bathroom with shower.",
        "2 fully equipped kitchens with microwave, oven, fridge/freezer, pod/drip/moka coffee makers, toaster, each with dining table, one seating all guests.",
        "3 living rooms with 3 sofas, convertible into sofa-beds providing 1 to 6 additional spots if needed.",
        "Large furnished terrace with sliding awning and breathtaking panoramic views of the Argençola valley.",
        "Completely renovated house where each bedroom is unique and decorated with antique and vintage pieces restored by our own family."
      ],
      subdivisionsTitle: "Options for smaller groups:",
      subdivisionsDesc: "Besides renting the entire house (14 guests), the estate can be configured for smaller groups into:\n• ELS LLACS (8 guests)\n• LES FONTS (6 guests)\nIf you are interested in booking either option, you will find dedicated listings on official platforms.",
      guestAccessTitle: "Guest Access & Grounds",
      guestAccessDesc: "Guests enjoy unrestricted access to the entire 166-hectare outdoor estate for their private enjoyment. The historic architectural ensemble also houses the caretaker's residence and the owners' private vacation home on the top floor.",
      visitorQuotesTitle: "How our visitors describe La Vila:",
      quotes: [
        { label: "The house", text: "Spacious, luminous, modern, warm, family-oriented, authentic, serene, functional, very comfortable, rustic, romantic, wonderful, peaceful, magnificent, luxurious, surprising." },
        { label: "The decoration", text: "Sophisticated, beautiful, meticulously curated with lovingly restored family antiques." },
        { label: "The outdoor grounds", text: "Freedom, peace, nature, immersion, reflection, health, wellness, fun, relaxation, a bubble of silence in the heart of nature." }
      ],
      additionalFeesTitle: "Additional Fees & Supplements",
      fees: [
        { concept: "Pet fee (please notify us if bringing a pet)", price: "10€ / night / pet" },
        { concept: "Baby crib with sheets, highchair and baby bathtub", price: "10€ / night" },
        { concept: "Extra sofa-bed sleeping spots (up to 4)", price: "25€ / spot / night" },
        { concept: "Day guest (daytime visitors)", price: "10€ / person / day" },
        { concept: "Tourist tax (guests 16+)", price: "0.99€ / person / night" },
        { concept: "Late check-out (upon request)", price: "50€" }
      ],
      registrationTitle: "Official Tourism Registration Details",
      directLinksTitle: "Official Booking Channels",
      phoneDirect: "Direct Phone Support: 937 433 242"
    },
    testimonials: {
      badge: "Google Reviews Summary",
      title: "Voices of those who experienced La Vila",
      googleSummary: "4.5 out of 5 stars",
      googleRatingText: "58 Google Reviews",
      verifiedReviewsNote: "Authentic reviews from verified Google guests.",
      previousBtn: "Previous review",
      nextBtn: "Next review",
      reviewCounter: "Review"
    },
    footer: {
      subtitle: "18th-Century Modernist Estate (1922) · 166 Private Ha",
      tagline: "A sanctuary of peace, nature, and heritage in Central Catalonia.",
      navigation: "Navigation",
      platforms: "Official Platforms",
      phoneLabel: "Contact Phone",
      rights: "All rights reserved.",
      backToTop: "Back to top"
    }
  }
};

