import SectionWithLinks from "./section-with-links";

export default function Footer() {
  return (
    <section className="relative z-10 px-4 py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SectionWithLinks
          title="About Us"
          links={[{ href: "/testimonials.html", label: "Testimonials" }]}
        />
        <SectionWithLinks
          title="Contact Us"
          links={[
            { href: "/", label: "Contact" },
            { href: "/", label: "Associates" },
            { href: "/", label: "Suppliers" },
          ]}
        />
        <SectionWithLinks
          title="Videos"
          links={[
            { href: "/", label: "Submit Video" },
            { href: "/", label: "Ambassadors" },
            { href: "/", label: "Agency" },
            { href: "/", label: "Influencer" },
          ]}
        />
        <SectionWithLinks
          title="Social Media"
          links={[
            {
              href: "https://www.instagram.com/michael_labra/",
              label: "Instagram",
            },
            {
              href: "https://m.facebook.com/profile.php?id=61575656649776&name=xhp_nt__fb__action__open_user",
              label: "Facebook",
            },
            { href: "/", label: "Youtube" },
            { href: "/", label: "Twitter" },
          ]}
        />
      </div>
      <div className="mt-8">
        <p className="text-sm text-black/30">
          &copy; {new Date().getFullYear()} Jaguar Heating & Cooling. All rights
          reserved.
        </p>
      </div>
    </section>
  );
}
