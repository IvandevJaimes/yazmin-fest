import { CountdownSection } from "./countdown-section";
import { EventDetails } from "./event-details";
import { GiftSection } from "./gift-section";
import { InvitationFooter } from "./invitation-footer";
import { InvitationHero } from "./invitation-hero";
import { PhotoGallery } from "./photo-gallery";
import { RsvpSection } from "./rsvp-section";

export function InvitationPage() {
  return (
    <main>
      <InvitationHero />
      <EventDetails />
      <CountdownSection />
      <PhotoGallery />
      <GiftSection />
      <RsvpSection />
      <InvitationFooter />
    </main>
  );
}
