import Link from '@/components/molecules/link';
import styles from './links.module.css';
import outStyles from '@/components/molecules/link/link.module.css';
import Img from '@/components/atoms/img';

export default function Links() {
  const web = [
    'Aplicações web',
    'Landing pages',
    'E-commerce',
    'Site institucional'
  ];
  return (
    <main className={styles.page}>
      <section className={styles.wrapper}>
        <div className={styles.box}>
          <div className={styles.us}>
            <Img url="/images/logo_white.svg" width={48} height={48}></Img>
            <div className={styles.info}>
              <h3>Arco Content</h3>
              <p>@arcocontent</p>
            </div>
          </div>
          <h1>
            Aqui você <span className={styles.styleText}>encontrará</span>{' '}
            alguns <span className={styles.styleText}>links</span> que podem te{' '}
            <span className={styles.styleText}>guiar</span>.
          </h1>
          <h4>
            Na Arco Content, desenvolvemos projetos web completos que vão além
            da estética — criamos experiências digitais que impulsionam
            resultados reais. De landing pages de alta conversão a aplicações
            web e sites institucionais robustos. Criamos automações
            inteligentes, nossas soluções são projetadas para simplificar sua
            operação e maximizar o desempenho.
          </h4>
        </div>
        <div className={styles.links}>
          <Link
            tag="Contrate agora"
            texts={web}
            subtitle="Clique aqui e solicite um orçamento agora mesmo pelo nosso whatsapp."
            imageUrl="/images/dev_bg.webp"
            hoverContent={
              <div className={outStyles.contextBox}>
                <Img url="/images/arrow.svg" width={32} height={32}></Img>
              </div>
            }
            defaultContent={<div className={outStyles.contextBox}></div>}
          ></Link>
          <Link
            tag="Inscreva-se agora"
            texts={web}
            subtitle="Conteúdos sobre tecnologia, negócios e marketing."
            imageUrl="/images/dev_bg.webp"
            simpleTitle={true}
            title={
              <h2>
                Perfil no <span className={styles.styleTitle}>Youtube</span>
              </h2>
            }
            hoverContent={
              <div className={outStyles.contextBox}>
                <Img url="/images/yt.svg" width={56} height={56}></Img>
              </div>
            }
            defaultContent={<div className={outStyles.contextBox}></div>}
          ></Link>
          <Link
            tag="Comece a seguir"
            texts={web}
            subtitle="Conteúdos diários sobre tecnologia, negócios e marketing."
            imageUrl="/images/dev_bg.webp"
            simpleTitle={true}
            title={
              <h2>
                Perfil no <span className={styles.styleTitle}>Instagram</span>
              </h2>
            }
            hoverContent={
              <div className={outStyles.contextBox}>
                <Img url="/images/insta.svg" width={48} height={48}></Img>
              </div>
            }
            defaultContent={<div className={outStyles.contextBox}></div>}
          ></Link>
        </div>
      </section>
    </main>
  );
}
