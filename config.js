const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VV25KiSBT8l3rVHkAU0IiOWARE8IqKghvzUEAJJfeiQLGj/32DvsT0w85sL08VBZUnKzPP4QVkOa7QArVg8gIKghtIUbekbYHABEzrywUR0AcBpBBMQCzbq8XQ2K4bZsNmBlHTG/JLJ2mndF7rs9GliatFJFonPXwGr31Q1F6C/T8AKquNsFleOW6vtZtkCdXGXcxd7hC2REWxk892ClEE8TBTOsAOEWKCs1ArIpQiApMFarcQk+/Rhwre4Kvs0mnMFucqX697UWwu8mkxmOp0Wfptcm2EFbEc9nv0DY8IvFOXQq/Xw7shZ5t6Ol3axcnx+bGxmxuzbL5erfDppL3Tr3CYocAIUEYxbb+te6UqZ/ZEoBYpcuZtokrlR8kBwXVqG1Rebiu3UKuAi6as/T3io9t9z5a7m+f6WpPUM2skWz26IqeIRDK12ytOT03tGavM+Ep8Sz6zEv8f3TWVa69I089wqcFFtXMxK+D76j5uMnho1g/ZHOXXoz+82t+kL1hz9XDUYvugSau7f9qhU1FHjHTNQ2aXMKbD+ldxcBSJEv+iD2lN/sTSaQtuzYc1Pm02nmaQrVkunZuMNvuduHdVOejNg6bQjlA6RPdSbzM35pKHLo/X6D7AwsEU66VaGsyeSZPewrmZkaUot+e3G8WoNQIw4V77gKAQV5RAivOs2xuwbB/AoNkjnyD6Ji+ILSRvT+aYZbNZ7XGZaK31yN9b5nB+XjrIks2eJd0Va7Z3n0EfFCT3UVWhYI4rmpN2haoKhqgCk79/9kGG7vTduK4cz/XBBZOK2lldJDkMPl39fAl9P68zum8zX+kWiIAJ+2sbUYqzsOp0rDNI/Ag3SIkgrcDkApMKvfZBgBrsow4PpA/bDSheWSJy5+PR0bplDpY7ylGevX9y8cY8H4joCY5H3tOQDUZPngT9J18SA4+/SDwUJdAH+KNnujO/tVAitkLGiaqgcSMd05a58+ersL+lverNhnftEUEBmFBSoz7woB/XxSGPUfYHXFu07/pcL3kr2sbccp1nc1tvkqURsF9w3z0Fk5dfc0rJgw7vuDKFkS5xoA/Stwji7uZjThpJAstyrMBPhL+qH7dOR1gUPzJEO9gPzbsDAaIQJ1U3MrdNybqxom3J8eHddF3WQlkJO1E/PfoM+3uYNgXZrgMGDb3esn0UR8J4A33RK+b5xZGSdHO5h6PDtTxLqvb8LyDd+Fkc3fFAywaPeubgHLcabM9OYY4u140znZ2NRWx66pFQvaEr3poOfCMe66KNrXV0oOdbPBSJjKbCOm5Es8xO4yl6TMPnrtp7Vr4WS5UIl0opHW9+W0rnnDG4nVg0FSPOmc26srmdeV3E8149ZdrMVUMU8Nq+1bLdbOGrdehfw5M8VY9HK1u45eLcU6XorH604dsYSD7GL35rkJePZF0weptmGewc+g9vvmacfe1/gfgYj7/J0fRQwsfDufC1zmCpEo6QGYwj3JQ7Yc4x5vmaSe7GHgrpRb6D19effVAkkF5yknZ/rywgOQ5AHySwovKvNj3gFFUUpgWYcCIvitxwOOT6IG3lothTSD+7G8jdoyx88PoPwoOE8/kHAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});





