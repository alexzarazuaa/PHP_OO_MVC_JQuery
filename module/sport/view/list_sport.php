
 <!--//main-content-->
    <!---->
    <ol class="breadcrumb">
        <li class="breadcrumb-item">
            <a href="index.php?page=controller_home&op=list" data-tr="Inicio"></a>
            <li  class="breadcrumb-item active" ></li>
            <a  href="index.php?page=controller_like&op=list" data-tr="Likes"></a>
        </li>
    </ol>

<div id="contenido">
    <div class="container">
        <div class="row">
            <h2 data-tr="LISTA DE USUARIOS"></h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div class="row">
          <p>
            <a href="index.php?page=controller_sport&op=create"><img src="view/img/anadir.png"></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <!-- DELETE ALL -->
             &nbsp;&nbsp;
             &nbsp;&nbsp;
             &nbsp;&nbsp;
            <td data-tr="Borrar Todo" align="left"><a class="Button_red" href="index.php?page=controller_sport&op=delete_all" data-tr="Borrar Todo">Borrar Todo</a></td>

           </p>
            <!-- dataTables requires a well formed table. It must contain <thead> and <tbody> tags -->
            <table id="table_list">
                <thead>
                    <tr>
                        <th width=125 data-tr="CODIGO DE USUARIO"><b></b></th>
                        <th width=125 data-tr="NOMBRE"><b></b></th>
                        <th width=125 data-tr="DEPORTE"><b></b></th>
                        <th width=350 data-tr="ACCION"><b></b></th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    if ($rdo->num_rows === 0) {
                        echo '<tr>';
                        echo '<td align="center"  colspan="3">NO HAY NINGUN USUARIO</td>';
                        echo '</tr>';
                    } else {
                        foreach ($rdo as $row) {
                            echo '<tr>';
                            echo '<td width=125>' . $row['codref'] . '</td>';
                            echo '<td width=125>' . $row['name'] . '</td>';
                            echo '<td width=125>' . $row['sport'] . '</td>';
                            echo '<td width=350>';
                            print("<div  class='Button_blue' id='" . $row['codref'] . "'>Read</div>");  //READ
                            echo '&nbsp;';
                            echo '&nbsp;';
                            //echo '<a class="Button_blue" href="index.php?page=controller_sport&op=read&codref='.$row['codref'].'"  data-tr="Read"></a>';
                            echo '&nbsp;';
                            echo '<a class="Button_green" href="index.php?page=controller_sport&op=update&codref=' . $row['codref'] . '" data-tr="Update"></a>';
                            echo '&nbsp;';
                            echo '<a class="Button_red" href="index.php?page=controller_sport&op=delete&codref=' . $row['codref'] . '" data-tr="Delete"></a>';
                            echo '</td>';
                            echo '</tr>';
                        }
                        
                    }
                    ?>
     
                </tbody>
            </table>
            <p></p>
                           <!-- BOTOON INICIO -->
                        <!--  <th align="center"><a data-tr="INICIO" class="Button_red" href="index.php?page=homepage"></a></th> -->
        </div>
    </div>
</div>

<!-- READ WITH MODAL -->
<section id="Div1">
</section>

