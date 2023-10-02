const { z } = require('zod');

const meetupSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(5).max(2000),
  photo: z.string().optional(),
  category: z.enum([
    'Fotografia',
    'Ciencia',
    'Tecnologia',
    'Gastronomia',
    'Naturaleza',
    'Literatura',
    'Musica',
    'Salud',
    'Arte',
    'Cultura',
    'Otras'
  ]),
  city: z.enum([
    'Andalucia',
    'Aragon',
    'Asturias',
    'Cantabria',
    'Castilla_León',
    'Castilla_La_Mancha',
    'Cataluña',
    'Madrid',
    'Valencia',
    'Extremadura',
    'Galicia',
    'Baleares',
    'Canarias',
    'Rioja',
    'Murcia',
    'Navarra',
    'Pais_Vasco'
  ]),
  date: z.string().datetime(),
  assistants: z.number().nonnegative().optional()
});
module.exports = meetupSchema;
