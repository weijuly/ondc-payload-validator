$(() => {
    $('#validate').on('click', () => {
        $.ajax({
            type: 'POST',
            url: '/validate',
            data: JSON.stringify({fix: 'that'}),
            success: () => alert('success'),
            dataType: 'json',
            contentType: 'application/json'
        })
    })
})