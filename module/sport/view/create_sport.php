<div id="contenido">

    <form autocomplete="on" method="post" name="formsport" id="formsport">
   
        <h1> HOME MASTERSPORT</h1>
        <h2 data-tr="TEMPORADA 2019 / 2020"></h2>

        <?php
        if (isset($error)) {
            print("<BR><span CLASS='styerror'>" . "* " . $error . "</span><br/>");
        } ?>

        <table>
            <p>
                <label for="codref">Codigo de Usuario : </label>
                <input name="codref" id="ref" type="text" placeholder="CodigoUsuario" value="" />
                <span id="e_ref" class="styerror"></span>
                <font color="red">
                    <?php
                    if (isset($error_c)) {
                        print("<BR><span CLASS='styerror'>" . "* " . $error_c . "</span><br/>");
                    } ?>
                </font>
            </p>
            <p>
                <label for="nombre">Nombre : </label>
                <input name="name" id="name" type="text" placeholder="name" value="" />
                <span id="e_name" class="styerror"></span>
            </p>

            <p>
                <label for="email">Email : </label>
                <input name="email" id="email" type="text" placeholder="email" value="" />
                <span id="e_email" class="styerror"></span>
            </p>
            <p>
                <label for="cityShop">CityShop : </label>
                <input name="cityShop" id="city" type="text" placeholder="cityShop" value="" />
                <span id="e_city" class="styerror"></span>
            </p>

            <tr>

                <label for="date_birthday">Date_birthday : </label>
                <input id="date_birthday" type="text" name="date_birthday" value="" />

            </tr>


            <tr>
                <td>TIPO USUARIO : </td>
                <br>
                <td>
                    <input type="radio" id="user" name="user" value="man">MAN
                    <input type="radio" name="user" id="user" value="woman">WOMAN
                    <input type="radio" name="user" id="user" value="children">CHILDREN
                </td>
                <td>
                    <font color="red">
                        <span id="e_user" class="styerror"></span>

            </tr>

            <tr>
                <td>HABITUAL CLIENT : </td>
                <br>
                <td>
                    <input type="radio" id="habitual" name="habitual" value="si">SI
                    <input type="radio" name="habitual" id="habitual" value="no">NO
                </td>
                <td>
                    <font color="red">
                        <span id="e_habitual" class="styerror"></span>

            </tr>


            <td>SPORT : </td>
            <td><input type="checkbox" id="sport[]" name="sport[]" placeholder="sport" value="Swimming" />Swimming
                <input type="checkbox" id="sport[]" name="sport[]" placeholder="sport" value="Running" />Running
                <input type="checkbox" id="sport[]" name="sport[]" placeholder="sport" value="Football" />Football
                <input type="checkbox" id="sport[]" name="sport[]" placeholder="sport" value="Balonmano" />Balonmano

            <td>
                <font color="red">
                    <span id="e_sport" class="styerror"></span>
            </td>
            </tr>

            <p></p>




        </table>
            <input name="Submit" type="button" value="Registrar" onclick="validate_sport()" />
             <p></p>
        <td align="right"><a href="index.php?page=controller_sport&op=list" data-tr="VOLVER"></a></td>
    </form>
</div>