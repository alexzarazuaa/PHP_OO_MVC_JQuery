<div id="contenido">
    <form autocomplete="on" method="post" name="update_formsport" id="update_formsport">

        <h1> HOME MASTERSPORT</h1>
        <h2>TEMPORADA 2019 / 2020 </h2>

        <?php
        if (isset($error)) {
            print("<BR><span CLASS='styerror'>" . "* " . $error . "</span><br/>");
        } ?>

        <table>
            <p>
                <label for="codref">Codigo de Usuario : </label>
                <input name="codref" id="ref" type="text" placeholder="CodigoUsuario" value="<?php echo $sport['codref'] ?>" />
                <span id="e_ref" class="styerror"></span>
                <?php
                if (isset($e_u)) {
                    print("<BR><span CLASS='styerror'>" . "* " . $e_u . "</span><br/>");
                } ?>
            </p>
            <p>
                <label for="nombre">Nombre : </label>
                <input name="name" id="name" type="text" placeholder="name" value="<?php echo $sport['name'] ?>" />
                <span id="e_name" class="styerror"></span>
            </p>

            <p>
                <label for="email">Email : </label>
                <input name="email" id="email" type="text" placeholder="email" value="<?php echo $sport['email'] ?>" />
                <span id="e_email" class="styerror"></span>
            </p>
            <p>
                <label for="cityShop">CityShop : </label>
                <input name="cityShop" id="city" type="text" placeholder="cityShop" value="<?php echo $sport['cityShop'] ?>" />
                <span id="e_city" class="styerror"></span>
            </p>

            <tr>

                <label for="date_birthday">Date_birthday : </label>
                <input id="date_birthday" type="text" name="date_birthday" value="<?php echo $sport['date_birthday'] ?>" />

            </tr>

            <tr>
                <td>USER TYPE</td>
                <br>
                <td>
                    <?php
                    if ($sport['userType'] === "man") {
                    ?>
                        <input type="radio" id="user" name="user" value="man" checked />MAN
                        <input type="radio" name="user" id="user" value="woman">WOMAN
                        <input type="radio" name="user" id="user" value="children">CHILDREN

                    <?php
                    } elseif ($sport['userType'] === "woman") {
                    ?>
                        <input type="radio" id="user" name="user" value="man">MAN
                        <input type="radio" name="user" id="user" value="woman" checked />WOMAN
                        <input type="radio" name="user" id="user" value="children">CHILDREN

                    <?php
                    } elseif ($sport['userType'] === "children") {
                    ?>
                        <input type="radio" id="user" name="user" value="man">MAN
                        <input type="radio" name="user" id="user" value="woman">WOMAN
                        <input type="radio" name="user" id="user" value="children" checked />CHILDREN

                    <?php
                    }
                    ?>
                </td>
                <td><span id="e_user" class="styerror"></span></td>
            </tr>

            <tr>
                <td>HABITUAL CLIENT</td>
                <br>
                <td>
                    <?php
                    if ($sport['habitual'] === "si") {
                    ?>
                        <input type="radio" id="habitual" name="habitual" value="si" checked />SI
                        <input type="radio" name="habitual" id="habitual" value="no">NO
                    <?php
                    } elseif ($sport['habitual'] === "no") {
                    ?>
                        <input type="radio" id="habitual" name="habitual" value="si">SI
                        <input type="radio" name="habitual" id="habitual" value="no" checked />NO
                    <?php
                    }
                    ?>

                </td>
                <td><span id="e_habitual" class="styerror"></span></td>
            </tr>

            <tr>
                <td>Sport</td>
                <?php
                $sp = explode(",", $sport['sport']);
                ?>
                <td>
                    <?php
                    $s_array = in_array("Swimming", $sp);
                    if ($s_array) {
                    ?>
                        Swimming<input type="checkbox" name="sport[]" value="Swimming" checked><?php echo @$error[5] ?>
                    <?php
                    } else {
                    ?>
                        Swimming<input type="checkbox" name="sport[]" value="Swimming"><?php echo @$error[5] ?>
                    <?php
                    }
                    ?>

                    <?php
                    $busca_array = in_array("Running", $sp);
                    if ($busca_array) {
                    ?>
                        Running <input type="checkbox" name="sport[]" value="Running" checked><?php echo @$error[5] ?>
                    <?php
                    } else {
                    ?>
                        Running <input type="checkbox" name="sport[]" value="Running"><?php echo @$error[5] ?>
                    <?php
                    }
                    ?>

                    <?php
                    $s_array = in_array("Football", $sp);
                    if ($s_array) {
                    ?>
                        Football <input type="checkbox" name="sport[]" value="Football" checked><?php echo @$error[5] ?>
                    <?php
                    } else {
                    ?>
                        Football <input type="checkbox" name="sport[]" value="Football"><?php echo @$error[5] ?>
                    <?php
                    }
                    ?>

                    <?php
                    $s_array = in_array("Balonmano", $sp);
                    if ($s_array) {
                    ?>
                        Balonmano <input type="checkbox" name="sport[]" value="Balonmano" checked><?php echo @$error[5] ?>
                    <?php
                    } else {
                    ?>
                        Balonmano <input type="checkbox" name="sport[]" value="Balonmano"><?php echo @$error[5] ?>
                    <?php
                    }
                    ?>

                </td>
                <td><?php echo @$error[5] ?></td>
                <td><span id="e_sport" class="styerror"></span></td>
            </tr>

            <tr>
                <td><input name="Submit" type="button" value="Registrar" onclick="validate_sport_update()" /></td>
                <td align="right"><a href="index.php?page=controller_sport&op=list" data-tr="VOLVER"></a></td>
            </tr>
        </table>
    </form>
</div>