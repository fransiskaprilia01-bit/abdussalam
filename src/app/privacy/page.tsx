import { Card, CardContent } from '@/components/ui/card';
import { Shield, Eye, Lock, Database } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <img 
              src="/logo.png" 
              alt="ABDUSSALAM Logo" 
              className="w-24 h-24 mx-auto rounded-full bg-white p-2 shadow-xl mb-6"
            />
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg opacity-90">
              Kebijakan Privasi ABDUSSALAM Kedai Makanan
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <Card className="mb-8 border-orange-100">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Shield className="h-8 w-8 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Pendahuluan
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Selamat datang di Kedai Makanan <strong>ABDUSSALAM</strong>. Kami sangat peduli 
                      terhadap privasi dan keamanan data pribadi Anda. Kebijakan Privasi ini menjelaskan 
                      bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi 
                      pribadi Anda ketika Anda menggunakan layanan kami.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      Dengan menggunakan layanan kami, Anda menyetujui praktik yang dijelaskan dalam 
                      kebijakan privasi ini.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card className="mb-8 border-orange-100">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Database className="h-8 w-8 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Informasi yang Kami Kumpulkan
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                          Informasi Pribadi
                        </h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                          <li>Nama lengkap</li>
                          <li>Nomor telepon</li>
                          <li>Alamat email (jika ada)</li>
                          <li>Alamat pengiriman</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                          Informasi Transaksi
                        </h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                          <li>Riwayat pesanan</li>
                          <li>Menu yang dipesan</li>
                          <li>Metode pembayaran</li>
                          <li>Total pembayaran</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                          Informasi Teknis
                        </h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                          <li>Alamat IP</li>
                          <li>Jenis perangkat</li>
                          <li>Browser yang digunakan</li>
                          <li>Waktu akses</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card className="mb-8 border-orange-100">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Eye className="h-8 w-8 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Penggunaan Informasi
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Kami menggunakan informasi yang kami kumpulkan untuk:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Memproses dan menyelesaikan pesanan Anda</li>
                      <li>Memberikan layanan pelanggan yang lebih baik</li>
                      <li>Mengirimkan informasi tentang promosi dan menu baru</li>
                      <li>Meningkatkan kualitas layanan kami</li>
                      <li>Melindungi dari aktivitas penipuan dan keamanan</li>
                      <li>Mematuhi kewajiban hukum dan peraturan</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="mb-8 border-orange-100">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Lock className="h-8 w-8 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Keamanan Data
                    </h2>
                    <p className="text-gray-600 mb-4">
                      <strong>ABDUSSALAM</strong> berkomitmen untuk melindungi keamanan data pribadi Anda. 
                      Kami menerapkan berbagai langkah keamanan teknis dan organisasional, antara lain:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Enkripsi data sensitif</li>
                      <li>Pembatasan akses ke data pribadi</li>
                      <li>Pemantauan keamanan berkelanjutan</li>
                      <li>Pelatihan staf tentang privasi data</li>
                      <li>Backup data secara teratur</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Sharing */}
            <Card className="mb-8 border-orange-100">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Pembagian Informasi
                </h2>
                <p className="text-gray-600 mb-4">
                  Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga 
                  untuk tujuan pemasaran tanpa persetujuan Anda. Kami hanya akan membagikan informasi Anda:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Dengan persetujuan eksplisit dari Anda</li>
                  <li>Untuk memproses pesanan (misal: kurir pengiriman)</li>
                  <li>Jika diwajibkan oleh hukum atau peraturan</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan kami atau pihak lain</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card className="mb-8 border-orange-100">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Hak Anda
                </h2>
                <p className="text-gray-600 mb-4">
                  Sebagai pengguna layanan kami, Anda memiliki hak untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Mengakses data pribadi yang kami simpan tentang Anda</li>
                  <li>Memperbaiki data yang tidak akurat</li>
                  <li>Menghapus data pribadi Anda (dalam batas yang diizinkan)</li>
                  <li>Menolak pemasaran langsung dari kami</li>
                  <li>Meminta salinan data pribadi Anda</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="mb-8 border-orange-100">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Hubungi Kami
                </h2>
                <p className="text-gray-600 mb-4">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan hak Anda, 
                  silakan hubungi kami:
                </p>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">
                    Kedai Makanan ABDUSSALAM
                  </p>
                  <p className="text-gray-600 mb-2">
                    📍 DSN BARA SABA, Desa/Kelurahan Somor Koneng, Kec. Kwanyar, 
                    Kab. Bangkalan, Provinsi Jawa Timur
                  </p>
                  <p className="text-gray-600 mb-2">
                    📞 085285703515
                  </p>
                  <p className="text-gray-600">
                    📧 (Email akan ditambahkan saat tersedia)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Update Policy */}
            <Card className="border-orange-100">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Pembaruan Kebijakan
                </h2>
                <p className="text-gray-600">
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Setiap perubahan akan 
                  diposting di halaman ini dengan tanggal pembaruan terbaru. Kami mendorong Anda untuk 
                  secara berkala meninjau kebijakan ini untuk tetap mendapat informasi tentang bagaimana 
                  kami melindungi data Anda.
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  Kebijakan Privasi ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-6">
              <img 
                src="/logo.png" 
                alt="ABDUSSALAM Logo" 
                className="w-20 h-20 mx-auto rounded-full bg-white p-2"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">ABDUSSALAM</h3>
            <p className="text-gray-400 mb-6">Kedai Makanan Autentik</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="/" className="text-gray-400 hover:text-white transition-colors">
                Beranda
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 ABDUSSALAM. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}