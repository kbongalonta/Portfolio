import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Karla Bongalonta - Portfolio</title>
        <meta name="description" content="Portfolio of Karla Tianes Bongalonta - Aspiring Web Developer and Computer Science Student" />
      </Head>

      <div className="frame">
        <header className="nav" role="banner">
          <div className="text-wrapper-3">Karla Bongalonta</div>
          <nav role="navigation" aria-label="Main navigation">
            <a href="#home" className="link-2"><span className="text-wrapper-4">Home</span></a>
            <a href="#portfolio" className="link-3"><span className="text-wrapper-5">Portfolio</span></a>
            <a href="#about" className="link-4"><span className="text-wrapper-6">About Me</span></a>
            <a href="#contact" className="link-5"><span className="text-wrapper-7">Contact</span></a>
          </nav>
        </header>
        <main>
          <section id="home" className="section" aria-labelledby="hero-heading">
            <div className="container">
              <img
                className="karla-tianes"
                src="/Karla Tianes Bongalonta.png"
                alt="Karla Tianes Bongalonta profile photo"
              />
              <h1 id="hero-heading" className="heading-karla">Karla Tianes Bongalonta</h1>
              <p className="text-wrapper">Aspiring |</p>
              <p className="computer-science">
                Computer Science student at Partido State University. I&apos;m just starting my journey in<br />web
                development and excited to learn and grow in this field.
              </p>
              <a href="#contact" className="link"><span className="div">Get In Touch</span></a>
              <a href="#portfolio" className="div-wrapper"><span className="text-wrapper-2">View My Work</span></a>
            </div>
          </section>

          <section id="portfolio" className="container-wrapper" aria-labelledby="portfolio-heading">
            <div className="container-2">
              <h2 id="portfolio-heading" className="heading-my">My Portfolio</h2>
              <p className="as-a-beginner-web">
                As a beginner web developer, I&apos;m building my portfolio one project at a time. Here&apos;s what
                I&apos;m<br />working on!
              </p>
              <article className="background-shadow">
                <h3 className="heading-personal">Personal Portfolio</h3>
                <span className="background" role="status" aria-label="Project status: In Progress"><span className="text-wrapper-8">In Progress</span></span>
                <div className="my-first-portfolio">
                  <p>
                    My first portfolio website built to showcase<br />my journey as a beginner web developer.
                  </p>
                  <div className="tech-stack" />
                </div>
                <span className="background-2" aria-label="Technology: HTML"><span className="text-wrapper-9">HTML</span></span>
                <span className="background-3" aria-label="Technology: CSS"><span className="text-wrapper-10">CSS</span></span>
                <span className="background-4" aria-label="Technology: JavaScript"><span className="text-wrapper-11">JavaScript</span></span>
              </article>

              <article className="background-shadow-2">
                <h3 className="heading-practice">Practice Projects</h3>
                <span className="background-5" role="status" aria-label="Project status: Ongoing"><span className="text-wrapper-12">Ongoing</span></span>
                <div className="collection-of-small">
                  <p>
                    Collection of small projects and exercises<br />I&apos;m working on to improve my coding skills.
                  </p>
                  <div className="tech-stack" />
                </div>
                <span className="background-2" aria-label="Technology: HTML"><span className="text-wrapper-9">HTML</span></span>
                <span className="background-3" aria-label="Technology: CSS"><span className="text-wrapper-10">CSS</span></span>
              </article>

              <article className="background-shadow-3">
                <h3 className="heading-future">Future Projects</h3>
                <span className="background-6" role="status" aria-label="Project status: Coming Soon"><span className="text-wrapper-13">Coming Soon</span></span>
                <div className="excited-to-build">
                  <p>
                    Excited to build more projects as I continue<br />learning web development!
                  </p>
                  <div className="tech-stack" />
                </div>
                <span className="background-7" aria-label="Technology: React"><span className="text-wrapper-14">React</span></span>
                <span className="background-8" aria-label="Technology: More to come"><span className="text-wrapper-15">More to come</span></span>
              </article>

              <aside className="i-m-continuously-wrapper">
                <p className="i-m-continuously">
                  🌱 I&apos;m continuously learning and will be adding more projects as I develop my skills in web
                  development!
                </p>
              </aside>
            </div>
          </section>

          <section id="about" className="section-2" aria-labelledby="about-heading">
            <div className="container-3">
              <h2 id="about-heading" className="heading-about-me">About Me</h2>
              <article className="background-shadow-4">
                <div className="SVG-wrapper" aria-hidden="true">
                  <div className="SVG">
                    <img className="vector" src="/SVG.png" alt="" /> <img className="img" src="/SVG.png" alt="" />
                  </div>
                </div>
                <h3 className="heading-education">Education</h3>
                <p className="currently-studying">
                  Currently studying at Partido State<br />University, building a strong foundation in<br />computer
                  science and web technologies.
                </p>
              </article>

              <article className="background-shadow-5">
                <div className="background-9" aria-hidden="true">
                  <div className="SVG"><img className="vector-2" src="/SVG (1).png" alt="" /></div>
                </div>
                <h3 className="heading-skills">Skills</h3>
                <p className="learning-the">
                  Learning the fundamentals of web<br />development including HTML, CSS,<br />JavaScript, and modern
                  frameworks like<br />React.
                </p>
              </article>

              <article className="background-shadow-6">
                <div className="background-10" aria-hidden="true">
                  <div className="SVG"><img className="vector-3" src="/SVG (2).png" alt="" /></div>
                </div>
                <h3 className="heading-goal">Goal</h3>
                <p className="aspiring-to-become-a">
                  Aspiring to become a professional web<br />developer and create impactful digital<br />solutions for
                  real-world problems.
                </p>
              </article>

              <h3 className="heading-technical">Technical Skills</h3>
              <img
                className="background-shadow-7"
                src="/Background+Shadow (1).png"
                alt="Technical skills chart showing proficiency in HTML, CSS, JavaScript, React, and other web technologies"
              />
            </div>
          </section>

          <section id="contact" className="section-3" aria-labelledby="contact-heading">
            <div className="container-4">
              <h2 id="contact-heading" className="heading-get-in">Get In Touch</h2>
              <div className="background-shadow-8">
                <p className="i-m-always-open-to">
                  I&apos;m always open to discussing new opportunities, learning experiences, or collaborations in web
                  development.<br />Feel free to reach out!
                </p>
                <article className="background-shadow-9">
                  <div className="background-11" aria-hidden="true">
                    <div className="SVG"><img className="vector-4" src="/SVG (3).png" alt="" /></div>
                  </div>
                  <h3 className="text-wrapper-16">Email</h3>
                  <a href="mailto:karlabongalonta2@gmail.com" className="link-6"><span className="text-wrapper-17">karlabongalonta2@gmail.com</span></a>
                </article>
                <article className="background-shadow-10">
                  <div className="background-12" aria-hidden="true">
                    <div className="SVG"><img className="vector-3" src="/SVG (4).png" alt="" /></div>
                  </div>
                  <h3 className="text-wrapper-18">Phone</h3>
                  <a href="tel:09935128690" className="link-7"><span className="text-wrapper-19">09935128690</span></a>
                </article>
                <article className="background-shadow-10">
                  <div className="background-13" aria-hidden="true">
                    <div className="SVG">
                      <img className="vector-5" src="/SVG.png" alt="" />
                      <img className="vector-6" src="/SVG (1).png" alt="" />
                    </div>
                  </div>
                  <h3 className="text-wrapper-20">Location</h3>
                  <p className="text-wrapper-21">Minoro, San Jose Cam.Sur</p>
                </article>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer" role="contentinfo" />
      </div>
    </>
  );
}
