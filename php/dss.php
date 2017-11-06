<?php
    $conectar = mysqli_connect('localhost', 'root', '', 'DSS');
    $consulta = "SELECT * FROM registros_salario";
    $resultado = mysqli_query($conectar, $consulta);
    $n = mysqli_num_rows($resultado);
    
    echo '"<h1>Sistema de Soporte a la Decisión</h1>"';
    
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
    for ($i = 1; $i < $n; $i++) { 
        $data[$i][3] = ABS($data[$i][2] - $data[$i][1]);
    }

    //PMS
    $k = 2;
    for ($i = 0; $i < $k; $i++) { 
        $data[$i][4] = "";
    }
    for($i = 0; $i < $n; $i++) {
        $suma = 0;
        for($j = 0; $j < $k; $j++) {
            $suma += $data[$i - $j][1];
        }
        $suma /= $k;
        $data[$i][4] = $suma;
    }

    //ErrAbs(PMS)
    for ($i=0; $i < $j + $k; $i++) { 
        $data[$i][5] = "";
    }
    for($i = $j + $k; $i < $n; $i++) {
        $data[$i][5] = abs($data[$i][1] - $data[$i][4]);
    }

    //PMD
    $j = 2;
    for ($i =0 ; $i <= $j + $k; $i++) { 
        $data[$i][6] = "";
    }
    for($i = $j + $k; $i < $n; $i++) {
        $suma = 0;
        for($c = 1; $c <= $k; $c++) {
            $suma += $data[$i - $c][4];
        }
        $suma /= $j;
        $data[i][6] = $suma;
    }

    //ErrAbs(PMD)
    for ($i=0; $i < $j + $k; $i++) { 
        $data[$i][7] = "";
    }
    for($i = $j + $k; $i < $n; $i++) {
        $data[$i][7] = abs($data[$i][1] - $data[$i][6]);
    }

    //PMDAjustado
    for ($i=0; $i < $j + $k; $i++) { 
        $data[$i][8] = "";
    }
    $m = 1;
    for ($o=$j+$k; $o < $n; $o++) { 
        $a = (2 * $data[$o][$4]) - $data[$o][6];
        $b = (abs($data[$o][4] - $data[$o][6]) * 2) / ($n - 1);
        $data[$o][8] = $a + ($b * $m);
    }

    //ErrAbs(PMDA)
    for ($i=0; $i < $j + $k; $i++) { 
        $data[$i][9] = "";
    }
    for($i = $j + $k; $i < $n; $i++) {
        $data[$i][9] = abs($data[$i][1] - $data[$i][8]);
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
        <th>Promedio Móvil Simple(k = 3)</th>
        <th>EABS(PMS)</th>
        <th>Promedio Móvil Doble</th>
        <th>EABS(PMD)</th>
        <th>Promedio Mòvil Doble Ajustado</th>
        <th>EABS(PMDA)</th>
    </tr>
<?php
    for ($i = 0; $i < $n; $i++) {
        // print($data[$i][0]."++".$data[$i][1]."<br>");
        print("<tr>");
        print("<td>".$data[$i][0]."</td>");
        print("<td>".$data[$i][1]."</td>");
        print("<td>".$data[$i][2]."</td>");
        print("<td>".$data[$i][3]."</td>");
        print("<td>".$data[$i][4]."</td>");
        print("<td>".$data[$i][5]."</td>");
        print("<td>".$data[$i][6]."</td>");
        print("<td>".$data[$i][7]."</td>");
        print("<td>".$data[$i][8]."</td>");
        print("<td>".$data[$i][9]."</td>");
        print("</tr>");
    }
?>
</table>
