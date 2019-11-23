##Texto Criptografado = (Texto normal ^ E) mod N
def encrypt(mensagem, eh, mod):
    codigo = ""
    for i in range(0,len(mensagem)):
        codigo += chr( ord(mensagem[i]) ** eh % mod )
        

    return codigo

##Texto Normal = (Texto Criptografado ^ D) mod N
def decrypt(mensagem, de, mod):
    msg = ""
    for i in range(0,len(mensagem)):
        msg += chr( ord(mensagem[i]) ** de % mod )

        
    return msg

	
##Verifica se o numero eh primo
def ehPrimo(num):
    
    for i in range(2,(num/2)+1):
        if num % i == 0:
            return False
    
    return True


##Nao sei bem se eh o melhor jeito de fazer esse metodo, mas funcionou aqui
def primoRelacao(menor , maior):
    o = 0
    for i in range(2, (maior/2)+1):
        if maior / float(i) == menor:
            return i

    return o


##Esse metodo serve para achar o menor E
##que complete a equacao usada no if.
def achaE(de, ze):
    for i in range (1, ze):
        if (i * de) % ze == 1:
            return i


##main??
P = input("Digite o primo P. ")
##P = 17

if ehPrimo(P):

    Q = input("Digite o primo Q. ")
    ##Q = 11
    if ehPrimo(Q):

        ##Criacao de N e Z
        N = P * Q
        Z = (P-1) * (Q-1)
        
        print("Z: " , Z)
        
        
        D = input("Digite um primo em relacao a Z e menor que ele. ")
        ##D = 7
        
        
        O = primoRelacao(D, Z)
        if O == 0:
            
            E = achaE(D, Z)

            print("P: ", P)
            print("Q: ", Q)
            print(" ")
            print("N: ", N)
            print("Z: ", Z)
            print(" ")
            print("D: ", D)
            print("E: ", E)
            print(" ")

            texto = raw_input("Digite um texto para ser codificado: ")
            if E != None:
                cod = encrypt(texto, E, N)
                print(cod)

                print (decrypt(cod, D, N))
            else:
                print ("Erro na procura de um E")

        else:
            print("D nao eh primo em relacao a Z, valor encontrado no metodo: ", O)

    else:
        print("Q nao eh primo")

else:
    print("P nao eh primo")