
// LOGIN FUNCTION
function login(){
    let user = document.getElementById("loginUser").value.trim();
    let pass = document.getElementById("loginPass").value.trim();

    if(user === "" || pass === ""){
        alert("Enter Username and Password");
        return;
    }

    localStorage.setItem("studentName", user);
    window.location.href = "dashboard.html";
}

// CHECK LOGIN PROTECTION

function checkLogin(){
    if(!localStorage.getItem("studentName")){
        alert("Please login first!");
        window.location.href = "login.html";
    }
}


// LOGOUT

function logout(){
    localStorage.removeItem("studentName");
}

// OPEN COURSE (ONLY IF LOGGED IN)

function openCourse(title, videoID){

    if(!localStorage.getItem("studentName")){
        alert("Please login first!");
        window.location.href = "login.html";
        return;
    }

    localStorage.setItem("currentCourse", title);
    localStorage.setItem("videoID", videoID);

    // Reset progress for new course
    localStorage.removeItem("videoWatched");
    localStorage.setItem("progress", 0);

    window.location.href = "course.html";
}


// LOAD COURSE DATA

function loadCourse(){

    if(!document.getElementById("courseVideo")) return;

    const title = localStorage.getItem("currentCourse");
    const videoID = localStorage.getItem("videoID");

    if(!title || !videoID){
        alert("Please select a course from dashboard");
        window.location.href = "dashboard.html";
        return;
    }

    document.getElementById("courseTitle").innerText = title;
    document.getElementById("courseVideo").src =
        "https://www.youtube.com/embed/" + videoID;

    // Unlock lessons after 20 seconds
    setTimeout(() => {

    document.querySelectorAll("input[type='checkbox']")
    .forEach(box => box.disabled = false);

    document.getElementById("watchMessage").innerText =
        "Lessons Unlocked ✅";

    // Mark video as watched
    localStorage.setItem("videoWatched", "true");

}, 20000);
}

// UPDATE PROGRESS

function updateProgress(){

    let boxes = document.querySelectorAll("input[type='checkbox']");
    let checked = 0;

    boxes.forEach(box => {
        if(box.checked) checked++;
    });

    let percent = (checked / boxes.length) * 100;

    document.getElementById("progress").style.width = percent + "%";
    document.getElementById("progressText").innerText =
        percent + "% Completed";

    localStorage.setItem("progress", percent);
}



// DASHBOARD PROGRESS
if(document.getElementById("dashProgress")){
    let progress = localStorage.getItem("progress") || 0;
    document.getElementById("dashProgress").style.width = progress + "%";
    document.getElementById("dashText").innerText =
        progress + "% Completed";
}

// CERTIFICATE LOAD

function loadCertificate(){

    if(!localStorage.getItem("studentName")){
        alert("Please login first!");
        window.location.href = "login.html";
        return;
    }

    const name = localStorage.getItem("studentName");
    const course = localStorage.getItem("currentCourse");

    document.getElementById("certName").innerText = name;
    document.getElementById("certCourse").innerText = course;
    document.getElementById("certDate").innerText =
        "Date: " + new Date().toLocaleDateString();
}

// DOWNLOAD CERTIFICATE
async function downloadCertificate(){

    const certificate = document.getElementById("certificate");

    const canvas = await html2canvas(certificate);

    const imgData = canvas.toDataURL("image/png");

    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF("landscape", "mm", "a4");

    pdf.addImage(imgData, "PNG", 10, 10, 280, 150);

    pdf.save("Certificate.pdf");
}
function goToCertificate(){

    let progress = localStorage.getItem("progress");
    let videoWatched = localStorage.getItem("videoWatched");

    if(videoWatched !== "true"){
        alert("You must watch the video first!");
        return;
    }

    if(progress < 100){
        alert("Complete all lessons to unlock certificate!");
        return;
    }

    window.location.href = "certificate.html";
}