requirejs.config({
    paths: {
        "jquery": "/jquery/dist/jquery"
    }
});

var need : Require = window["require"];
need(['app']);

