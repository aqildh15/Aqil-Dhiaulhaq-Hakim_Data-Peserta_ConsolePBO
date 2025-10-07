class Peserta {
  constructor(nama, umur, nilai) {
    this.nama = nama, 
    this.umur = umur,
    this.nilai = nilai;
  }
  grade () {
    if(this.nilai >= 90 && this.nilai <= 100) {
        console.log('Grade    : A')
    } if(this.nilai >= 80 && this.nilai <= 89) {
        console.log('Grade    : B')
    } if(this.nilai >= 70 && this.nilai <= 79) {
        console.log('Grade    : C')
    } if(this.nilai >= 60 && this.nilai <= 69) {
        console.log('Grade    : D')
    } if(this.nilai < 60) {
        console.log('Grade    : TIDAK LULUS')
    }
  }
  // getter
    get skor () {
        return this._skor;
    }
    // setter
    set skor (x) {
        if (x >= 0 && x <= 100) {
            this._skor = x;
            console.log(`Nilai diubah menjadi ${this._skor}`);
        } else {
            console.log("Nilai harus berada dalam range 0 - 100");
        }
    }
}

class Web extends Peserta {
  constructor(nama, umur, nilai, prog) {
    super(nama, umur, nilai);
    this.prog = prog;
  }
  program () {
    console.log(`Jurusan  : ${this.prog}`);
  }
}

class Design extends Peserta {
  constructor(nama, umur, nilai, prog) {
    super(nama, umur, nilai);
    this.prog = prog;
  }
  program () {
    console.log(`Jurusan  : ${this.prog}`);
  }
}

// let peserta1 = new Peserta("Budi", 24, 85);
let web = new Web ("Budi", 24, 85, "Pengembangan Web dengan Node.js dan React");

console.log("Nama     :", web.nama);
console.log("Umur     :", web.umur);
console.log("Nilai    :", web.nilai);
web.program();
web.grade();

console.log()
console.log("Perubahan Nilai :")
web.skor = 200;

console.log();

// let peserta2 = new Peserta("Joko", 24, 85);
let design = new Design ("Joko", 24, 85, "Desain Komunikasi Visual");

console.log("Nama     :", design.nama);
console.log("Umur     :", design.umur);
console.log("Nilai    :", design.nilai);
design.program();
design.grade();

console.log()
console.log("Perubahan Nilai :")
design.skor = 70;
