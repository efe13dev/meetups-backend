/* eslint-disable no-console */

require('dotenv').config();
const bcrypt = require('bcrypt');

const getPool = require('./getPool');

// Funcion que inserta datos de prueba en la DB

const populateDb = async () => {
  try {
    const pool = getPool();

    await pool.query(`
       USE ${process.env.DATABASE_NAME};
    `);

    console.log('Inserting users...');

    await pool.query(`INSERT INTO users (email, password, name, biography)
  VALUES  
  ('julia@email.com',
  "${await bcrypt.hash('12345', 10)}",
  'Julia',
  'Soy Julia, una incansable exploradora, que ha recorrido selvas y montañas en busca de la naturaleza en su forma más pura. 
  Mis descubrimientos llevaron a importantes avances en conservación y ecología, 
  dejando un legado duradero para las generaciones futuras.'
  ),
  ('pepe@email.com',
  "${await bcrypt.hash('12345', 10)}",
  'Pepe',
  'Pepe, apasionado de la música desde niño, 
  se convirtió en un virtuoso del piano a temprana edad. 
  Su talento lo llevó a los escenarios más grandes del mundo,
  donde cautivó a multitudes con su magia musical. Una vida dedicada a la melodía y la inspiración.'
  ),
  ('maria@email.com',
  "${await bcrypt.hash('12345', 10)}",
  'Maria',
  'María, la panadera de corazón, dedicó su vida al arte del pan. Con manos hábiles y amor en cada masa, endulzó las vidas de su vecindario. 
  Su pan casero trascendió recetas, convirtiéndose en el alma de su comunidad.'
  ),
  ('juan@email.com',
  "${await bcrypt.hash('12345', 10)}",
  'Juan',
  'Juan, amante de la sencillez, disfruta de la vida en dos ruedas. 
   Pedaleando por su ciudad, encuentra la alegría en los pequeños placeres y el contacto con la naturaleza. 
   Su pasión por el ciclismo refleja su espíritu libre y su amor por la aventura.'
  ),
  ('jorge@email.com',
  "${await bcrypt.hash('12345', 10)}",
  'Jorge',
  'Jorge, el visionario de la tecnología, fundó empresas innovadoras que revolucionaron la industria. 
  Su liderazgo y creatividad transformaron la forma en que vivimos y trabajamos, 
  dejando un impacto perdurable en la era digital.'
  )
  `);
    console.log('✅ users inserted');

    console.log('Inserting meetups...');

    await pool.query(`
       INSERT INTO meetups (title,description,category,city,date,user_id)
  VALUES
  ('Taller de Fotografía Nocturna',
   'Aprende las técnicas de fotografía nocturna con expertos en el campo.',
   'Fotografia',
   'Asturias',
   DATE_ADD(NOW(), INTERVAL 3 DAY),
   1
   ),
   ('Charla sobre Inteligencia Artificial en la Medicina',
   'Explora el impacto de la IA en la atención médica.',
   'Ciencia',
   'Cataluña',
   DATE_ADD(NOW(), INTERVAL 5 DAY),
   5
   ),
   ('Networking para Emprendedores',
   'Conecta con otros emprendedores y comparte experiencias.',
   'Tecnologia',
   'Madrid',
   DATE_ADD(NOW(), INTERVAL 7 DAY),
   2
   ),
   ('Curso de Yoga al Aire Libre',
   'Encuentra paz y equilibrio practicando yoga en la naturaleza.',
   'Salud',
   'Baleares',
   DATE_ADD(NOW(), INTERVAL 10 DAY),
   3
   ),
   ('Taller de Cocina Vegetariana',
   'Aprende a preparar deliciosos platos vegetarianos.',
   'Gastronomía',
   'Murcia',
   DATE_ADD(NOW(), INTERVAL 12 DAY),
   3
   ),
   ('Conferencia de Cambio Climático',
   'Explora soluciones para combatir el cambio climático.',
   'Ciencia',
   'Valencia',
   DATE_ADD(NOW(), INTERVAL 14 DAY),
   5
   ),
   ('Grupo de Lectura: Libro del Mes',
   'Un espacio para discutir y compartir tus lecturas favoritas.',
   'Literatura',
   'Andalucia',
   DATE_ADD(NOW(), INTERVAL 16 DAY),
   4
   ),
   ('Taller de Desarrollo de Videojuegos',
   'Aprende a crear tus propios videojuegos desde cero.',
   'Tecnologia',
   'Extremadura',
   DATE_ADD(NOW(), INTERVAL 20 DAY),
   5
   );
    `);

    console.log('✅ meetups inserted');

    console.log('Inserting inscriptions...');

    await pool.query(`INSERT INTO inscriptions (id_user, id_meetup)
   VALUES
   (1, 2),
   (1, 5),
   (2, 2),
   (3, 2),
   (4, 2);
   `);

    console.log('✅ inscriptions inserted');

    console.log('¡All done! 🤗');
  } catch (error) {
    console.error(error.message);
  } finally {
    process.exit();
  }
};

populateDb();
