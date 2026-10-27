export type WhatsAppContact = {
  display: string;
  number: string;
};

export const invitation = {
  title: "Yazmin Fest",
  name: "Yazmin",
  date: "2026-11-20",
  countdownDate: "2026-11-20T22:00:00-03:00",
  dateLabel: "20 de noviembre",
  yearLabel: "2026",
  guestArrival: "22:00",
  celebrantEntrance: "23:00",
  venue: "Salón Isaura Eventos",
  address: "Ayacucho 300, Alderetes",
  giftAlias: "yazminsc18",
};

export const whatsappContacts: WhatsAppContact[] = [
  { display: "+54 9 381 613-6054", number: "5493816136054" },
  { display: "+54 9 381 490-7903", number: "5493814907903" },
];

export function getWhatsAppUrl(number: string) {
  const message =
    "Hola, quiero confirmar mi asistencia al Yazmin Fest. Mi nombre es: ";

  return "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
}

export const mapEmbedUrl =
  "https://maps.google.com/maps?q=" +
  encodeURIComponent(invitation.venue + ", " + invitation.address + ", Tucumán, Argentina") +
  "&output=embed";
