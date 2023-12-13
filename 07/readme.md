# 🎄 <span style="color: goldenrod">Reto #07</span> 📦 Las cajas en 3D

Santa está experimentando con nuevos diseños de regalos y **necesita tu ayuda para visualizarlos en 3D**.

### Tu tarea es escribir una función que, dado un tamaño `n` (entero), **genere un dibujo de un regalo en 3D** utilizando caracteres ASCII.

Las líneas de los regalos se dibujan con `#` y las caras con el símbolo que nos pasan como parámetro:

## ⭐ <span style="color: goldenrod">Ejemplo</span>

```
drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

drawGift(5, '*')
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(1, '^')
/*
#
*/
```

### Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.

## ⭐ <span style="color: goldenrod">Notas</span>

Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter `"`.
