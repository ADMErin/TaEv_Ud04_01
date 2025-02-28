import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';


//const{ SpeechRecognition } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  constructor() { }

  async stop(){
    await SpeechRecognition.stop();
  }

  async start(){

    try {
        await SpeechRecognition.start({
          language: 'es-ES',
          maxResults: 2,
          prompt: "Di algo",
          popup: false,
          partialResults: true,
        });
        console.log("available" );
    } catch (error) {
      console.error('Error al iniciar la reconocimiento de voz', error);
    }

  }  
  async addEvent(){

    }
}
