//soal 7
const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High ",
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

const hitungTotalPenjualan = (dataPenjualan) => {
  if (dataPenjualan === undefined) {
    return "Error: Bro where is the parameter?";
  } else if (typeof dataPenjualan !== "object") {
    return "Error: Invalid data type";
  } else {
    let total = 0;
    for (let i = 0; i < dataPenjualan.length; i++) {
      total += dataPenjualan[i].totalTerjual;
    }
    return total;
  }
};

console.log(hitungTotalPenjualan(dataPenjualanPakAldi));

module.exports = hitungTotalPenjualan;
