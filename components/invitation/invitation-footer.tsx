import Image from "next/image";
import ImageFinal from "@/assets/foto-final.jpeg";
import { invitation } from "@/lib/invitation";
import { BotanicalDecoration } from "./botanical-decoration";
import { ScrollReveal } from "./scroll-reveal";

export function InvitationFooter() {
  return (
    <footer
      className="relative isolate flex min-h-svh items-center overflow-hidden px-6 py-12 text-center text-paper"
      style={{ backgroundColor: "var(--silver-dark)" }}
    >
      <BotanicalDecoration composition="master-arrangement" position="top-center" variant="light" />
      <BotanicalDecoration composition="master-arrangement" position="bottom-center" variant="light" />
      <ScrollReveal
        className="relative z-10 mx-auto w-full max-w-3xl"
        variant="signature"
      >
        <div className="pt-7">
          <p className="font-script text-4xl">Con cariño, {invitation.name}</p>
        </div>
        <Image
          alt="Yazmin junto a otra persona, sosteniendo un retrato enmarcado."
          className="mx-auto mt-8 h-auto w-full max-w-[26rem] rounded-2xl object-cover"
          height={ImageFinal.height}
          sizes="(max-width: 767px) calc(100vw - 48px), 416px"
          src={ImageFinal}
          width={ImageFinal.width}
        />
      </ScrollReveal>
    </footer>
  );
}
