const app = Vue.createApp({

    data() {

        return {
            showBooks: true,
            books: [
                { title: 'book1', genre: 'genre1', img: 'adress1', color: true },
                { title: 'book1', genre: 'genre2', img: 'adress2', color: false },
                { title: 'book1', genre: 'genre3', img: 'adress3', color: false },

            ],
            methods: {
                handleColor(book) {


                }


            }
        }

    }

})

app.mount('#app')