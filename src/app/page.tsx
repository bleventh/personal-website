import Image from "next/image";

export default function Home() {
  return (
    <main className="shell">
      <header className="intro">
        <div>
          <p className="eyebrow">San Francisco, California</p>
          <h1>Brandon Leventhal</h1>
          <p className="headline">Senior Engineering Manager at Rippling</p>
          <p className="summary">
            I lead engineering teams building AI products and developer tools.
            Previously, I co-led Apple Wallet Access and built Apple Card
            and Apple Cash.
          </p>
          <nav aria-label="Profiles" className="profile-links">
            <a href="https://www.linkedin.com/in/brandon-leventhal">LinkedIn</a>
            <a href="https://github.com/bleventh">GitHub</a>
          </nav>
        </div>
        <Image
          className="portrait"
          src="/me.jpeg"
          alt="Brandon Leventhal"
          width={144}
          height={144}
          priority
        />
      </header>

      <section aria-labelledby="experience">
        <h2 id="experience">Experience</h2>

        <article className="role">
          <div className="role-heading">
            <h3>Rippling</h3>
            <p className="date">2025–present</p>
          </div>
          <p className="title">Senior Engineering Manager, App Studio</p>
          <p>
            I lead four teams across Agent Platform, Sites, Custom Apps, and
            Packaging. We build the infrastructure teams use to run and test
            agents, and the tools developers and customers use to build on Rippling.
          </p>
          <ul>
            <li>Built a platform for teams to run and evaluate agents with the tools and permissions specific to their use case.</li>
            <li>Brought <a href="https://www.rippling.com/platform/sites">Rippling Sites</a> from prototype to public launch. Customers can use AI to create internal tools connected to their business data.</li>
            <li>Led code-first development for Custom Apps and built Packaging with the team so developers could install reusable solutions instead of rebuilding them for each customer.</li>
          </ul>
        </article>

        <article className="role">
          <div className="role-heading">
            <h3>TYB</h3>
            <p className="date">2025</p>
          </div>
          <p className="title">Engineering Manager</p>
          <p>
            Joined as the first engineering lead. Organized the engineering group
            into teams with clear ownership, established on-call and incident
            response, and designed and led delivery of a rewards ledger.
          </p>
        </article>

        <article className="role">
          <div className="role-heading">
            <h3>Apple</h3>
            <p className="date">2015–2024</p>
          </div>
          <p className="title">Engineering leadership and software engineering, Wallet Services</p>
          <ul>
            <li>Co-led Wallet Access and built a shared platform for issuing passes and credentials across devices, servers, and partners.</li>
            <li>Led engineering for Disney MagicMobile, including the ability for guests to share passes with family.</li>
            <li>Was the first engineer on Apple Card, worked with Goldman Sachs on the integration, and owned scheduled payments. I also built Apple Cash.</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
