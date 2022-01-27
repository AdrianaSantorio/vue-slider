console.log('JS OK');
console.log('Vue ok', Vue);

//per collegarlo con l' estensione
Vue.config.devtools = true;

const app = new Vue ({
    el: '#root',
    data: {
        currentIndex: 0,
        images: [
          'images/image1.jpg',
          'images/image2.jpg',
          'images/image3.jpg',
          'images/image4.jpg',
        ],
    },
    methods: {
        isActive(index) {
            return (index === this.currentIndex);
        },
        isCurrent(index) {
            this.currentIndex = index;
            console.log(index);
            console.log(this.currentIndex);
        },
        goForward() {
            this.currentIndex++;
        },
        goBack() {
            this.currentIndex--;
        }
    }
});


