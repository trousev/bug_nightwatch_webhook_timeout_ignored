module.exports = {
    "unit_tests_mode": true,
    "src_folders": [ "unittests" ],
    "output_folder": "reports",


    "test_settings": {

        "unit" : {
            "selenium": {
                "start_process": false,
                "start_session": false
            },
            "globals" : {
                "asyncHookTimeout": 180000
            },
        }
    }
}
