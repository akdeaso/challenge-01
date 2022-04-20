//soal 8
const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const getInfoPenjualan = (dataPenjualan) => {
  if (typeof dataPenjualan !== "object") {
    return "Error: Invalid data type";
  } else {
    let totalModal = 0;
    for (i = 0; i < dataPenjualan.length; i++) {
      totalModal +=
        (dataPenjualan[i].totalTerjual + dataPenjualan[i].sisaStok) *
        dataPenjualan[i].hargaBeli;
    }
    let totalKeuntungan = 0;
    for (j = 0; j < dataPenjualan.length; j++) {
      totalKeuntungan +=
        dataPenjualan[j].hargaJual * dataPenjualan[j].totalTerjual;
    }
    totalKeuntungan -= totalModal;
    let terlaris = [];
    for (k = 0; k < dataPenjualan.length; k++) {
      terlaris.push([
        dataPenjualan[k].totalTerjual,
        dataPenjualan[k].namaProduk,
        dataPenjualan[k].penulis,
      ]);
    }
    terlaris
      .sort((a, b) => {
        return a[0] - b[0];
      })
      .reverse();
    const rupiah = (number) => {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(number);
    };
    return {
      totalKeuntungan: rupiah(totalKeuntungan),
      totalModal: rupiah(totalModal),
      presentaseKeuntungan:
        ((totalKeuntungan / totalModal) * 100).toFixed() + "%",
      produkBukuTerlaris: terlaris[0][1],
      penulisTerlaris: terlaris[0][2],
    };
  }
};

console.log(getInfoPenjualan(dataPenjualanNovel));
