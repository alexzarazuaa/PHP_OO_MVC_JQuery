<div id="contenido">
    <form autocomplete="on" method="post" name="delete_all_sport" id="delete_all_sport" >
        <table border='0'>
            <tr>
                <td align="center"  colspan="2"><h3>¿ESTAS SEGURO DE ELIMINAR TODOS LOS USUARIOS? </h3></td>
                
            </tr>
            <tr>
               <!-- <td align="center"><button type="button" class="Button_green"name="delete" id="delete">Aceptar</button></td>
                <td align="center"><a class="Button_red" href="index.php?page=controller_cloth&op=list">Cancelar</a></td>-->
                <td align="center"><button  class="Button_green"name="delete_all" id="delete_all" onclick="validate_sport_delete_all()" data-tr="ACEPTAR" ></button></td>
                <td align="center"><a class="Button_red" href="index.php?page=controller_sport&op=list" data-tr="CANCELAR"></a></td>
            </tr>
        </table>
    </form>
</div>