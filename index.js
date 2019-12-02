const GCD = function(e, phi) {
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
}

var appRSA = new Vue({
  el: '#app-RSA',
  data: {
    message: '',
    message2: '',
    chave: 'Chave',
    codigo: "",
    decriptado: "",
    p: null,
    q: null,
    phi: null,
    expoente: null,
    step: 0,
    d: null,
    encryptN: null,
    encryptE: null,
    encryptMessage: null,
    decryptN: null,
    decryptD: null,
    decryptMessage: null,
  },
  watch: {
    'p': function(val, preVal){
        this.step= 0;    
  },
  'q': function(val, preVal){
    this.step= 0;    
}},
  methods: {
    resetar: () => {
      if(appRSA.step > 0){
        appRSA.step = 0;
        console.log('reset');
      }
    },
    isPrimo: num => {
      for(let i = 2, s = Math.sqrt(num); i <= s; i++)
          if(num % i === 0) return false; 
      return num > 1;
  },
    
    encontrarExpoente: (phi, p, q) => {
      let gcd = 0;
      let e = 2;
      let gcd2 = 0;
      phi = (p-1)*(q-1);
      while(gcd != 1) {
        e = e + 1
        gcd = GCD(e, phi);
        //gcd2 = GCD(e, p*q)
      }
      appRSA.expoente = e;
      appRSA.d = extend(e, phi);
      appRSA.step = 1;
      return;
    },
    fastModularExponentiation: (a, b, n) => {
      a = a % n;
      let result = 1;
      let x = a;
    
      while(b > 0){
        let leastSignificantBit = b % 2;
        b = Math.floor(b / 2);
    
        if (leastSignificantBit == 1) {
          result = result * x;
          result = result % n;
        }
    
        x = x * x;
        x = x % n;
      }
      return result;
    },
    encrypt: (message) => {
      let result = [];
      message.split('').forEach(letter => {
          result.push(fastModularExponentiation(letter.charCodeAt(0),appRSA.encryptE, appRSA.encryptN))
      })
      return result;
  },
  decrypt: (message) => {
    let result = '';
    message = JSON.parse(message)
    message.forEach(letter => {
      result = result +  String.fromCharCode(fastModularExponentiation(letter, appRSA.decryptD, appRSA.decryptN))
  })
  return result;
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


  const fastModularExponentiation = (a, b, n) => {
    a = a % n;
    var result = 1;
    var x = a;  
    while(b > 0){
      var leastSignificantBit = b % 2;
      b = Math.floor(b / 2);
  
      if (leastSignificantBit == 1) {
        result = result * x;
        result = result % n;
      }
  
      x = x * x;
      x = x % n;
    }
    return result;
  };