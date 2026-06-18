(function(){
    if(window.NBWFilterAttached) return;
    window.NBWFilterAttached = true;

    function normalize(s){ return (s||'').toLowerCase(); }

    document.addEventListener('DOMContentLoaded', function(){
        var input = document.getElementById('nbw-search');
        var list = document.getElementById('nbw-list');
        if(!input || !list) return;
        var items = Array.from(list.querySelectorAll('li'));

        function doFilter(){
            var q = normalize(input.value.trim());
            if(!q){
                items.forEach(function(li){ li.style.display = ''; });
                return;
            }
            items.forEach(function(li){
                var src = normalize(li.getAttribute('data-search') || li.innerText);
                li.style.display = src.indexOf(q) !== -1 ? '' : 'none';
            });
        }

        input.addEventListener('input', doFilter, { passive: true });

        // initial filter
        doFilter();
    });
})();
