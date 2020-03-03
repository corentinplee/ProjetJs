(function () {
    'use strict';

    $(() => {
        /* vérifier si utilisateur est connecté */
        $.ajax({
            url: 'json/$is_connected.php',
            method: 'get',

        }).done(function (data) {
            if (data === true) {
                /*faire d'autres appel ajax pour afficher ce qu'on veut*/

                $('body').append(
                    $('<button />')
                        .html('Déconnexion')
                        .click(function () {
                            $.ajax({
                                url: 'json.logout.php',
                                method: 'get',
                            }).done(function () {
                                window.location.href = 'login.html';
                            })

                        })
                );
            } else {


                window.location.href = 'login.html';
            }
        });


        $('#login-form').submit(function () {
            $('#message').fadeOut();
            $.ajax({
                url: $(this).attr('action'),
                method: $(this).attr('method'),
                data: $(this).serialize(),
            }).done(function (data) {
                if (data.succes === true) {
                    window.location.href = '/';
                } else {
                    $('#message')
                        .html('data.message')
                        .fadeIn();
                }

                console.log(data);

            }).fail(function () {
                $('body').html('Erreur fatale');
            });
            return false;
        });

    });
});