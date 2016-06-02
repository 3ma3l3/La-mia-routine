function routine() { var frasi = [];

frasi[0] = "Infinitoooo!";

frasi[1] = "Sapete, feste festini io... io non so dire di no, mi conoscete";

frasi[2] = "Ma ti rendi conto che ci hai fatto perdere la partita?";

frasi[3] = "Questo è il mio giubbino e non lo darei mai a nessuno per nessun motivo al mondo";

frasi[4] = "Beh se si parla di cul-tura sono bravissimo anch'io";

frasi[5] = "Alla pazzia è fine un grande genio";

frasi[6] = "Ini, mini, maini, mo, non perdere tempo con gli scioglilungua o mo";

frasi[7] = "Ai chent biliv it";

frasi[8] = "Nick is back, infinito!";


var i = Math.round(8*Math.random());

var audio = document.getElementById("audio"+i);
       	audio.play();

    alert(frasi[i]);


                    }