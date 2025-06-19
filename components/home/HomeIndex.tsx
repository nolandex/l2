import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import Feature from "@/components/home/Feature";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";
import Testimonials from "@/components/home/Testimonials";
import { defaultLocale, getDictionary } from "@/lib/i18n";

export default async function HomeIndex({ lang }: { lang: string }) {
  const langName = lang || defaultLocale;
  const dict = await getDictionary(langName);

  return (
    <>
      {/* Hero Section */}
      <Hero locale={dict.Hero} langName={langName} CTALocale={dict.CTAButton} />

      {/* Showcase */}
      {/* <Showcase id="Showcase" locale={dict.Showcase} /> */}

      {/* USP (Unique Selling Proposition) */}
      {/* ID diubah menjadi huruf kecil agar konsisten */}
      <Feature id="features" locale={dict.Feature} langName={langName} />

      {/* Pricing */}
      {/* ============================================================
        ===> PERUBAHAN UTAMA DI SINI <===
        ID diubah dari "Pricing" menjadi "pricing" agar cocok dengan link di tombol.
        ============================================================
      */}
      <Pricing id="pricing" locale={dict.Pricing} langName={langName} />

      {/* Testimonials */}
      {/* ID diubah menjadi huruf kecil agar konsisten */}
      <Testimonials id="testimonials" locale={dict.Testimonials} />

      {/* FAQ (Frequently Asked Questions) */}
      {/* ID diubah menjadi huruf kecil agar konsisten */}
      <FAQ id="faq" locale={dict.FAQ} langName={langName} />

      {/* CTA (Call to Action) */}
      <CTA locale={dict.CTA} CTALocale={dict.CTAButton} />
    </>
  );
}
