function upper(ied){
    var val = document.getElementById(ied)
    var new1 = val.value
    val.value = new1.toUpperCase()
}
function pics(){
    var pic = document.getElementById("inputpic")

    var picgo = pic.
    alert(picgo)
    var picture = document.getElementById("picture")
    picture.this.src = picgo
}
var gender;
function genderfun(ab){
    gender = ab
}
function selsub(sub){
    var nameval23 = document.getElementById(sub)
    nameval23.style.backgroundColor = "blue"
}
function getdetails(){
    var man = document.getElementById("main")
    man.style.display = "none"
    var detail = document.getElementById("det")
    detail.style.display = "block"


    var nameval = document.getElementById("name")
    var nameout = document.getElementById("nameout")
    nameout.innerHTML = nameval.value


    var fnameval = document.getElementById("fname")
    var fnameout = document.getElementById("fnameout")
    fnameout.innerHTML = fnameval.value

    var dobval = document.getElementById("dob")
    var doboutval = document.getElementById("dobout")
    doboutval.innerHTML = dobval.value

    var nationval = document.getElementById("nation")
    var nationout = document.getElementById("nationout")
    nationout.innerHTML = nationval.value

    var genout = document.getElementById("genderout")
    genout.innerHTML = gender

    var relval = document.getElementById("religion")
    var relout = document.getElementById("religionout")
    relout.innerHTML = relval.value

    var adval = document.getElementById("address")
    var adout = document.getElementById("addressout")
    adout.innerHTML = adval.value

    var nicval = document.getElementById("nic")
    var nicout = document.getElementById("nicout")
    nicout.innerHTML = nicval.value

    var conval = document.getElementById("contact")
    var conout = document.getElementById("contactout")
    conout.innerHTML = conval.value

    var postval = document.getElementById("pcode")
    var postout = document.getElementById("postout")
    postout.innerHTML = postval.value

    var moival = document.getElementById("moi")
    var moiout = document.getElementById("moiout")
    moiout.innerHTML = moival.value


    var exval = document.getElementById("board1")
    var exout = document.getElementById("exambodyout")
    exout.innerHTML = exval.value

    var exval2 = document.getElementById("board2")
    var exout2 = document.getElementById("exambodyout2")
    exout2.innerHTML = exval2.value

    var exval3 = document.getElementById("rol1")
    var exout3 = document.getElementById("rolnoout")
    exout3.innerHTML = exval3.value


    var exval4 = document.getElementById("rol2")
    var exout4 = document.getElementById("rolnoout2")
    exout4.innerHTML = exval4.value

    var exval5 = document.getElementById("group123")
    var exout5 = document.getElementById("groupout")
    exout5.innerHTML = exval5.value

    var exval6 = document.getElementById("group2")
    var exout6 = document.getElementById("groupout2")
    exout6.innerHTML = exval6.value

    var exval7 = document.getElementById("year")
    var exout7 = document.getElementById("yearout")
    exout7.innerHTML = exval7.value

    var exval8 = document.getElementById("year2")
    var exout8 = document.getElementById("yearout2")
    exout8.innerHTML = exval8.value

    var exval9 = document.getElementById("marks")
    var exout9 = document.getElementById("marksout")
    exout9.innerHTML = exval9.value

    var exval10 = document.getElementById("marks2")
    var exout10 = document.getElementById("marksout2")
    exout10.innerHTML = exval10.value

    var exval11 = document.getElementById("grade")
    var exout11 = document.getElementById("gradeout")
    exout11.innerHTML = exval11.value

    var exval12 = document.getElementById("grade2")
    var exout12 = document.getElementById("gradeout2")
    exout12.innerHTML = exval12.value

    var subjects = document.getElementById("subjects")
    for(var i = 0; i < arr.length; i++){
        subjects.innerHTML = arr + "<br>"
    }

    var youtubesrc = document.getElementById("pics2").src;
    alert(youtubesrc)

}














