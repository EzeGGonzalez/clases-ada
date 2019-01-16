# Ejercicios

1. Crear una aplicación de React que permita calcular tu peso en otros planetas.
  ![App peso en otros planetas](http://g.recordit.co/mSOHY8ImCh.gif)

    * La misma debe tener un formulario con dos campos: peso y planeta.
    * Peso es un campo donde la persona ingresará un dato numérico
    * Planeta debe ser un select con todos los planetas del sistema solar
    * Al hacer click en el botón calcular, aparecerá un mensaje con la leyenda **Tu peso en `[PLANETA]` es `[PESO]`**
    * Para calcular el peso se debe hacer la siguiente operación:
      * Si elegimos Mercurio: Peso * 0.0387;
      * Si elegimos Venus: Peso * 0,9051;
      * Si elegimos Marte: Peso * 0,3775;
      * Si elegimos Jupiter: Peso * 2,5306;
      * Si elegimos Saturno: Peso * 1,0653;
      * Si elegimos Urano: Peso * 0,8877;
      * Si elegimos Neptuno: Peso * 1,1377;
      * Si elegimos Pluton: Peso * 0,0632;

    * El esquema de componentes a crear en React es el siguiente:
    ![Componentes](https://file-mseiienkbd.now.sh/)

      * App: componente principal que va a incluir a los otros dos:
        ```
          <div>
            <Form />
            <Resultado />
          </div>
        ```
      * Form: componente que va a incluir los dos campos (input de peso y select de planetas), y el botón calcular para calcular el peso. Al hacer click en el botón, se deberá calcular el peso según el planeta elegido e informar al componente App
      * Resultado: componente con una etiqueta `<p>` con el mensaje: Tu peso en `[PLANETA]` es `[PESO]`. El nombre del planeta y el peso lo va a sacar de las props.