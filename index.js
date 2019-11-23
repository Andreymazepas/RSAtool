var appRSA = new Vue({
  el: '#app-RSA',
  data: {
    message: 'Mensagem',
    chave: 'Chave',
    codigo: "",
    decriptado: "",
  },
  methods: {
    encryptMessage: function () {
    	P = 17;
    	Q = 29;

    	N = P * Q; // 493
    	Z = (P-1) * (Q-1); // 448

    	D = 443; // Primo em relação a Z
    	E = -1;
    	for(i = 0; i <= Z; i++){
    		if ((i * D) % Z == 1) E = i;
    	}

    	console.log("P: " + P);
        console.log("Q: " + Q);
        console.log(" ");
        console.log("N: " + N);
        console.log("Z: " + Z);
        console.log(" ");
        console.log("D: " + D);
        console.log("E: " + E);
        console.log(" ");

        for (i = 0; i < this.message.length; i++){
        	this.codigo += String.fromCharCode( this.message.charCodeAt(i) ^ E % N );
        }

        for (i = 0; i< this.codigo.length; i++){
        	this.decriptado += String.fromCharCode( this.codigo.charCodeAt(i) ^ D % N )
        }

    	// this.message = this.message.split('').reverse().join('')
    }
  }
})











// var app = new Vue({ 
//     el: '#app',
//     data: {
//         message: 'Hello Vue!'
//     }
// });


// var app2 = new Vue({
//   el: '#app-2',
//   data: {
//     message: 'You loaded this page on ' + new Date().toLocaleString()
//   }
// })


// var app3 = new Vue({
//   el: '#app-3',
//   data: {
//     seen: true
//   }
// })

// var app4 = new Vue({
//   el: '#app-4',
//   data: {
//     todos: [
//       { text: 'Learn JavaScript' },
//       { text: 'Learn Vue' },
//       { text: 'Build something awesome' }
//     ]
//   }
// })

// var app5 = new Vue({
//   el: '#app-5',
//   data: {
//     message: 'Hello Vue.js!'
//   },
//   methods: {
//     reverseMessage: function () {
//       this.message = this.message.split('').reverse().join('')
//     }
//   }
// })

// var app6 = new Vue({
//   el: '#app-6',
//   data: {
//     message: 'Hello Vue!'
//   }
// })