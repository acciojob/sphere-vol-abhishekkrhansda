function volume_sphere() {
    let r = document.querySelector("#radius");
    let v = document.querySelector("#volume");

    let rVal = Number(r.value);

    if (rVal >= 0) {
        let vol = (4 / 3) * Math.PI * rVal * rVal * rVal;
        v.value = vol;
    }

    return false;
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
