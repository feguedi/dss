<?php
    $conectar = mysqli_connect('localhost', 'root', '', 'DSS');
    $consulta = "SELECT * FROM registros_salario";
    $resultado = mysqli_query($conectar, $consulta);
    $n = mysqli_num_rows($resultado);
    
    // Llenar arreglo inicial
    for ($i = 0; $i < $n; $i++) { 
        $fila = mysqli_fetch_row($resultado);
        $data[$i][0] = $fila[0];
        $data[$i][1] = $fila[1];
    }

    // Calcular PS
    $acumulador = 0;
    $data[0][2] = "";
    for ($i=0; $i <= $n; $i++) {
        $acumulador += $data[$i - 1][1];
        $data[$i][2] = $acumulador / $i;
    }

    // Calcular ERRORABS
    $data[0][3] = "";
    for ($i=0; $i < $n; $i++) { 
        $data[$i][3] = ABS($data[$i][2] - $data[$i][1]);
    }

    // Imprimir contenido de Data
?>
<div style="overflow-x:auto;"></div>
<table>
    <tr>
        <th>Periodo</th>
        <th>Frecuencia</th>
        <th>Promedio Simple</th>
        <th>EABS(PS)</th>
    </tr>
<?php
    <tr>
    for ($i = 0; $i < $n; $i++) {
        // print($data[$i][0]."++".$data[$i][1]."<br>");
        <td>$data[$i][0]</td>
        <td>$data[$i][1]</td>
        <td>$data[$i][2]</td>
        <td>$data[$i][3]</td>
    }
    </tr>
?>
</table>