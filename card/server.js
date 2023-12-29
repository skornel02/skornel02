import dotenv from 'dotenv';
import {readFile, writeFile} from 'fs/promises';
import {transformBusinessBackCard, transformBusinessFrontCard} from './src/card-transformer.js';

dotenv.config();

const email = process.env.EMAIL;
const website = process.env.WEBSITE;

const businessCardFrontTemplate = await readFile('./template/business-card-front.template.svg', 'utf-8');
const businessCardBackTemplate = await readFile('./template/business-card-back.template.svg', 'utf-8');

const businessCardFront = await transformBusinessFrontCard(businessCardFrontTemplate);
const businessCardBack = await transformBusinessBackCard(businessCardBackTemplate, email, website);

await writeFile('./dist/business-card-front.svg', businessCardFront);
await writeFile('./dist/business-card-back.svg', businessCardBack);
