# Flexbox

## Container
### display: flex
```
.container {
  display: flex; /* ou inline-flex */
}
```
### flex-direction

**Column**

Organiza em colunas verticais
```
.flex-container {
  display: flex;
  flex-direction: column; /* ou column-reverse*/
}
```

**Row**

Organiza em fileiras horizontais
```
.flex-container {
  display: flex;
  flex-direction: row; /* ou row-reverse*/
}
```

### flex-wrap

**Wrap**

Quebra a linha assim que um dos flex itens não puder mais ser compactado.
```
.flex-container {
  display: flex;
  flex-wrap: wrap; /* ou wrap-reverse*/
}
```

**NoWrap**

Valor padrão, não permite a quebra de linha.
```
.flex-container {
  display: flex;
  flex-wrap: nowrap;
}
```

### flex-flow

Um atalho para as duas propriedades acima
```
.flex-container {
  display: flex;
  flex-flow: row wrap;
}
```

### justify-content
Justificar conteúdo dentro do cointainer
```
.flex-container {
  display: flex;
  justify-content: center; /* ou flex-start, flex-end, space-around, space-between*/
}
```

### align-items

Alinhar itens verticalmente
```
.flex-container {
  display: flex;
  height: 200px;
  align-items: center; /* ou flex-start, flex-end, space-around, space-between*/
}
```

### align-content

Alinhar os flex-itens
```
.flex-container {
  display: flex;
  height: 200px;
  align-content: center; /* ou flex-start, stretch, flex-end, space-around, space-between*/
}
```
