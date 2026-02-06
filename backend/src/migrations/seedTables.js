// Import sequelize instance
import { sequelize } from "../database/sequelize-client.js";
// Import associations from Models
import { Pokemon, Team, Type, User } from "../models/associations.js";
import bcrypt from "bcrypt";

// Define async function to seed DB
async function seedDatabase() {
    console.log("🔄 Pokémon seeding started...");

    // Create Types
    const types = await Type.bulkCreate([
        { id: 1, name: 'Acier', color: 'aaaabb' },
        { id: 2, name: 'Combat', color: 'bb5544' },
        { id: 3, name: 'Dragon', color: '7766ee' },
        { id: 4, name: 'Eau', color: '3399ff' },
        { id: 5, name: 'Électrik', color: 'ffbb33' },
        { id: 6, name: 'Feu', color: 'ff4422' },
        { id: 7, name: 'Glace', color: '77ddff' },
        { id: 8, name: 'Insecte', color: 'aabb22' },
        { id: 9, name: 'Normal', color: 'bbaabb' },
        { id: 10, name: 'Plante', color: '77cc55' },
        { id: 11, name: 'Poison', color: 'aa5599' },
        { id: 12, name: 'Psy', color: 'ff5599' },
        { id: 13, name: 'Roche', color: 'bbaa66' },
        { id: 14, name: 'Sol', color: 'ddbb55' },
        { id: 15, name: 'Spectre', color: '6666bb' },
        { id: 16, name: 'Ténèbres', color: '665544' },
        { id: 17, name: 'Vol', color: '6699ff' }
    ]);

    // Create Pokemon
    const pokemon = await Pokemon.bulkCreate([
        { id: 1, name: 'Bulbizarre', hp: 45, atk: 49, def: 49, atk_spe: 65, def_spe: 65, speed: 45 },
        { id: 2, name: 'Herbizarre', hp: 60, atk: 62, def: 63, atk_spe: 80, def_spe: 80, speed: 60 },
        { id: 3, name: 'Florizarre', hp: 80, atk: 82, def: 83, atk_spe: 100, def_spe: 100, speed: 80 },
        { id: 4, name: 'Salameche', hp: 39, atk: 52, def: 43, atk_spe: 60, def_spe: 50, speed: 65 },
        { id: 5, name: 'Reptincel', hp: 58, atk: 64, def: 58, atk_spe: 80, def_spe: 65, speed: 80 },
        { id: 6, name: 'Dracaufeu', hp: 78, atk: 84, def: 78, atk_spe: 109, def_spe: 85, speed: 100 },
        { id: 7, name: 'Carapuce', hp: 44, atk: 48, def: 65, atk_spe: 50, def_spe: 64, speed: 43 },
        { id: 8, name: 'Carabaffe', hp: 59, atk: 63, def: 80, atk_spe: 65, def_spe: 80, speed: 58 },
        { id: 9, name: 'Tortank', hp: 79, atk: 83, def: 100, atk_spe: 85, def_spe: 105, speed: 78 },
        { id: 10, name: 'Chenipan', hp: 45, atk: 30, def: 35, atk_spe: 20, def_spe: 20, speed: 45 },
        { id: 11, name: 'Chrysacier', hp: 50, atk: 20, def: 55, atk_spe: 25, def_spe: 25, speed: 30 },
        { id: 12, name: 'Papilusion', hp: 60, atk: 45, def: 50, atk_spe: 80, def_spe: 80, speed: 70 },
        { id: 13, name: 'Aspicot', hp: 40, atk: 35, def: 30, atk_spe: 20, def_spe: 20, speed: 50 },
        { id: 14, name: 'Coconfort', hp: 45, atk: 25, def: 50, atk_spe: 25, def_spe: 25, speed: 35 },
        { id: 15, name: 'Dardargnan', hp: 65, atk: 80, def: 40, atk_spe: 45, def_spe: 80, speed: 75 },
        { id: 16, name: 'Roucool', hp: 40, atk: 45, def: 40, atk_spe: 35, def_spe: 35, speed: 56 },
        { id: 17, name: 'Roucoups', hp: 63, atk: 60, def: 55, atk_spe: 50, def_spe: 50, speed: 71 },
        { id: 18, name: 'Roucarnage', hp: 83, atk: 80, def: 75, atk_spe: 70, def_spe: 70, speed: 91 },
        { id: 19, name: 'Rattata', hp: 30, atk: 56, def: 35, atk_spe: 25, def_spe: 35, speed: 72 },
        { id: 20, name: 'Rattatac', hp: 55, atk: 81, def: 60, atk_spe: 50, def_spe: 70, speed: 97 },
        { id: 21, name: 'Piafabec', hp: 40, atk: 60, def: 30, atk_spe: 31, def_spe: 31, speed: 70 },
        { id: 22, name: 'Rapasdepic', hp: 65, atk: 90, def: 65, atk_spe: 61, def_spe: 61, speed: 100 },
        { id: 23, name: 'Abo', hp: 35, atk: 60, def: 44, atk_spe: 40, def_spe: 54, speed: 55 },
        { id: 24, name: 'Arbok', hp: 60, atk: 85, def: 69, atk_spe: 65, def_spe: 79, speed: 80 },
        { id: 25, name: 'Pikachu', hp: 35, atk: 55, def: 30, atk_spe: 50, def_spe: 40, speed: 90 },
        { id: 26, name: 'Raichu', hp: 60, atk: 90, def: 55, atk_spe: 90, def_spe: 80, speed: 100 },
        // { id: 27, name: 'Sabelette', hp: 50, atk: 75, def: 85, atk_spe: 20, def_spe: 30, speed: 40 },
        // { id: 28, name: 'Sablaireau', hp: 75, atk: 100, def: 110, atk_spe: 45, def_spe: 55, speed: 65 },
        // { id: 29, name: 'Nidoran F', hp: 55, atk: 47, def: 52, atk_spe: 40, def_spe: 40, speed: 41 },
        // { id: 30, name: 'Nidorina', hp: 70, atk: 62, def: 67, atk_spe: 55, def_spe: 55, speed: 56 },
        // { id: 31, name: 'Nidoqueen', hp: 90, atk: 82, def: 87, atk_spe: 75, def_spe: 85, speed: 76 },
        // { id: 32, name: 'Nidoran M', hp: 46, atk: 57, def: 40, atk_spe: 40, def_spe: 40, speed: 50 },
        // { id: 33, name: 'Nidorino', hp: 61, atk: 72, def: 57, atk_spe: 55, def_spe: 55, speed: 65 },
        // { id: 34, name: 'Nidoking', hp: 81, atk: 92, def: 77, atk_spe: 85, def_spe: 75, speed: 85 },
        // { id: 35, name: 'Melofee', hp: 70, atk: 45, def: 48, atk_spe: 60, def_spe: 65, speed: 35 },
        // { id: 36, name: 'Melodelfe', hp: 95, atk: 70, def: 73, atk_spe: 85, def_spe: 90, speed: 60 },
        // { id: 37, name: 'Goupix', hp: 38, atk: 41, def: 40, atk_spe: 50, def_spe: 65, speed: 65 },
        // { id: 38, name: 'Feunard', hp: 73, atk: 76, def: 75, atk_spe: 81, def_spe: 100, speed: 100 },
        // { id: 39, name: 'Rondoudou', hp: 115, atk: 45, def: 20, atk_spe: 45, def_spe: 25, speed: 20 },
        // { id: 40, name: 'Grodoudou', hp: 140, atk: 70, def: 45, atk_spe: 75, def_spe: 50, speed: 45 },
        // { id: 41, name: 'Nosferapti', hp: 40, atk: 45, def: 35, atk_spe: 30, def_spe: 40, speed: 55 },
        // { id: 42, name: 'Nosferalto', hp: 75, atk: 80, def: 70, atk_spe: 65, def_spe: 75, speed: 90 },
        // { id: 43, name: 'Mystherbe', hp: 45, atk: 50, def: 55, atk_spe: 75, def_spe: 65, speed: 30 },
        // { id: 44, name: 'Ortide', hp: 60, atk: 65, def: 70, atk_spe: 85, def_spe: 75, speed: 40 },
        // { id: 45, name: 'Rafflesia', hp: 75, atk: 80, def: 85, atk_spe: 100, def_spe: 90, speed: 50 },
        // { id: 46, name: 'Paras', hp: 35, atk: 70, def: 55, atk_spe: 45, def_spe: 55, speed: 25 },
        // { id: 47, name: 'Parasect', hp: 60, atk: 95, def: 80, atk_spe: 60, def_spe: 80, speed: 30 },
        // { id: 48, name: 'Mimitoss', hp: 60, atk: 55, def: 50, atk_spe: 40, def_spe: 55, speed: 45 },
        // { id: 49, name: 'Aeromite', hp: 70, atk: 65, def: 60, atk_spe: 90, def_spe: 75, speed: 90 },
        // { id: 50, name: 'Taupiqueur', hp: 10, atk: 55, def: 25, atk_spe: 35, def_spe: 45, speed: 95 },
        // { id: 51, name: 'Triopikeur', hp: 35, atk: 80, def: 50, atk_spe: 50, def_spe: 70, speed: 120 },
        // { id: 52, name: 'Miaouss', hp: 40, atk: 45, def: 35, atk_spe: 40, def_spe: 40, speed: 90 },
        // { id: 53, name: 'Persian', hp: 65, atk: 70, def: 60, atk_spe: 65, def_spe: 65, speed: 115 },
        // { id: 54, name: 'Psykokwak', hp: 50, atk: 52, def: 48, atk_spe: 65, def_spe: 50, speed: 55 },
        // { id: 55, name: 'Akwakwak', hp: 80, atk: 82, def: 78, atk_spe: 95, def_spe: 80, speed: 85 },
        // { id: 56, name: 'Ferosinge', hp: 40, atk: 80, def: 35, atk_spe: 35, def_spe: 45, speed: 70 },
        // { id: 57, name: 'Colossinge', hp: 65, atk: 105, def: 60, atk_spe: 60, def_spe: 70, speed: 95 },
        // { id: 58, name: 'Caninos', hp: 55, atk: 70, def: 45, atk_spe: 70, def_spe: 50, speed: 60 },
        // { id: 59, name: 'Arcanin', hp: 90, atk: 110, def: 80, atk_spe: 100, def_spe: 80, speed: 95 },
        // { id: 60, name: 'Ptitard', hp: 40, atk: 50, def: 40, atk_spe: 40, def_spe: 40, speed: 90 },
        // { id: 61, name: 'Tetarte', hp: 65, atk: 65, def: 65, atk_spe: 50, def_spe: 50, speed: 90 },
        // { id: 62, name: 'Tartard', hp: 90, atk: 85, def: 95, atk_spe: 70, def_spe: 90, speed: 70 },
        // { id: 63, name: 'Abra', hp: 25, atk: 20, def: 15, atk_spe: 105, def_spe: 55, speed: 90 },
        // { id: 64, name: 'Kadabra', hp: 40, atk: 35, def: 30, atk_spe: 120, def_spe: 70, speed: 105 },
        // { id: 65, name: 'Alakazam', hp: 55, atk: 50, def: 45, atk_spe: 135, def_spe: 85, speed: 120 },
        // { id: 66, name: 'Machoc', hp: 70, atk: 80, def: 50, atk_spe: 35, def_spe: 35, speed: 35 },
        // { id: 67, name: 'Machopeur', hp: 80, atk: 100, def: 70, atk_spe: 50, def_spe: 60, speed: 45 },
        // { id: 68, name: 'Mackogneur', hp: 90, atk: 130, def: 80, atk_spe: 65, def_spe: 85, speed: 55 },
        // { id: 69, name: 'Chetiflor', hp: 50, atk: 75, def: 35, atk_spe: 70, def_spe: 30, speed: 40 },
        // { id: 70, name: 'Boustiflor', hp: 65, atk: 90, def: 50, atk_spe: 85, def_spe: 45, speed: 55 },
        // { id: 71, name: 'Empiflor', hp: 80, atk: 105, def: 65, atk_spe: 100, def_spe: 60, speed: 70 },
        // { id: 72, name: 'Tentacool', hp: 40, atk: 40, def: 35, atk_spe: 50, def_spe: 100, speed: 70 },
        // { id: 73, name: 'Tentacruel', hp: 80, atk: 70, def: 65, atk_spe: 80, def_spe: 120, speed: 100 },
        // { id: 74, name: 'Racaillou', hp: 40, atk: 80, def: 100, atk_spe: 30, def_spe: 30, speed: 20 },
        // { id: 75, name: 'Gravalanch', hp: 55, atk: 95, def: 115, atk_spe: 45, def_spe: 45, speed: 35 },
        // { id: 76, name: 'Grolem', hp: 80, atk: 110, def: 130, atk_spe: 55, def_spe: 65, speed: 45 },
        // { id: 77, name: 'Ponyta', hp: 50, atk: 85, def: 55, atk_spe: 65, def_spe: 65, speed: 90 },
        // { id: 78, name: 'Galopa', hp: 65, atk: 100, def: 70, atk_spe: 80, def_spe: 80, speed: 105 },
        // { id: 79, name: 'Ramoloss', hp: 90, atk: 65, def: 65, atk_spe: 40, def_spe: 40, speed: 15 },
        // { id: 80, name: 'Flagadoss', hp: 95, atk: 75, def: 110, atk_spe: 100, def_spe: 80, speed: 30 },
        // { id: 81, name: 'Magneti', hp: 25, atk: 35, def: 70, atk_spe: 95, def_spe: 55, speed: 45 },
        // { id: 82, name: 'Magneton', hp: 50, atk: 60, def: 95, atk_spe: 120, def_spe: 70, speed: 70 },
        // { id: 83, name: 'Canarticho', hp: 52, atk: 65, def: 55, atk_spe: 58, def_spe: 62, speed: 60 },
        // { id: 84, name: 'Doduo', hp: 35, atk: 85, def: 45, atk_spe: 35, def_spe: 35, speed: 75 },
        // { id: 85, name: 'Dodrio', hp: 60, atk: 110, def: 70, atk_spe: 60, def_spe: 60, speed: 100 },
        // { id: 86, name: 'Otaria', hp: 65, atk: 45, def: 55, atk_spe: 45, def_spe: 70, speed: 45 },
        // { id: 87, name: 'Lamantine', hp: 90, atk: 70, def: 80, atk_spe: 70, def_spe: 95, speed: 70 },
        // { id: 88, name: 'Tadmorv', hp: 80, atk: 80, def: 50, atk_spe: 40, def_spe: 50, speed: 25 },
        // { id: 89, name: 'Grotadmorv', hp: 105, atk: 105, def: 75, atk_spe: 65, def_spe: 100, speed: 50 },
        // { id: 90, name: 'Kokiyas', hp: 30, atk: 65, def: 100, atk_spe: 45, def_spe: 25, speed: 40 },
        // { id: 91, name: 'Crustabri', hp: 50, atk: 95, def: 180, atk_spe: 85, def_spe: 45, speed: 70 },
        // { id: 92, name: 'Fantominus', hp: 30, atk: 35, def: 30, atk_spe: 100, def_spe: 35, speed: 80 },
        // { id: 93, name: 'Spectrum', hp: 45, atk: 50, def: 45, atk_spe: 115, def_spe: 55, speed: 95 },
        // { id: 94, name: 'Ectoplasma', hp: 60, atk: 65, def: 60, atk_spe: 130, def_spe: 75, speed: 110 },
        // { id: 95, name: 'Onix', hp: 35, atk: 45, def: 160, atk_spe: 30, def_spe: 45, speed: 70 },
        // { id: 96, name: 'Soporifik', hp: 60, atk: 48, def: 45, atk_spe: 43, def_spe: 90, speed: 42 },
        // { id: 97, name: 'Hypnomade', hp: 85, atk: 73, def: 70, atk_spe: 73, def_spe: 115, speed: 67 },
        // { id: 98, name: 'Krabby', hp: 30, atk: 105, def: 90, atk_spe: 25, def_spe: 25, speed: 50 },
        // { id: 99, name: 'Krabboss', hp: 55, atk: 130, def: 115, atk_spe: 50, def_spe: 50, speed: 75 },
        // { id: 100, name: 'Voltorbe', hp: 40, atk: 30, def: 50, atk_spe: 55, def_spe: 55, speed: 100 },
        // { id: 101, name: 'Electrode', hp: 60, atk: 50, def: 70, atk_spe: 80, def_spe: 80, speed: 140 },
        // { id: 102, name: 'Noeunoeuf', hp: 60, atk: 40, def: 80, atk_spe: 60, def_spe: 45, speed: 40 },
        // { id: 103, name: 'Noadkoko', hp: 95, atk: 95, def: 85, atk_spe: 125, def_spe: 65, speed: 55 },
        // { id: 104, name: 'Osselait', hp: 50, atk: 50, def: 95, atk_spe: 40, def_spe: 50, speed: 35 },
        // { id: 105, name: 'Ossatueur', hp: 60, atk: 80, def: 110, atk_spe: 50, def_spe: 80, speed: 45 },
        // { id: 106, name: 'Kicklee', hp: 50, atk: 120, def: 53, atk_spe: 35, def_spe: 110, speed: 87 },
        // { id: 107, name: 'Tygnon', hp: 50, atk: 105, def: 79, atk_spe: 35, def_spe: 110, speed: 76 },
        // { id: 108, name: 'Excelangue', hp: 90, atk: 55, def: 75, atk_spe: 60, def_spe: 75, speed: 30 },
        // { id: 109, name: 'Smogo', hp: 40, atk: 65, def: 95, atk_spe: 60, def_spe: 45, speed: 35 },
        // { id: 110, name: 'Smogogo', hp: 65, atk: 90, def: 120, atk_spe: 85, def_spe: 70, speed: 60 },
        // { id: 111, name: 'Rhinocorne', hp: 80, atk: 85, def: 95, atk_spe: 30, def_spe: 30, speed: 25 },
        // { id: 112, name: 'Rhinoferos', hp: 105, atk: 130, def: 120, atk_spe: 45, def_spe: 45, speed: 40 },
        // { id: 113, name: 'Leveinard', hp: 250, atk: 5, def: 5, atk_spe: 35, def_spe: 105, speed: 50 },
        // { id: 114, name: 'Saquedeneu', hp: 65, atk: 55, def: 115, atk_spe: 100, def_spe: 40, speed: 60 },
        // { id: 115, name: 'Kangourex', hp: 105, atk: 95, def: 80, atk_spe: 40, def_spe: 80, speed: 90 },
        // { id: 116, name: 'Hypotrempe', hp: 30, atk: 40, def: 70, atk_spe: 70, def_spe: 25, speed: 60 },
        // { id: 117, name: 'Hypocean', hp: 55, atk: 65, def: 95, atk_spe: 95, def_spe: 45, speed: 85 },
        // { id: 118, name: 'Poissirene', hp: 45, atk: 67, def: 60, atk_spe: 35, def_spe: 50, speed: 63 },
        // { id: 119, name: 'Poissoroy', hp: 80, atk: 92, def: 65, atk_spe: 65, def_spe: 80, speed: 68 },
        // { id: 120, name: 'Stari', hp: 30, atk: 45, def: 55, atk_spe: 70, def_spe: 55, speed: 85 },
        // { id: 121, name: 'Staross', hp: 60, atk: 75, def: 85, atk_spe: 100, def_spe: 85, speed: 115 },
        // { id: 122, name: 'M.Mime', hp: 40, atk: 45, def: 65, atk_spe: 100, def_spe: 120, speed: 90 },
        // { id: 123, name: 'Insecateur', hp: 70, atk: 110, def: 80, atk_spe: 55, def_spe: 80, speed: 105 },
        // { id: 124, name: 'Lippoutou', hp: 65, atk: 50, def: 35, atk_spe: 115, def_spe: 95, speed: 95 },
        // { id: 125, name: 'Elektek', hp: 65, atk: 83, def: 57, atk_spe: 95, def_spe: 85, speed: 105 },
        // { id: 126, name: 'Magmar', hp: 65, atk: 95, def: 57, atk_spe: 100, def_spe: 85, speed: 93 },
        // { id: 127, name: 'Scarabrute', hp: 65, atk: 125, def: 100, atk_spe: 55, def_spe: 70, speed: 85 },
        // { id: 128, name: 'Tauros', hp: 75, atk: 100, def: 95, atk_spe: 40, def_spe: 70, speed: 110 },
        // { id: 129, name: 'Magicarpe', hp: 20, atk: 10, def: 55, atk_spe: 15, def_spe: 20, speed: 80 },
        // { id: 130, name: 'Leviator', hp: 95, atk: 125, def: 79, atk_spe: 60, def_spe: 100, speed: 81 },
        // { id: 131, name: 'Lokhlass', hp: 130, atk: 85, def: 80, atk_spe: 85, def_spe: 95, speed: 60 },
        // { id: 132, name: 'Metamorph', hp: 48, atk: 48, def: 48, atk_spe: 48, def_spe: 48, speed: 48 },
        // { id: 133, name: 'Evoli', hp: 55, atk: 55, def: 50, atk_spe: 45, def_spe: 65, speed: 55 },
        // { id: 134, name: 'Aquali', hp: 130, atk: 65, def: 60, atk_spe: 110, def_spe: 95, speed: 65 },
        // { id: 135, name: 'Voltali', hp: 65, atk: 65, def: 60, atk_spe: 110, def_spe: 95, speed: 130 },
        // { id: 136, name: 'Pyroli', hp: 65, atk: 130, def: 60, atk_spe: 95, def_spe: 110, speed: 65 },
        // { id: 137, name: 'Porygon', hp: 65, atk: 60, def: 70, atk_spe: 85, def_spe: 75, speed: 40 },
        // { id: 138, name: 'Amonita', hp: 35, atk: 40, def: 100, atk_spe: 90, def_spe: 55, speed: 35 },
        // { id: 139, name: 'Amonistar', hp: 70, atk: 60, def: 125, atk_spe: 115, def_spe: 70, speed: 55 },
        // { id: 140, name: 'Kabuto', hp: 30, atk: 80, def: 90, atk_spe: 55, def_spe: 45, speed: 55 },
        // { id: 141, name: 'Kabutops', hp: 60, atk: 115, def: 105, atk_spe: 65, def_spe: 70, speed: 80 },
        // { id: 142, name: 'Ptera', hp: 80, atk: 105, def: 65, atk_spe: 60, def_spe: 75, speed: 130 },
        // { id: 143, name: 'Ronflex', hp: 160, atk: 110, def: 65, atk_spe: 65, def_spe: 110, speed: 30 },
        // { id: 144, name: 'Artikodin', hp: 90, atk: 85, def: 100, atk_spe: 95, def_spe: 125, speed: 85 },
        // { id: 145, name: 'Electhor', hp: 90, atk: 90, def: 85, atk_spe: 125, def_spe: 90, speed: 100 },
        // { id: 146, name: 'Sulfura', hp: 90, atk: 100, def: 90, atk_spe: 125, def_spe: 85, speed: 90 },
        // { id: 147, name: 'Minidraco', hp: 41, atk: 64, def: 45, atk_spe: 50, def_spe: 50, speed: 50 },
        // { id: 148, name: 'Draco', hp: 61, atk: 84, def: 65, atk_spe: 70, def_spe: 70, speed: 70 },
        // { id: 149, name: 'Dracolosse', hp: 91, atk: 134, def: 95, atk_spe: 100, def_spe: 100, speed: 80 },
        // { id: 150, name: 'Mewtwo', hp: 106, atk: 110, def: 90, atk_spe: 154, def_spe: 90, speed: 130 },
        // { id: 151, name: 'Mew', hp: 100, atk: 100, def: 100, atk_spe: 100, def_spe: 100, speed: 100 }
    ]);
    
    // Create User
    const adminUser = await User.create({
        username: "Admin",
        email: "admin@example.com",
        password: await bcrypt.hash("password123", 10)
    });

    // Create Teams
    const teams = await Team.bulkCreate([
        { id: 1, name: 'Ultimate Team', description: 'La meilleure team du monde', user_id: adminUser.id },
        { id: 2, name: 'La Team de l\'enfer', description: 'Le feuuuuu', user_id: adminUser.id },
        { id: 3, name: 'Squad fofolle', description: 'Pour tout gagner', user_id: adminUser.id }
    ]);


    // Add Pokémon to Teams
    await addPokemonToTeam(3, 1);
    await addPokemonToTeam(6, 1);
    await addPokemonToTeam(9, 1);
    await addPokemonToTeam(12, 1);
    await addPokemonToTeam(15, 1);
    await addPokemonToTeam(34, 1);
    await addPokemonToTeam(6, 2);
    await addPokemonToTeam(38, 2);
    await addPokemonToTeam(59, 2);
    await addPokemonToTeam(126, 2);
    await addPokemonToTeam(136, 2);
    await addPokemonToTeam(146, 2);
    await addPokemonToTeam(151, 3);
    await addPokemonToTeam(150, 3);
    await addPokemonToTeam(149, 3);
    await addPokemonToTeam(26, 3);
    await addPokemonToTeam(145, 3);
    await addPokemonToTeam(144, 3);

    // Add Pokémon to Types
    await addPokemonToType(1, 10);
    await addPokemonToType(1, 11);
    await addPokemonToType(2, 10);
    await addPokemonToType(2, 11);
    await addPokemonToType(3, 10);
    await addPokemonToType(3, 11);
    await addPokemonToType(4, 6);
    await addPokemonToType(5, 6);
    await addPokemonToType(6, 6);
    await addPokemonToType(6, 17);
    await addPokemonToType(7, 4);
    await addPokemonToType(8, 4);
    await addPokemonToType(9, 4);
    await addPokemonToType(10, 8);
    await addPokemonToType(11, 8);
    await addPokemonToType(12, 8);
    await addPokemonToType(12, 17);
    await addPokemonToType(13, 8);
    await addPokemonToType(13, 11);
    await addPokemonToType(14, 8);
    await addPokemonToType(14, 11);
    await addPokemonToType(15, 8);
    await addPokemonToType(15, 11);
    await addPokemonToType(16, 9);
    await addPokemonToType(16, 17);
    await addPokemonToType(17, 9);
    await addPokemonToType(17, 17);
    await addPokemonToType(18, 9);
    await addPokemonToType(18, 17);
    await addPokemonToType(19, 9);
    await addPokemonToType(20, 9);
    await addPokemonToType(21, 9);
    await addPokemonToType(21, 17);
    await addPokemonToType(22, 9);
    await addPokemonToType(22, 17);
    await addPokemonToType(23, 11);
    await addPokemonToType(24, 11);
    await addPokemonToType(25, 5);
    await addPokemonToType(26, 5);
    await addPokemonToType(27, 14);
    await addPokemonToType(28, 14);
    await addPokemonToType(29, 11);
    await addPokemonToType(30, 11);
    await addPokemonToType(31, 11);
    await addPokemonToType(31, 14);
    await addPokemonToType(32, 11);
    await addPokemonToType(33, 11);
    await addPokemonToType(34, 11);
    await addPokemonToType(34, 14);
    await addPokemonToType(35, 9);
    await addPokemonToType(36, 9);
    await addPokemonToType(37, 6);
    await addPokemonToType(38, 6);
    await addPokemonToType(39, 9);
    await addPokemonToType(40, 9);
    await addPokemonToType(41, 11);
    await addPokemonToType(41, 17);
    await addPokemonToType(42, 11);
    await addPokemonToType(42, 17);
    await addPokemonToType(43, 10);
    await addPokemonToType(43, 11);
    await addPokemonToType(44, 10);
    await addPokemonToType(44, 11);
    await addPokemonToType(45, 10);
    await addPokemonToType(45, 11);
    await addPokemonToType(46, 8);
    await addPokemonToType(46, 10);
    await addPokemonToType(47, 8);
    await addPokemonToType(47, 10);
    await addPokemonToType(48, 8);
    await addPokemonToType(48, 11);
    await addPokemonToType(49, 8);
    await addPokemonToType(49, 11);
    await addPokemonToType(50, 14);
    await addPokemonToType(51, 14);
    await addPokemonToType(52, 9);
    await addPokemonToType(53, 9);
    await addPokemonToType(54, 4);
    await addPokemonToType(55, 4);
    await addPokemonToType(56, 2);
    await addPokemonToType(57, 2);
    await addPokemonToType(58, 6);
    await addPokemonToType(59, 6);
    await addPokemonToType(60, 4);
    await addPokemonToType(61, 4);
    await addPokemonToType(62, 4);
    await addPokemonToType(62, 2);
    await addPokemonToType(63, 12);
    await addPokemonToType(64, 12);
    await addPokemonToType(65, 12);
    await addPokemonToType(66, 2);
    await addPokemonToType(67, 2);
    await addPokemonToType(68, 2);
    await addPokemonToType(69, 10);
    await addPokemonToType(69, 11);
    await addPokemonToType(70, 10);
    await addPokemonToType(70, 11);
    await addPokemonToType(71, 10);
    await addPokemonToType(71, 11);
    await addPokemonToType(72, 4);
    await addPokemonToType(72, 11);
    await addPokemonToType(73, 4);
    await addPokemonToType(73, 11);
    await addPokemonToType(74, 13);
    await addPokemonToType(74, 14);
    await addPokemonToType(75, 13);
    await addPokemonToType(75, 14);
    await addPokemonToType(76, 13);
    await addPokemonToType(76, 14);
    await addPokemonToType(77, 6);
    await addPokemonToType(78, 6);
    await addPokemonToType(79, 4);
    await addPokemonToType(79, 12);
    await addPokemonToType(80, 4);
    await addPokemonToType(80, 12);
    await addPokemonToType(81, 5);
    await addPokemonToType(81, 1);
    await addPokemonToType(82, 5);
    await addPokemonToType(82, 1);
    await addPokemonToType(83, 9);
    await addPokemonToType(83, 17);
    await addPokemonToType(84, 9);
    await addPokemonToType(84, 17);
    await addPokemonToType(85, 9);
    await addPokemonToType(85, 17);
    await addPokemonToType(86, 4);
    await addPokemonToType(87, 4);
    await addPokemonToType(87, 7);
    await addPokemonToType(88, 11);
    await addPokemonToType(89, 11);
    await addPokemonToType(90, 4);
    await addPokemonToType(91, 4);
    await addPokemonToType(91, 7);
    await addPokemonToType(92, 15);
    await addPokemonToType(92, 11);
    await addPokemonToType(93, 15);
    await addPokemonToType(93, 11);
    await addPokemonToType(94, 15);
    await addPokemonToType(94, 11);
    await addPokemonToType(95, 13);
    await addPokemonToType(95, 14);
    await addPokemonToType(96, 12);
    await addPokemonToType(97, 12);
    await addPokemonToType(98, 4);
    await addPokemonToType(99, 4);
    await addPokemonToType(100, 5);
    await addPokemonToType(101, 5);
    await addPokemonToType(102, 10);
    await addPokemonToType(102, 12);
    await addPokemonToType(103, 10);
    await addPokemonToType(103, 12);
    await addPokemonToType(104, 14);
    await addPokemonToType(105, 14);
    await addPokemonToType(106, 2);
    await addPokemonToType(107, 2);
    await addPokemonToType(108, 9);
    await addPokemonToType(109, 11);
    await addPokemonToType(110, 11);
    await addPokemonToType(111, 14);
    await addPokemonToType(111, 13);
    await addPokemonToType(112, 14);
    await addPokemonToType(112, 13);
    await addPokemonToType(113, 9);
    await addPokemonToType(114, 10);
    await addPokemonToType(115, 9);
    await addPokemonToType(116, 4);
    await addPokemonToType(117, 4);
    await addPokemonToType(118, 4);
    await addPokemonToType(119, 4);
    await addPokemonToType(120, 4);
    await addPokemonToType(121, 4);
    await addPokemonToType(121, 12);
    await addPokemonToType(122, 12);
    await addPokemonToType(123, 8);
    await addPokemonToType(123, 17);
    await addPokemonToType(124, 7);
    await addPokemonToType(124, 12);
    await addPokemonToType(125, 5);
    await addPokemonToType(126, 6);
    await addPokemonToType(127, 8);
    await addPokemonToType(128, 9);
    await addPokemonToType(129, 4);
    await addPokemonToType(130, 4);
    await addPokemonToType(130, 17);
    await addPokemonToType(131, 4);
    await addPokemonToType(131, 7);
    await addPokemonToType(132, 9);
    await addPokemonToType(133, 9);
    await addPokemonToType(134, 4);
    await addPokemonToType(135, 5);
    await addPokemonToType(136, 6);
    await addPokemonToType(137, 9);
    await addPokemonToType(138, 13);
    await addPokemonToType(138, 4);
    await addPokemonToType(139, 13);
    await addPokemonToType(139, 4);
    await addPokemonToType(140, 13);
    await addPokemonToType(140, 4);
    await addPokemonToType(141, 13);
    await addPokemonToType(141, 4);
    await addPokemonToType(142, 13);
    await addPokemonToType(142, 17);
    await addPokemonToType(143, 9);
    await addPokemonToType(144, 7);
    await addPokemonToType(144, 17);
    await addPokemonToType(145, 5);
    await addPokemonToType(145, 17);
    await addPokemonToType(146, 6);
    await addPokemonToType(146, 17);
    await addPokemonToType(147, 3);
    await addPokemonToType(148, 3);
    await addPokemonToType(149, 3);
    await addPokemonToType(149, 17);
    await addPokemonToType(150, 12);
    await addPokemonToType(151, 12);


    console.log("✅ Pokémon seed done with success!");
    console.log("🧹 Clean up by closing database connexion");
    await sequelize.close();
}

// Define function to add Pokemon to Team
async function addPokemonToTeam(pokemonId, teamId) {
    const pokemon = await Pokemon.findByPk(pokemonId);
    const team = await Team.findByPk(teamId);
    await team.addPokemon(pokemon);
}

// Define function to add Pokemon to Type
async function addPokemonToType(pokemonId, typeId) {
    const pokemon = await Pokemon.findByPk(pokemonId);
    const type = await Type.findByPk(typeId);
    await type.addPokemon(pokemon);
}

// Call seed function
seedDatabase()
