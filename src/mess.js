exports.wait = () => {
	return`Mohon Tunggu Sebentar...`
}

exports.banned = () => {
	return`Maaf Kamu Sudah Dibanned`
}

exports.emror = () => {
	return`_Error Kak_`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.stikga = () => {
	return`*Yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*Maaf link tidak valid*`
}

exports.groupo = () => {
	return`Maaf, Perintah Ini Hanya Bisa Digunakan Dalam Group!`
}

exports.ownerb = () => {
	return`Maaf, Perintah Ini Hanya Bisa Digunakan Oleh Owner Bot!`
}

exports.admin = () => {
	return`Maaf, Perintah Ini Hanya Bisa Digunakan Oleh Admin Group!`
}

exports.badmin = () => {
	return`Bot Harus Admin Dulu Untuk Menggunakan Fitur Ini`
}

exports.nsfwoff = () => {
	return`*FITUR NSFW BELUM DIAKTIFKAN*`
}

exports.prem = () => { 
	return `Maaf, Perintah Ini Khusus Untuk User Premium. Info Lebih Lanjut Silahkan Kirim Perintah *${prefix}uptopremium*`
}

exports.limit = (pushname) => {
	return`*Maaf ${pushname} limit hari ini habis*\n*Hubungi kami* : wa.me/6281227961957\n\n*Note : Kami akan berikan random dari 1-10*`
}

exports.satukos = (prefix, command) => {
	return`─「 *FORMAT SALAH* 」─\n• ${prefix + command} aktif\nUntuk Mengaktifkan\n• ${prefix + command} mati\nUntuk Menonaktifkan`
}
