document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.link__input').forEach(input => {
        const link = input.closest('.link');
        const img = link.querySelector('.link__img');

        link.addEventListener('click', () => {
            input.value = '';
        });

        input.addEventListener('change', function () {
            if (this.files.length > 0) {
                link.classList.add('link--filled');
                img.src = 'assets/edit.svg';
            } else {
                link.classList.remove('link--filled');
                img.src = 'assets/add.svg';
            }
        });
    });
});