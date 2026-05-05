{
    "patcher": {
        "fileversion": 1,
        "appversion": {
            "major": 9,
            "minor": 1,
            "revision": 2,
            "architecture": "x64",
            "modernui": 1
        },
        "classnamespace": "box",
        "rect": [ 100.0, 100.0, 710.0, 320.0 ],
        "boxes": [
            {
                "box": {
                    "id": "obj-12",
                    "maxclass": "message",
                    "numinlets": 2,
                    "numoutlets": 1,
                    "outlettype": [ "" ],
                    "patching_rect": [ 7.0, 10.0, 66.0, 22.0 ],
                    "text": "script start"
                }
            },
            {
                "box": {
                    "id": "obj-28",
                    "maxclass": "message",
                    "numinlets": 2,
                    "numoutlets": 1,
                    "outlettype": [ "" ],
                    "patching_rect": [ 80.0, 10.0, 65.0, 22.0 ],
                    "text": "script stop"
                }
            },
            {
                "box": {
                    "id": "obj-1",
                    "maxclass": "newobj",
                    "numinlets": 1,
                    "numoutlets": 2,
                    "outlettype": [ "", "" ],
                    "patching_rect": [ 11.0, 48.0, 189.0, 22.0 ],
                    "saved_object_attributes": {
                        "autostart": 0,
                        "defer": 0,
                        "watch": 0
                    },
                    "text": "node.script ac-remote-telemetry.js",
                    "textfile": {
                        "filename": "ac-remote-telemetry.js",
                        "flags": 0,
                        "embed": 0,
                        "autowatch": 1
                    }
                }
            },
            {
                "box": {
                    "id": "obj-2",
                    "maxclass": "newobj",
                    "numinlets": 2,
                    "numoutlets": 2,
                    "outlettype": [ "", "" ],
                    "patching_rect": [ 207.0, 48.0, 79.0, 22.0 ],
                    "text": "route running"
                }
            },
            {
                "box": {
                    "bgmode": 0,
                    "border": 0,
                    "clickthrough": 0,
                    "enablehscroll": 0,
                    "enablevscroll": 0,
                    "id": "obj-6",
                    "lockeddragscroll": 0,
                    "lockedsize": 0,
                    "maxclass": "bpatcher",
                    "name": "n4m.monitor.maxpat",
                    "numinlets": 1,
                    "numoutlets": 1,
                    "offset": [ 0.0, 0.0 ],
                    "outlettype": [ "bang" ],
                    "patching_rect": [ 297.0, 78.0, 400.0, 220.0 ],
                    "viewvisibility": 1
                }
            },
            {
                "box": {
                    "id": "obj-150",
                    "maxclass": "newobj",
                    "numinlets": 1,
                    "numoutlets": 0,
                    "outlettype": [],
                    "patching_rect": [ 11.0, 78.0, 180.0, 22.0 ],
                    "text": "js ac-messnamed.js"
                }
            }
        ],
        "lines": [
            { "patchline": { "destination": [ "obj-1", 0 ], "source": [ "obj-12", 0 ] } },
            { "patchline": { "destination": [ "obj-1", 0 ], "source": [ "obj-28", 0 ] } },
            { "patchline": { "destination": [ "obj-150", 0 ], "source": [ "obj-1", 0 ] } },
            { "patchline": { "destination": [ "obj-2", 0 ], "source": [ "obj-1", 1 ] } },
            { "patchline": { "destination": [ "obj-6", 0 ], "source": [ "obj-2", 1 ] } }
        ],
        "autosave": 0
    }
}
