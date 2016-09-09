//Form JS File
function frm1_button685080275123_onClick_seq0(eventobject) {
    function successcallback(position) {
        var geoPosition = "Latitude: " + position.coords.latitude;
        geoPosition = geoPosition + " Longitude: " + position.coords.longitude;
        geoPosition = geoPosition + " Altitude: " + position.coords.altitude;
        geoPosition = geoPosition + " Accuracy: " + position.coords.accuracy;
        geoPosition = geoPosition + " Altitude Accuracy: " + position.coords.altitudeAccuracy;
        geoPosition = geoPosition + " Heading: " + position.coords.heading;
        geoPosition = geoPosition + " Speed: " + position.coords.speed;
        geoPosition = geoPosition + " Timestamp: " + position.timestamp;
        alert(geoPosition);
        frm1.labellat.text = "Latitude : " + position.coords.latitude;
        frm1.labellon.text = "Longitude : " + position.coords.longitude;
    }

    function errorcallback(positionerror) {
        var errorMesg = "Error code: " + positionerror.code;
        //errorMesg = errorMesg + " message: " + positionerror.message
        if (positionerror.code == 2) {
            errorMesg = errorMesg + "\n" + positionerror.message + "\n Please turn on the location services.";
            frm1.labellat.text = "Latitude : ";
            frm1.labellon.text = "Longitude : ";
            alert(errorMesg);
        } else if (positionerror.code == 3) {
            errorMesg = errorMesg + "\n" + positionerror.message + "\n we are unable to get the location values.";
            frm1.labellat.text = "Latitude : ";
            frm1.labellon.text = "Longitude : ";
            alert(errorMesg);
        }
    }
    var positionoptions = {
        timeout: 5000,
        enableHighAccuracy: false,
        maximumAge: 30000
    }; // 5 secs
    kony.location.getCurrentPosition(successcallback, errorcallback, positionoptions);
};

function addWidgetsfrm1() {
    var button685080275123 = new kony.ui.Button({
        "id": "button685080275123",
        "isVisible": true,
        "text": "Get Gps Coordinates",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frm1_button685080275123_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var labellat = new kony.ui.Label({
        "id": "labellat",
        "isVisible": true,
        "text": "Latitude :",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 20, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var labellon = new kony.ui.Label({
        "id": "labellon",
        "isVisible": true,
        "text": "Longitude :",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    frm1.add(
    button685080275123, labellat, labellon);
};

function frm1Globals() {
    var MenuId = [];
    frm1 = new kony.ui.Form2({
        "id": "frm1",
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrm1
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};