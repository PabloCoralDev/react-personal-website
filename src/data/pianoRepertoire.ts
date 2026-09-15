import type { PianoPiece } from '../types'
import liebestraumThumb from '../assets/piano-thumbnails/liszt-liebestraum.jpg'
import transcendentalEtude3Thumb from '../assets/piano-thumbnails/liszt-transcendental-etude-3-paysage.jpg'
import transcendentalEtude8Thumb from '../assets/piano-thumbnails/liszt-transcendental-etude-8-wilde-jagd.jpg'
import transcendentalEtude9Thumb from '../assets/piano-thumbnails/liszt-transcendental-etude-9-ricordanza.jpg'
import sonataBMinorThumb from '../assets/piano-thumbnails/liszt-sonata-b-minor.jpg'
import abeggThumb from '../assets/piano-thumbnails/schumann-abegg.jpg'
import impromptusThumb from '../assets/piano-thumbnails/schubert-impromptus-d899.jpg'
import standchenThumb from '../assets/piano-thumbnails/schubert-standchen.jpg'
import doppelgangerThumb from '../assets/piano-thumbnails/schubert-doppelganger.jpg'
import erlkonigThumb from '../assets/piano-thumbnails/schubert-erlkonig.jpg'
import beethoven13Thumb from '../assets/piano-thumbnails/beethoven-op13-pathetique.jpg'
import beethoven10Thumb from '../assets/piano-thumbnails/beethoven-op10-no3.jpg'
import beethoven31Thumb from '../assets/piano-thumbnails/beethoven-op31-no2-tempest.jpg'
import inventionsThumb from '../assets/piano-thumbnails/bach-15-inventions.jpg'
import englishSuiteThumb from '../assets/piano-thumbnails/bach-english-suite-2.jpg'
import wtc1Thumb from '../assets/piano-thumbnails/bach-wtc-1.jpg'
import arabesqueThumb from '../assets/piano-thumbnails/debussy-arabesque.jpg'
import suiteBergamasqueThumb from '../assets/piano-thumbnails/debussy-suite-bergamasque.jpg'
import brahmsCelloThumb from '../assets/piano-thumbnails/brahms-cello-sonata.jpg'
import petrarcaThumb from '../assets/piano-thumbnails/liszt-petrarca-sonetto-104.jpg'
import carmenThumb from '../assets/piano-thumbnails/bizet-carmen-vocal-score.jpg'
import winterreiseThumb from '../assets/piano-thumbnails/schubert-winterreise.jpg'
import schumannAllegroOp8Thumb from '../assets/piano-thumbnails/schumann-allegro-op8.jpg'
import rapsodiaEspanolaThumb from '../assets/piano-thumbnails/liszt-rapsodia-espanola.jpg'
import kapustinAquarelaThumb from '../assets/piano-thumbnails/kapustin-aquarela-paraphrase.jpg'
import kapustinEtudesThumb from '../assets/piano-thumbnails/kapustin-8-concert-etudes.jpg'
import granadosThumb from '../assets/piano-thumbnails/granados-allegro-de-concierto.jpg'
import wandererFantasyThumb from '../assets/piano-thumbnails/schubert-wanderer-fantasy.jpg'
import wtc2Thumb from '../assets/piano-thumbnails/bach-wtc-2-titlepage.jpg'
import jeuxDeauThumb from '../assets/piano-thumbnails/ravel-jeux-deau.jpg'
import khachaturianPhoto from '../assets/piano-thumbnails/composer-khachaturian.jpg'
import haydnPhoto from '../assets/piano-thumbnails/composer-haydn.jpg'
import rachmaninoffPhoto from '../assets/piano-thumbnails/composer-rachmaninoff.jpg'
import griegPhoto from '../assets/piano-thumbnails/composer-grieg.jpg'
import sinatraPhoto from '../assets/piano-thumbnails/composer-sinatra.jpg'
import faurePhoto from '../assets/piano-thumbnails/composer-faure.jpg'
import shostakovichPhoto from '../assets/piano-thumbnails/composer-shostakovich.jpg'
import haroldArlenPhoto from '../assets/piano-thumbnails/composer-harold-arlen.jpg'
import melTormePhoto from '../assets/piano-thumbnails/composer-mel-torme.jpg'
import jobimPhoto from '../assets/piano-thumbnails/composer-jobim.jpg'
import aryBarrosoPhoto from '../assets/piano-thumbnails/composer-ary-barroso.jpg'
import jorgeBenJorPhoto from '../assets/piano-thumbnails/composer-jorge-ben-jor.jpg'

