function validateForm(){

    const forbiddenChar = /[!@#$%^&*()\=\[\]{};':"\\|,.<>\/?]+/
    let cancelSubmition = false

    function checkError(fieldId, errorSpanId){
        if(forbiddenChar.test(document.getElementById(fieldId).value)){
            document.getElementById(errorSpanId).style.display = 'block'
            document.getElementById(errorSpanId).innerHTML = 'special Characters are not allowed'
            document.getElementById(fieldId).style.borderColor = "#e33b5f";
            cancelSubmition = true
        }
        if (document.getElementById(fieldId).value[0] == '+' ||
            document.getElementById(fieldId).value[0] == '-' ||
            document.getElementById(fieldId).value[0] == '_' ){

                document.getElementById(errorSpanId).style.display = 'block'
                document.getElementById(errorSpanId).innerHTML = fieldId + " cannot start with '-', '_' or '+'"
                document.getElementById(fieldId).style.borderColor = "#e33b5f";
                cancelSubmition = true

        }
        if(document.getElementById(fieldId).value.length < 5){
            document.getElementById(errorSpanId).style.display = 'block'
            document.getElementById(errorSpanId).innerHTML = fieldId + " requires atleast 5 characters"
            document.getElementById(fieldId).style.borderColor = "#e33b5f";
            cancelSubmition = true
        }
        if(document.getElementById(fieldId).value == ""){
            document.getElementById(errorSpanId).style.display = 'block'
            document.getElementById(errorSpanId).innerHTML = fieldId + " is required"
            document.getElementById(fieldId).style.borderColor = "#e33b5f";
            cancelSubmition = true
        }
    }

    checkError("pipeline-name", 'pipeline-name-error')
    checkError("project-name", 'project-name-error')
    checkError("bucket-name", 'bucket-name-error')
    checkError("gcs-files-location", 'file-location-error')
    checkError("credentials", 'credentials-error')
    checkError("run-every", 'run-every-error')

    if(cancelSubmition) return false
}


