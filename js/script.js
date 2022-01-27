console.log('JS OK');
console.log('Vue ok', Vue);

//per collegarlo con l' estensione
Vue.config.devtools = true;

//stampare le foto in pagina
//stampare in pagina tanti puntini quante sono le immagini


const app = new Vue ({
    el: '#root',
    data: {
        images: [
          'images/image1.jpg',
          'images/image2.jpg',
          'images/image3.jpg',
          'images/image4.jpg',
        ],
    },
    methods: {

    }
});