// imslpUrl is left unset wherever the work isn't public domain (most 20th/21st-century
// composers), or where I couldn't confidently verify the exact IMSLP page. Feel free to
// fill in / correct any of these — pdfLocation and videoUrl are yours to add whenever ready.
export const pianoRepertoire: PianoPiece[] = [
  // Liszt
  {
    composer: 'Liszt',
    title: 'Liebestraum No. 3',
    category: 'solo',
    status: 'performed',
    imslpUrl: 'https://imslp.org/wiki/Liebestr%C3%A4ume,_S.541_(Liszt,_Franz)',
    imslpPdfUrl: 'https://s9.imslp.org/files/imglnks/usimg/c/c3/IMSLP707483-PMLP2598-Liszt_-_Liebestraum_No._3.pdf',
    thumbnail: liebestraumThumb,
  },
  {
    composer: 'Liszt',
    title: 'Transcendental Étude No. 3 ("Paysage")',
    category: 'solo',
    status: 'in-progress',
    imslpUrl: "https://imslp.org/wiki/%C3%89tudes_d'ex%C3%A9cution_transcendante,_S.139_(Liszt,_Franz)",
    imslpPdfUrl: "https://s9.imslp.org/files/imglnks/usimg/6/6f/IMSLP05360-Liszt_-_S139_Transcendental_Etudes_(edition_b).pdf#page=8",
    thumbnail: transcendentalEtude3Thumb,
  },
  {
    composer: 'Liszt',
    title: 'Transcendental Étude No. 8 ("Wilde Jagd")',
    category: 'solo',
    status: 'performed',
    imslpUrl: "https://imslp.org/wiki/%C3%89tudes_d'ex%C3%A9cution_transcendante,_S.139_(Liszt,_Franz)",
    imslpPdfUrl: "https://s9.imslp.org/files/imglnks/usimg/6/6f/IMSLP05360-Liszt_-_S139_Transcendental_Etudes_(edition_b).pdf#page=49",
    thumbnail: transcendentalEtude8Thumb,
  },
  {
    composer: 'Liszt',
    title: 'Transcendental Étude No. 9 ("Ricordanza")',
    category: 'solo',
    status: 'performed',
    imslpUrl: "https://imslp.org/wiki/%C3%89tudes_d'ex%C3%A9cution_transcendante,_S.139_(Liszt,_Franz)",
    imslpPdfUrl: "https://s9.imslp.org/files/imglnks/usimg/6/6f/IMSLP05360-Liszt_-_S139_Transcendental_Etudes_(edition_b).pdf#page=60",
    thumbnail: transcendentalEtude9Thumb,
  },
  {
    composer: 'Liszt',
    title: 'Piano Sonata in B minor',
    category: 'solo',
    status: 'in-progress',
    imslpUrl: 'https://imslp.org/wiki/Piano_Sonata_in_B_minor,_S.178_(Liszt,_Franz)',
    imslpPdfUrl: 'https://s9.imslp.org/files/imglnks/usimg/e/ea/IMSLP77477-PMLP14018-Liszt_-_S178_Sonata_in_B_minor_(Breitkopf).pdf',
    thumbnail: sonataBMinorThumb,
  },
  {
    composer: 'Liszt',
    title: 'Spanish Rhapsody',
    category: 'solo',
    status: 'up-next',
    imslpUrl: 'https://imslp.org/wiki/Rhapsodie_espagnole,_S.254_(Liszt,_Franz)',
    pdfLocation: '/piano-scores/liszt-rapsodia-espanola.pdf',
    thumbnail: rapsodiaEspanolaThumb,
  },

  // Schumann
  {
    composer: 'Schumann',
    title: 'Allegro, Op. 8',
    category: 'solo',
    status: 'performed',
    imslpUrl: 'https://imslp.org/wiki/Allegro,_Op.8_(Schumann,_Robert)',
    pdfLocation: '/piano-scores/schumann-allegro-op8.pdf',
    thumbnail: schumannAllegroOp8Thumb,
  },
  {
    composer: 'Schumann',
    title: 'Abegg Variations, Op. 1',
    category: 'solo',
    status: 'performed',
    imslpUrl: 'https://imslp.org/wiki/Abegg_Variations,_Op.1_(Schumann,_Robert)',
    imslpPdfUrl: "https://s9.imslp.org/files/imglnks/usimg/7/75/IMSLP289843-PMLP02928-Schumann,_Robert_Werke_Breitkopf_Gregg_Serie_7_Band_1_RS_39_Op_1_scan.pdf#page=2",
    thumbnail: abeggThumb,
  },

  // Kapustin (still in copyright — no IMSLP link)
  {
    composer: 'Kapustin',
    title: 'Concert Étude No. 1',
    category: 'solo',
    status: 'performed',
    pdfLocation: '/piano-scores/kapustin-8-concert-etudes.pdf#page=2',
    thumbnail: kapustinEtudesThumb,
  },
  {
    composer: 'Kapustin',
    title: 'Paraphrase on "Aquarela do Brasil"',
    category: 'solo',
    status: 'in-progress',
    pdfLocation: '/piano-scores/kapustin-aquarela-paraphrase.pdf',
    thumbnail: kapustinAquarelaThumb,
  },

  // Granados
  {
    composer: 'Granados',
    title: 'Allegro de Concierto, Op. 46',
    category: 'solo',
    status: 'performed',
    imslpUrl: 'https://imslp.org/wiki/Allegro_de_Concierto,_Op.46_(Granados,_Enrique)',
    pdfLocation: '/piano-scores/granados-allegro-de-concierto.pdf',
    thumbnail: granadosThumb,
  },

  // Schubert
  {
    composer: 'Schubert',
    title: 'Impromptu, Op. 90 No. 2',
    category: 'solo',
    status: 'performed',
    imslpUrl: 'https://imslp.org/wiki/4_Impromptus,_D.899_(Schubert,_Franz)',
    imslpPdfUrl: 'https://s9.imslp.org/files/imglnks/usimg/b/b3/IMSLP00364-Franz_Schubert_-_4_Impromptus,_Op_90.pdf',
    thumbnail: impromptusThumb,
  },
  {
    composer: 'Schubert',
    title: 'Ständchen, D. 957 No. 4',
    category: 'solo',
    status: 'performed',
    imslpUrl: 'https://imslp.org/wiki/Schwanengesang,_D.957_(Schubert,_Franz)',
    imslpPdfUrl: 'https://s9.imslp.org/files/imglnks/usimg/8/80/IMSLP25966-PMLP02204-Schubert_Lieder_Tief_Schwanengesang.pdf#page=16',
    thumbnail: standchenThumb,
  },
  {
    composer: 'Schubert',
    title: 'Erlkönig, D. 328, Op. 1',
    category: 'solo',
    status: 'performed',
    imslpUrl: 'https://imslp.org/wiki/Erlk%C3%B6nig,_D.328_(Schubert,_Franz)',
    imslpPdfUrl: 'https://s9.imslp.org/files/imglnks/usimg/0/05/IMSLP538791-PMLP25878-Schubert_Erlk%C3%B6nig.pdf',
    thumbnail: erlkonigThumb,
  },
  {
    composer: 'Schubert',
    title: 'Der Doppelgänger',
    category: 'solo',
    status: 'performed',
    imslpUrl: 'https://imslp.org/wiki/Schwanengesang,_D.957_(Schubert,_Franz)',
    imslpPdfUrl: 'https://s9.imslp.org/files/imglnks/usimg/8/80/IMSLP25966-PMLP02204-Schubert_Lieder_Tief_Schwanengesang.pdf#page=46',
    thumbnail: doppelgangerThumb,
  },
  {
    composer: 'Schubert',
    title: 'Wanderer Fantasy in C major, Op. 15',
    category: 'solo',
    status: 'in-progress',
    notes: 'Senior recital piece',
    imslpUrl: 'https://imslp.org/wiki/Fantasie_in_C_major,_D.760_(Schubert,_Franz)',
    pdfLocation: '/piano-scores/schubert-wanderer-fantasy.pdf#page=2',
    thumbnail: wandererFantasyThumb,
  },

  // Beethoven
  {
    composer: 'Beethoven',
    title: 'Piano Sonata No. 8 ("Pathétique"), Op. 13',
    category: 'solo',
    status: 'performed',
    imslpUrl: 'https://imslp.org/wiki/Piano_Sonata_No.8,_Op.13_(Beethoven,_Ludwig_van)',
    imslpPdfUrl: "https://s9.imslp.org/files/imglnks/usimg/c/c8/IMSLP00008-Beethoven,_L.v._-_Piano_Sonata_08.pdf",
    thumbnail: beethoven13Thumb,
  },
  {
    composer: 'Beethoven',
    title: 'Piano Sonata No. 7, Op. 10 No. 3',
    category: 'solo',
    status: 'performed',
    imslpUrl: 'https://imslp.org/wiki/Piano_Sonata_No.7,_Op.10_No.3_(Beethoven,_Ludwig_van)',
    imslpPdfUrl: 'https://s9.imslp.org/files/imglnks/usimg/a/a4/IMSLP512502-PMLP1409-Beethoven.op10.no3.sonata.no7.wiener.pdf',
    thumbnail: beethoven10Thumb,
  },
  {
    composer: 'Beethoven',
    title: 'Piano Sonata No. 17 ("Tempest"), Op. 31 No. 2',
    category: 'solo',
    status: 'performed',
    imslpUrl: 'https://imslp.org/wiki/Piano_Sonata_No.17,_Op.31_No.2_(Beethoven,_Ludwig_van)',
    imslpPdfUrl: 'https://s9.imslp.org/files/imglnks/usimg/2/28/IMSLP66406-PMLP01462-Sonata_in_D_minor_Opus_31_no_2.pdf',
    thumbnail: beethoven31Thumb,
  },

  // Bach
  {
    composer: 'Bach',
    title: 'Inventions No. 3, 6 & 8',
    category: 'solo',
    status: 'performed',
    imslpUrl: 'https://imslp.org/wiki/15_Inventions,_BWV_772-786_(Bach,_Johann_Sebastian)',
    imslpPdfUrl: 'https://s9.imslp.org/files/imglnks/usimg/e/ef/IMSLP768707-PMLP3267-J_S_Bach_-_15_Inventions_-_Contrapunctus_Press.pdf',
    thumbnail: inventionsThumb,
  },
  {
    composer: 'Bach',
    title: 'English Suite No. 2 in A minor',
    category: 'solo',
    status: 'performed',
    imslpUrl: 'https://imslp.org/wiki/English_Suite_No.2_in_A_minor,_BWV_807_(Bach,_Johann_Sebastian)',
    imslpPdfUrl: 'https://s9.imslp.org/files/imglnks/usimg/b/b6/IMSLP58719-PMLP05770-Bach--English-Suite-No2--Ed-Boileau.pdf',
    thumbnail: englishSuiteThumb,
  },
  {
    composer: 'Bach',
    title: 'Prelude & Fugue No. 17, Book 1',
    category: 'solo',
    status: 'performed',
    imslpUrl: 'https://imslp.org/wiki/Das_wohltemperierte_Klavier_I,_BWV_846-869_(Bach,_Johann_Sebastian)',
    imslpPdfUrl: 'https://s9.imslp.org/files/imglnks/usimg/4/42/IMSLP932182-PMLP5948-well-tempered-clavier-I-book.pdf',
    thumbnail: wtc1Thumb,
  },
  {
    composer: 'Bach',
    title: 'Prelude & Fugue No. 1, Book 2',
    category: 'solo',
    status: 'performed',
    imslpUrl: 'https://imslp.org/wiki/Das_wohltemperierte_Klavier_II,_BWV_870-893_(Bach,_Johann_Sebastian)',
    thumbnail: wtc2Thumb,
  },
  {
    composer: 'Bach',
    title: 'Prelude & Fugue No. 6, Book 2',
    category: 'solo',
    status: 'performed',
    imslpUrl: 'https://imslp.org/wiki/Das_wohltemperierte_Klavier_II,_BWV_870-893_(Bach,_Johann_Sebastian)',
    thumbnail: wtc2Thumb,
  },
  {
    composer: 'Bach',
    title: 'Prelude & Fugue No. 7, Book 2',
    category: 'solo',
    status: 'performed',
    imslpUrl: 'https://imslp.org/wiki/Das_wohltemperierte_Klavier_II,_BWV_870-893_(Bach,_Johann_Sebastian)',
    thumbnail: wtc2Thumb,
  },

  // Debussy
  {
    composer: 'Debussy',
    title: 'Arabesque',
    category: 'solo',
    status: 'performed',
    imslpUrl: 'https://imslp.org/wiki/2_Arabesques,_CD_74_(Debussy,_Claude)',
    imslpPdfUrl: "https://s9.imslp.org/files/imglnks/usimg/e/ef/IMSLP255353-PMLP02383-Debussy,_Claude-Deux_Arabesques_Durand_4395_scan.pdf",
    thumbnail: arabesqueThumb,
  },
  {
    composer: 'Debussy',
    title: 'Clair de Lune',
    category: 'solo',
    status: 'performed',
    imslpUrl: 'https://imslp.org/wiki/Suite_bergamasque,_CD_82_(Debussy,_Claude)',
    imslpPdfUrl: 'https://s9.imslp.org/files/imglnks/usimg/a/a0/IMSLP02907-Debussy-L075.pdf',
    thumbnail: suiteBergamasqueThumb,
  },
  {
    composer: 'Ravel',
    title: "Jeux d'eau",
    category: 'solo',
    status: 'performed',
    imslpUrl: "https://imslp.org/wiki/Jeux_d'eau,_M.30_(Ravel,_Maurice)",
    imslpPdfUrl: "https://s9.imslp.org/files/imglnks/usimg/b/b8/IMSLP03175-Ravel-Jeuxd'Eau-Demets.pdf",
    thumbnail: jeuxDeauThumb,
  },

  // Others (single piece, no composer grouping in the original list)
  {
    composer: 'Khachaturian',
    title: 'Toccata',
    category: 'solo',
    status: 'performed',
    thumbnail: khachaturianPhoto,
  },
  {
    composer: 'Rachmaninoff',
    title: 'Rhapsody on a Theme of Paganini, Op. 43 (Variation No. 18)',
    category: 'solo',
    status: 'performed',
    notes: 'With orchestra',
    imslpUrl: 'https://imslp.org/wiki/Rhapsody_on_a_Theme_of_Paganini,_Op.43_(Rachmaninoff,_Sergei)',
    thumbnail: rachmaninoffPhoto,
  },
  {
    composer: 'Haydn',
    title: 'Piano Sonata No. 53',
    category: 'solo',
    status: 'performed',
    thumbnail: haydnPhoto,
  },
  {
    composer: 'Grieg',
    title: 'Lyric Pieces, Op. 54 No. 3 & 4',
    category: 'solo',
    status: 'performed',
    imslpUrl: 'https://imslp.org/wiki/Lyric_Pieces,_Op.54_(Grieg,_Edvard)',
    thumbnail: griegPhoto,
  },
  {
    composer: 'Various',
    title: 'A Variety of Jazz Standards',
    category: 'solo',
    status: 'performed',
  },
  {
    composer: 'Harold Arlen',
    title: 'Over the Rainbow (Jazz Ballad)',
    category: 'solo',
    status: 'performed',
    thumbnail: haroldArlenPhoto,
  },
  {
    composer: 'Mel Tormé & Robert Wells',
    title: 'The Christmas Song ("Chestnuts Roasting on an Open Fire")',
    category: 'solo',
    status: 'performed',
    notes: 'Jazz arrangement',
    thumbnail: melTormePhoto,
  },

  // Chamber Music
  {
    composer: 'Walton',
    title: 'Viola Concerto',
    category: 'chamber',
    status: 'performed',
  },
  {
    composer: 'Schubert',
    title: 'Erlkönig',
    category: 'chamber',
    status: 'performed',
    notes: 'As vocal accompanist',
    imslpUrl: 'https://imslp.org/wiki/Erlk%C3%B6nig,_D.328_(Schubert,_Franz)',
  },
  {
    composer: 'Haydn',
    title: 'Arm, Arm, Ye Brave',
    category: 'chamber',
    status: 'performed',
    notes: 'Commonly attributed to Handel (Judas Maccabaeus) — double check attribution before linking to IMSLP.',
    thumbnail: haydnPhoto,
  },
  {
    composer: 'Cassadó',
    title: 'Requiebros',
    category: 'chamber',
    status: 'performed',
  },
  {
    composer: 'Brahms',
    title: 'Cello Sonata No. 1 in E minor, Op. 38',
    category: 'chamber',
    status: 'performed',
    imslpUrl: 'https://imslp.org/wiki/Cello_Sonata_No.1,_Op.38_(Brahms,_Johannes)',
    imslpPdfUrl: "https://s9.imslp.org/files/imglnks/usimg/f/f8/IMSLP676051-PMLP43440-Brahms_Sonata_vc_-1_g_Op38_(fh,score)_-_Full_Score.pdf",
    thumbnail: brahmsCelloThumb,
  },
  {
    composer: 'Various (Masters Composition Students)',
    title: 'Original Compositions',
    category: 'chamber',
    status: 'performed',
  },
  {
    composer: 'Frank Sinatra',
    title: 'My Way',
    category: 'chamber',
    status: 'performed',
    thumbnail: sinatraPhoto,
  },
  {
    composer: 'Liszt',
    title: 'Tre Sonetti di Petrarca',
    category: 'chamber',
    status: 'performed',
    notes: 'All 3, with vocalist (embedded score is Sonetto 104 only)',
    imslpUrl: 'https://imslp.org/wiki/3_Sonetti_del_Petrarca,_S.270_(Liszt,_Franz)',
    imslpPdfUrl: 'https://s9.imslp.org/files/imglnks/usimg/5/5d/IMSLP31942-PMLP11201-Liszt_Musikalische_Werke_2_Band_5_48_II_Sonett_104_des_Petrarca.pdf',
    thumbnail: petrarcaThumb,
  },
  {
    composer: 'Mozart',
    title: 'Se Vuol Ballare',
    category: 'chamber',
    status: 'performed',
    notes: 'Aria from Le nozze di Figaro',
    imslpUrl: 'https://imslp.org/wiki/Le_nozze_di_Figaro,_K.492_(Mozart,_Wolfgang_Amadeus)',
  },
  {
    composer: 'Bizet',
    title: 'Votre Toast (Toreador Song)',
    category: 'chamber',
    status: 'performed',
    notes: 'From Carmen',
    imslpUrl: 'https://imslp.org/wiki/Carmen_(Bizet,_Georges)',
    imslpPdfUrl: 'https://s9.imslp.org/files/imglnks/usimg/1/1c/IMSLP881859-PMLP15769-CARMEN_vocal_score.pdf',
    thumbnail: carmenThumb,
  },
  {
    composer: 'Schubert',
    title: 'Die Wetterfahne',
    category: 'chamber',
    status: 'performed',
    notes: 'Winterreise No. 2',
    imslpUrl: 'https://imslp.org/wiki/Winterreise,_D.911_(Schubert,_Franz)',
    imslpPdfUrl: 'https://s9.imslp.org/files/imglnks/usimg/d/de/IMSLP25965-PMLP02203-Schubert_Lieder_Tief_Winterreise.pdf',
    thumbnail: winterreiseThumb,
  },
  {
    composer: 'Fauré',
    title: 'Le Papillon et la Fleur, Op. 1 No. 1',
    category: 'chamber',
    status: 'performed',
    thumbnail: faurePhoto,
  },
  {
    composer: 'Shostakovich',
    title: 'Piano Quintet',
    category: 'chamber',
    status: 'performed',
    thumbnail: shostakovichPhoto,
  },

  // Jacaré Brazil Ensemble
  {
    composer: 'Jorge Ben Jor',
    title: 'Mas Que Nada',
    category: 'ensemble',
    status: 'performed',
    notes: 'Composer photo: Fabio Rodrigues Ozorio, CC BY 2.0',
    thumbnail: jorgeBenJorPhoto,
  },
  {
    composer: 'Antônio Carlos Jobim',
    title: 'Surfboard',
    category: 'ensemble',
    status: 'performed',
    thumbnail: jobimPhoto,
  },
  {
    composer: 'Ary Barroso',
    title: 'Aquarela do Brasil',
    category: 'ensemble',
    status: 'performed',
    thumbnail: aryBarrosoPhoto,
  },
  {
    composer: 'Brazilian Popular Music',
    title: 'Usted Abusó (Ballad Version)',
    category: 'ensemble',
    status: 'performed',
    notes: 'Composer/arranger unconfirmed — verify.',
  },
  {
    composer: 'Brazilian Popular Music',
    title: 'Cálice Bento',
    category: 'ensemble',
    status: 'performed',
    notes: 'Composer/arranger unconfirmed — verify.',
  },
]
