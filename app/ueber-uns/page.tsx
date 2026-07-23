import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Über uns – Franco Lindura & das Team | Goldenes Rössli Wil",
  description:
    "Franco Lindura, geboren in Benevento, kochte im Hangar-7 Salzburg und in der Vila Joya an der Algarve. Seit März 2024 führt er das Gasthaus Rössli in Wil SG.",
  alternates: { canonical: "/ueber-uns" },
};

export default function UeberUnsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="max-w-6xl mx-auto px-5 md:px-10 pt-14 md:pt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <p className="font-serif italic text-lg text-[var(--gold)]">
                Der Koch im Gasthaus
              </p>
              <h1 className="mt-3 font-serif text-[clamp(2.6rem,7vw,4.5rem)] leading-[1.02]">
                Franco Lindura
              </h1>
              <div className="mt-8 space-y-5 text-[var(--stube-muted)] leading-[1.75] max-w-prose">
                <p>
                  Franco Lindura ist in Benevento geboren, im Hügelland hinter Neapel, und hat
                  sein Handwerk in München gelernt, wo er rund dreissig Jahre lebte. Seine
                  Stationen: das Ikarus im Hangar-7 in Salzburg, die mit zwei Michelin-Sternen
                  ausgezeichnete Vila Joya an der Algarve, das Rosa Alpina in Südtirol, La
                  Barakka in Luzern. Er hat mit Juan Amador, Dieter Müller und Eckart
                  Witzigmann gearbeitet.
                </p>
                <p>
                  «Mit meiner Leidenschaft möchte ich meine Gäste mit Gerichten verwöhnen, die
                  das Herz und die Seele erwärmen.»
                </p>
                <p>
                  Seit dem 1. März 2024 steht er im Rössli am Herd — geholt von Hauseigentümer
                  Turi Breitenmoser, nachdem die Familie Geissbühler das Gasthaus Ende 2023
                  nach vielen Jahren abgegeben hatte. Sein Konzept: Spitzenküche am Abend,
                  drei Mittagsmenüs ab CHF 25.50 für alle, die um halb eins wieder an der
                  Arbeit sein müssen.
                </p>
              </div>
            </div>

            <Reveal>
              <figure>
                <Image
                  src="/images/ueberuns-01.jpg"
                  alt="Küchenchef Franco Lindura in Kochjacke vor dem Weinregal im goldenen Rössli Wil"
                  width={1200}
                  height={1500}
                  className="w-full h-auto"
                  priority
                />
              </figure>
            </Reveal>
          </div>
        </section>

        <section className="bg-[var(--kalk-tief)] mt-16 md:mt-24">
          <div className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <Reveal>
                <Image
                  src="/images/home-02.jpg"
                  alt="Franco Lindura tranchiert einen im Salzteig gebackenen Fisch am Tisch"
                  width={1600}
                  height={1200}
                  className="w-full h-auto"
                />
              </Reveal>
              <div>
                <h2 className="font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] text-[var(--nacht)]">
                  «Kulinarik mit Sterne-Touch»
                </h2>
                <p className="mt-6 text-[var(--stube-muted)] leading-[1.75] max-w-prose">
                  So überschrieb das St.&nbsp;Galler Tagblatt seinen Restauranttest im Rössli
                  und lobte den aufmerksamen Service und das Preis-Leistungs-Verhältnis. Wer
                  es selbst prüfen will: Der Branzino im Salzteig wird am Tisch tranchiert —
                  auf Vorbestellung, für Gäste, die das Essen gern als Vorstellung haben.
                </p>
                <p className="mt-6">
                  <Link href="/reservation" className="link-draw text-[var(--laden)]">
                    Tisch reservieren
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-24">
          <h2 className="font-serif italic text-2xl md:text-3xl text-[var(--laden)]">
            Das Haus
          </h2>
          <p className="mt-4 max-w-prose text-[var(--stube-muted)] leading-[1.75]">
            An der Fassade steht in Goldschrift «Gasthaus Rössli», innen hängen
            Pferdekopf-Lampen aus Messing an den Wänden der getäferten Stube — das Rössli
            ist hier kein Marketing, es ist das Haus. Sogar auf die Frotteetücher im Hotel
            ist es gestickt.
          </p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <Reveal>
              <Image
                src="/images/ueberuns-02.jpg"
                alt="Impression aus dem Restaurant zum goldenen Rössli Wil"
                width={1200}
                height={900}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </Reveal>
            <Reveal delay={60}>
              <Image
                src="/images/ueberuns-03.jpg"
                alt="Impression aus dem Restaurant zum goldenen Rössli Wil"
                width={1200}
                height={900}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </Reveal>
            <Reveal delay={120}>
              <Image
                src="/images/ueberuns-05.jpg"
                alt="Impression aus dem Restaurant zum goldenen Rössli Wil"
                width={1200}
                height={900}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </Reveal>
            <Reveal delay={180}>
              <Image
                src="/images/ueberuns-07.jpg"
                alt="Impression aus dem Restaurant zum goldenen Rössli Wil"
                width={1200}
                height={900}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
