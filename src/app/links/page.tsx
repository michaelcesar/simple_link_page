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
      <div className={styles.box}>
        <div className={styles.us}>
          <Img url="/images/logo_white.svg" width={48} height={48}></Img>
          <div className={styles.info}>
            <h3>Arco Content</h3>
            <p>@arcocontent</p>
          </div>
        </div>
      </div>
      <section className={styles.wrapper}>
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
          title="Canal no Youtube"
          hoverContent={
            <div className={outStyles.contextBox}>
              <Img url="/images/arrow.svg" width={32} height={32}></Img>
            </div>
          }
          defaultContent={<div className={outStyles.contextBox}></div>}
        ></Link>
        <Link
          tag="Comece a seguir"
          texts={web}
          subtitle="Conteúdos diários sobre tecnologia, negócios e marketing. Sempre com um pouco humor (às vezes nem tanto)."
          imageUrl="/images/dev_bg.webp"
          simpleTitle={true}
          title="Perfil no Instagram"
          hoverContent={
            <div className={outStyles.contextBox}>
              <Img url="/images/arrow.svg" width={32} height={32}></Img>
            </div>
          }
          defaultContent={<div className={outStyles.contextBox}></div>}
        ></Link>
      </section>
    </main>
  );
}
