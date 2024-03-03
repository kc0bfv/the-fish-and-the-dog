if( document.readyState != "loading" ) {
    after_load();
} else {
    window.addEventListener("load", after_load);
}

function after_load() {
    document.querySelectorAll(".navbar-toggler").forEach(
        (btn) => {
            btn.addEventListener("click", navbar_toggle);
        }
    );
}

function navbar_toggle(ev) {
    document.querySelectorAll(".navbar-collapse").forEach(
        (nb) => {
            nb.classList.toggle("collapse");
        }
    );
}
