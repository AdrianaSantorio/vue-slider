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
        },
        goForward() {
            if (this.currentIndex === this.images.length -1) {
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
        },
        goBack() {
            if (this.currentIndex === 0) {
                this.currentIndex = this.images.length -1;
            } else {
                this.currentIndex--;
            }
        }
    }
});


