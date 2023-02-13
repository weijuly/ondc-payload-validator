$(() => {
    $('#validate').on('click', () => {
        $.ajax({
            type: 'POST',
            url: '/validate',
            data: JSON.stringify({
                operation: $('#operation').val(),
                version: '1.1.0',
                payload: btoa($('#payload').val())
            }),
            success: (data, status, xhttp) => {
                $('#err-list').empty()
                data.errors.map(x => {
                    $('#err-list').append(
                        $('<li>')
                            .addClass('list-group-item')
                            .text(x)
                    )
                })
                const modal = new bootstrap.Modal(document.getElementById("validation-result"), {})
                modal.show()
            },
            dataType: 'json',
            contentType: 'application/json'
        })
    })
})