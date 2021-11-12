console.log("---- # ZZCrypt ----");
// Descifra el siguiente secreto:
var secret =
    "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function decrypt(secret) {
    let textDecrypted = "";
    for (let i = 0; i < secret.length; i++) {

        let letter = plain[cipher.indexOf(secret[i])];

        textDecrypted = letter !== undefined ? textDecrypted.concat(letter) : textDecrypted.concat(" ");

    }
    return console.log(textDecrypted)

}
decrypt(secret);