/*
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Vi ricordo le funzionalit√† minime
Deve vedersi un'immagine grande che √® l'immagine principale
Devono vedersi i thumbnails
Il thumbnails che corrisponde all'immagine grande deve essere graficamente messo in risalto con una classe active
Deve essere possibile cambiare l'immagine principale con le freccette prev e next
Bisogna fare in modo che il carosello sia "infinito": se clicco sul next e sono all'ultima immagine, ricomincio dalla prima; se sono alla prima immagine e clicco sul prev vado all'ultima.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
*/

console.log(Vue);

const app = Vue.createApp({
    data(){
       return {
        currIndex: 0,
        pictures,
        autoPlay: null
       }
    },
    methods: {
      goTo(par){
        if(par === 'prev'){
            if(this.currIndex !== 0) this.currIndex--;
            else this.currIndex = this.pictures.length - 1;
        } else {
            if(this.currIndex !== this.pictures.length - 1) this.currIndex++;
            else this.currIndex = 0;
        };
      },
      startAutoPlay(){
        this.autoPlay = setInterval(() =>{
             this.currIndex++;
            if (this.currIndex === this.pictures.length) this.currIndex = 0;
          }, 2000);
      },
      stopAutoPlay(){
        clearInterval(this.autoPlay);
      }
    },
    mounted() {
        this.startAutoPlay();
    }
});

app.mount('#root');