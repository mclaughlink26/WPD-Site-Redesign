function copySect() {
    let url = document.location.href;

    navigator.clipboard.writeText(url).then(function () {
        alert('Copied!');
    }, function () {
        alert('Copy error')
    });
}
