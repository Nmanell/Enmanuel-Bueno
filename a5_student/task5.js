"use strict";

function studentdata() {
    //*** TODO_A5 : insert your data below ***
    const lastname = 'Bueno';
    const firstname = 'Enmanuel';
    const studentnum = '31635407';
    document.getElementById("author").innerText = ("Author: ").concat(lastname, ", ", firstname, ", ", studentnum);
    document.getElementById("title").innerText = ("A5 | ").concat(lastname, ", ", firstname, ", ", studentnum);
}

function main() {
    studentdata();

    const canvas = document.getElementById("canvas");
    const statusElem = document.getElementById("webgpuStatus");

    bootstrap(canvas, statusElem).catch(function (error) {
        console.warn("[WebGPU A5] non-fatal bootstrap error:", error);
        wgpuSetStatus(statusElem, "WebGPU A5 bootstrap failed: " + String(error), "error");
    });
}
