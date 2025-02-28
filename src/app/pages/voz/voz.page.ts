import { CamaraService } from './../../servicios/camara.service';
import { SpeechService } from './../../servicios/speech.service';
import { Component, OnInit } from '@angular/core';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';

@Component({
  selector: 'app-voz',
  templateUrl: './voz.page.html',
  styleUrls: ['./voz.page.scss'],
})
export class VozPage implements OnInit {

  constructor(public speechRecognition: SpeechService, public camara: CamaraService) { }

  ngOnInit() {
  }
  

  public async escuchar() {

    console.log("Boton pulsado")
    await SpeechRecognition.available();
    console.log("Disponible");
    await SpeechRecognition.requestPermissions();
    console.log("Permisos");

    try {
      await SpeechRecognition.start({
        prompt: "Hablar",
        maxResults: 1,
        partialResults: true,
        language: 'es-ES',
        popup: false
      });
      console.log("disponible");

      SpeechRecognition.addListener('partialResults', (result:any) => {
        const transcripcion = result.matches[0];
        console.log('Transcripcion:', transcripcion);
        if (transcripcion.toLowerCase().includes("foto")) {
          this.camara.sacarFoto();
        }
      });

      //await SpeechRecognition.stop();
      //SpeechRecognition.removeAllListeners();
      
    } catch (error) {
      console.error('Error con el inicio de reconocimiento de voz', error);
    }
    console.log("Reconocimiento de voz finalizado");
  };
}


