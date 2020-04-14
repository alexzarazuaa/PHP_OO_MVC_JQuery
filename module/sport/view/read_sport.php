<div id="contenido">
    <h1 data-tr="Informacion del Usuario"></h1>
    <p>
    <table border='4'>
        <tr >
            <td >Codigo De Usuario: </td>
            <td>
                <?php
                    echo $sport['codref'];
                ?>
            </td>
        </tr>
    
        <tr>
            <td>Nombre: </td>
            <td>
                <?php
                    echo $sport['name'];
                ?>
            </td>
        </tr>
        
        <tr>
            <td>Email: </td>
            <td>
                <?php
                    echo $sport['email'];
                ?>
            </td>
        </tr>
           
        <tr>
            <td>CITY SHOP: </td>
            <td>
                <?php
                    echo $sport['cityShop'];
                ?>
            </td>
        </tr>

        <tr>
            <td>TIPO USUSARIO: </td>
            <td>
                <?php
                    echo $sport['userType'];
                ?>
            </td>
        </tr>
        
        <tr>
            <td>CLIENTE HABITUAL: </td>
            <td>
                <?php
                    echo $sport['habitual'];
                ?>
            </td>
        </tr>
        <tr>
            <td>DEPORTE DE :  <?php   echo $sport['name'];?> </td>
            <td>
                <?php
                    echo $sport['sport'];
                ?>
            </td>
        </tr>
        
        <tr>
            <td>Fecha de nacimiento: </td>
            <td>
                <?php
                    echo $sport['date_birthday'];
                ?>
            </td>
        </tr>
    </table>
    </p>
    <p><a href="index.php?page=controller_sport&op=list" data-tr="VOLVER">Volver</a></p>
</div>