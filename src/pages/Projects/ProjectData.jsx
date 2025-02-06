import BalancePalImg from './img/BalancePal.jpg';
import ProjektBalanceImg from './img/O_projektu.jpg';
import PiskvorkyImg from './img/Piskvorky.jpg';
import Lashesweb from './img/lashes_sochova.jpg';

export const projects = [
  {
    title: 'KarolinaLashes.cz',
    description:
      'Na míru vytvořený web pro klientku z oblasti kosmetických služeb. Grafický návrh vznikl ve Figmě. Protože se jedná primárně o prezentační web, zvolila jsem technologie HTML5, CSS3 a JavaScript. Stránky byly optimalizovány základním SEO a připraveny pro budoucí rozšíření, včetně propojení se sociálními sítěmi, jakmile je klientka bude mít k dispozici.',
    imageUrl: Lashesweb,
    codeLink: 'https://github.com/Kaykay-nova/KarolinaLashes',
    projectLink: 'https://www.karolinalashes.cz/',
  },
  {
    title: 'Balance Pal',
    description:
      'Projekt vznikl v rámci kurzu Digitální akademie Czechitas jako závěrečná práce. Součástí webu je blog s články obsahující tipy a rady na správný work-life balance. A interaktivní kvíz, který uživateli doporučí vhodný obsah k přečtení na základě jeho odpovědí. Projekt byl vytvořen v Next.js',
    imageUrl: BalancePalImg,
    codeLink: 'https://github.com/Kaykay-nova/balance-pal',
    projectLink: 'https://balancepal.vercel.app/',
  },
  {
    title: 'Piškvorky',
    description:
      'Projekt vznikl v rámci kurzu Digitální akademie Czechitas jako jeden z úkolů. Cílem bylo postupně vytvořit hru Piškvorky na poli 10x10, kterou bude moci hrát jeden hráč proti počítači. Úkol byl vytvořen za pomocí HTML, CSS a JavaScriptu.',
    imageUrl: PiskvorkyImg,
    codeLink: 'https://github.com/Kaykay-nova/piskvorky',
    projectLink: 'https://kaykay-nova.github.io/piskvorky/',
  },
  {
    title: 'O projektu BalancePal',
    description:
      'Tato stránka byla vytvořena jako součást finálního projektu v rámci kurzu Digitální akademie Czechitas. Naše cíle byly jasné: vytvořit funkční a esteticky příjemnou webovou stránku pouze pomocí technologií HTML, CSS a čistého JavaScriptu.',
    imageUrl: ProjektBalanceImg,
    codeLink: 'https://github.com/Kaykay-nova/o-projektu',
    projectLink: 'https://pattiev97.github.io/o-projektu/',
  },
];
