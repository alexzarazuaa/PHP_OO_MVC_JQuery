<div id="contenido">
    <form autocomplete="on" method="post" name="delete_sport" id="delete_sport">
        <table align="center" class="delete" border='4'>
            <tr>
                <td align="center" colspan="2">
                    <!-- <table class = "delete" border='2'> -->
                    <h3>
                        ¿Estas seguro/a que desea borrar al Usuario <br>
                        Con Codigo :<?php echo $sport['codref'];  ?> <br>
                        Nombre : <?php echo $sport['name']; ?> <br>
                        Email : <?php echo $sport['email'];  ?> <br>
                        Fecha Nacimiento : <?php echo $sport['date_birthday'];  ?> ?
                    </h3>
                </td>

            </tr>

        </table>
        <p></p>
        <br>
        <table align="center" class="buttons_delete">
            <tr>
                <td><button class="Button_green" name="delete" id="delete"  onclick="validate_sport_delete($codref) " data-tr="ACEPTAR"></button></td>
                <td><a class="Button_red" href="index.php?page=controller_sport&op=list" data-tr="CANCELAR"></a></td>
            </tr>
        </table>

    </form>
</div>