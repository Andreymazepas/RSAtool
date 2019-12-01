var appRSA = new Vue({
  el: '#app-RSA',
  data: {
    message: 'Mensagem',
    chave: 'Chave',
    codigo: "",
    decriptado: "",
    p: null,
    q: null,
    phi: null
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
    },
    isPrimo: num => {
      for(let i = 2, s = Math.sqrt(num); i <= s; i++)
          if(num % i === 0) return false; 
      return num > 1;
  },
    GCD: function(e, phi) {
      let gcd = 0;
      let a = 0;
      if(e > phi) {
        while( e % phi != 0) {
          a = e%phi;
          e = phi;
          phi = a;
        }
        gcd = phi;
      } else {
        while(phi%e != 0) {
          a = phi%e;
          phi = e;
          e = a;
        }
        gcd = e;
      }
      return gcd;
    },
    encontrarExpoente: (phi, p, q) => {
      let gcd = 0;
      let e = 2;
      while(gcd != 1) {
        e = e + 1
        gcd = this.GCD(e, phi);
        phi = (p-1)*(q-1);
      }
      return e;
    }
  }
})



function extend(E,PHI) {
  u1 = 1
  u2 = 0
  u3 = PHI
  v1 = 0
  v2 = 1
  v3 = E     
  
  while (v3 != 0) {
       q = Math.floor(u3/v3)
       t1 = u1 - q * v1
       t2 = u2 - q * v2
       t3 = u3 - q * v3
  
       u1 = v1
       u2 = v2 
       u3 = v3
  
       v1 = t1
       v2 = t2
       v3 = t3
       z = 1
  }
  uu = u1
  vv = u2
  
  if (vv < 0) {
            inverse = vv + PHI
  } else {
       inverse = vv
  }
  return inverse
  }    