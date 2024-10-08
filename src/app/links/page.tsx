import Link from '@/components/molecules/link';
import styles from './links.module.css';
import Img from '@/components/atoms/logo';

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
          <Img url="/images/logo_white.svg" width={40} height={40}></Img>
          <div className={styles.info}>
            <h3>Arco Content</h3>
            <p>@arcocontent</p>
          </div>
        </div>
        <h1>Produtos digitais que mudam negócios.</h1>
      </div>
      <section className={styles.wrapper}>
        <Link
          tag="Contrate agora"
          texts={web}
          subtitle="Clique aqui e solicite um orçamento agora mesmo pelo nosso whatsapp."
          imageUrl="/images/dev_bg.webp"
        ></Link>
        <Link
          tag="Inscreva-se agora"
          texts={web}
          subtitle="Conteúdos sobre tecnoligia, negócios e marketing."
          imageUrl="/images/dev_bg.webp"
        ></Link>
        <Link
          tag="Comece a seguir"
          texts={web}
          subtitle="Conteúdos diários sobre tecnologia, negócios e marketing. Sempre com um pouco humor (as vezes nem tanto)."
          imageUrl="/images/dev_bg.webp"
        ></Link>
      </section>
    </main>
  );
}
