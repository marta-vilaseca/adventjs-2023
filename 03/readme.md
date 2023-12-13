# 🎄 <span style="color: goldenrod">Reto #03</span> 😏 El elfo travieso

En el taller de Santa, **un elfo travieso** ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.

Tienes la secuencia original de pasos en la fabricación _original_ y la secuencia modificada _modified_ que puede incluir un paso extra o faltar un paso.

Tu tarea es **escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación**. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

## ⭐ <span style="color: goldenrod">Ejemplos</span>

```
const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // ''
```

## ⭐ <span style="color: goldenrod">A tener en cuenta:</span>

- Siempre habrá un paso de diferencia o ninguno.
- La modificación puede ocurrir en cualquier lugar de la cadena.
- La secuencia original puede estar vacía
