let data = JSON.parse(localStorage.getItem("poinPanitia")) || [];

function render() {
  let tbody = document.getElementById("dataPoin");
  tbody.innerHTML = "";

  data.forEach((item, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${item.nama}</td>
        <td>${item.tugas}</td>
        <td>${item.poin}</td>
        <td><span class="delete" onclick="hapus(${index})">❌</span></td>
      </tr>
    `;
  });

  localStorage.setItem("poinPanitia", JSON.stringify(data));
}

function tambahPoin() {
  let nama = document.getElementById("nama").value;
  let tugas = document.getElementById("tugas").value;

  if (nama === "" || tugas === "") {
    alert("Isi semua dulu!");
    return;
  }

  data.push({
    nama: nama,
    tugas: tugas,
    poin: 1
  });

  document.getElementById("nama").value = "";
  document.getElementById("tugas").value = "";

  render();
}

function hapus(index) {
  data.splice(index, 1);
  render();
}

render();