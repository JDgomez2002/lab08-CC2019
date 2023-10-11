# Laboratorio 08
https://youtu.be/3feo47BDPts
## Ejercicio 1
El algoritmo tiene una complejidad hibrida debido a los tres bucles anidados que tiene. El primer bucle se ejecuta n/2 veces, el segundo bucle se ejecuta n - n/2 veces y el tercer bucle se ejecuta log2(n) veces debido a que esperara a que j sea menor o igual a n aproximado hacia abajo de n /2. Por lo tanto, la complejidad teorica es O(n/2 * (n - n/2) * log2(n)). Esto se puede simplificar en O(n^3) debido a que aun que el bucle while mas anidado es de tipo log(n), esta es consumida como O(n) por los demas bucles de tipo O(n) que lo encapsulan. En la grafica se puede ver que termina siendo lineal la relacion O(n^3).

Por lo tanto este algoritmo tiene una complejidad O(n^3).

![](https://github.com/JDgomez2002/lab08-CC2019/blob/main/assets/Ex1.png?raw=true)

## Ejercicio 2
La complejidad de este algoritmo es O(n^2). El algoritmo tiene dos bucles anidados que iteran desde 1 hasta n, lo que resulta en una complejidad de O(n^2). Dentro del bucle interno, hay una instrucción console.log que se ejecuta una vez en cada iteración del bucle interno. Además, hay una instrucción break que se ejecuta inmediatamente después de la instrucción console.log, lo que hace que el bucle interno se detenga después de la primera iteración. Por lo tanto, la instrucción console.log se ejecuta n veces en total. En resumen, la complejidad de este algoritmo es O(n^2) y la instrucción console.log se ejecuta n veces.

Por lo tanto este algoritmo tiene una complejidad O(n^2).

![](https://github.com/JDgomez2002/lab08-CC2019/blob/main/assets/Ex2.png?raw=true)

## Ejercicio 3
La complejidad de este algoritmo es O(n). El bucle externo se ejecuta Math.floor(n/3) veces, lo que significa que su complejidad es O(n). El bucle interno se ejecuta n/4 veces, lo que también significa que su complejidad es O(n). Además, dentro del bucle interno, hay una instrucción console.log que se ejecuta una vez en cada iteración del bucle interno. Por lo tanto, la instrucción console.log se ejecuta n/4 veces en total.

Por lo tanto este algoritmo tiene una complejidad O(n).

![](https://github.com/JDgomez2002/lab08-CC2019/blob/main/assets/Ex3.png?raw=true)

## Ejercicio 4
El caso ideal o el mejor de los casos se produce cuando el elemento que estamos buscando está ubicado en la primera posición del arreglo. En este caso, solo se requiere una comparación para localizar el elemento. El tiempo de ejecución en esta situación es constante y se representa como O(1).

El caso promedio implica una situación en la cual el elemento buscado tiene la misma probabilidad de encontrarse en cualquier posición del arreglo. Para analizar este caso, consideramos que cada posición tiene una probabilidad de 1/n de contener el elemento deseado (donde n es el tamaño del arreglo). En promedio, recorremos la mitad de la lista antes de encontrar el elemento, ya que la posición deseada tiene la misma probabilidad de estar en cualquier lugar. Por lo tanto, el tiempo de ejecución en el caso promedio se puede expresar como O(n/2), que es equivalente a O(n). Esto implica que, en promedio, el tiempo de ejecución aumenta de manera lineal a medida que crece el tamaño del arreglo.

El peor de los casos se presenta cuando el elemento que estamos buscando se encuentra en la última posición del arreglo o no está presente en absoluto. En este caso, debemos recorrer todo el arreglo hasta el final para confirmar que el elemento no está presente. El tiempo de ejecución en el peor caso se representa como O(n), donde n representa el tamaño del arreglo. Esto significa que el tiempo de ejecución aumenta de manera proporcional al tamaño del arreglo en el peor escenario.

## Ejercicio 5
![](https://github.com/JDgomez2002/lab08-CC2019/blob/main/assets/Ex5a.jpg?raw=true)
![](https://github.com/JDgomez2002/lab08-CC2019/blob/main/assets/Ex5b.jpg?raw=true)
![](https://github.com/JDgomez2002/lab08-CC2019/blob/main/assets/Ex5c.jpg?raw=true)
