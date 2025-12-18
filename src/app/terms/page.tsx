import { Card, CardContent } from '@/components/ui/card';
import { FileText, Users, ShoppingCart, AlertCircle } from 'lucide-react';

export default function TermsAndConditions() {
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
              Terms & Conditions
            </h1>
            <p className="text-lg opacity-90">
              Syarat dan Ketentuan Layanan ABDUSSALAM Kedai Makanan
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
                  <FileText className="h-8 w-8 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Pendahuluan
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Selamat datang di Kedai Makanan <strong>ABDUSSALAM</strong>. Syarat dan Ketentuan ini 
                      mengatur penggunaan layanan kami, termasuk pemesanan makanan, pembayaran, dan semua 
                      interaksi Anda dengan bisnis kami.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      Dengan menggunakan layanan kami, Anda menyatakan telah membaca, memahami, dan menyetujui 
                      untuk terikat oleh Syarat dan Ketentuan ini.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="mb-8 border-orange-100">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <ShoppingCart className="h-8 w-8 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Layanan Kami
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                          Menu Makanan dan Minuman
                        </h3>
                        <p className="text-gray-600">
                          Kami menyediakan berbagai menu makanan dan minuman khas Indonesia dengan kualitas 
                          terbaik. Harga dan ketersediaan menu dapat berubah sewaktu-waktu tanpa pemberitahuan 
                          sebelumnya.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                          Layanan Pesan Antar
                        </h3>
                        <p className="text-gray-600">
                          Kami menyediakan layanan pesan antar untuk area tertentu. Biaya pengiriman akan 
                          ditampilkan saat pemesanan. Waktu pengiriman dapat bervariasi tergantung jarak dan 
                          kondisi lalu lintas.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                          Makan di Tempat (Dine-in)
                        </h3>
                        <p className="text-gray-600">
                          Kami menyediakan fasilitas makan di tempat dengan kapasitas terbatas. Jam operasional: 
                          Setiap hari pukul 08:00 - 22:00 WIB.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ordering Process */}
            <Card className="mb-8 border-orange-100">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Proses Pemesanan
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      Cara Pemesanan
                    </h3>
                    <ol className="list-decimal list-inside text-gray-600 space-y-2">
                      <li>Pilih menu yang diinginkan</li>
                      <li>Konfirmasi pesanan dan jumlah</li>
                      <li>Berikan informasi pengiriman (jika diperlukan)</li>
                      <li>Selesaikan pembayaran</li>
                      <li>Tunggu konfirmasi dan estimasi waktu pengiriman</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      Konfirmasi Pesanan
                    </h3>
                    <p className="text-gray-600">
                      Setiap pesanan akan dikonfirmasi melalui telepon. Pastikan nomor telepon yang Anda 
                      berikan aktif dan dapat dihubungi.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment */}
            <Card className="mb-8 border-orange-100">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Pembayaran
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      Metode Pembayaran
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Kami menerima metode pembayaran berikut:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Tunai (Cash)</li>
                      <li>Transfer Bank</li>
                      <li>E-Wallet (jika tersedia)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      Kebijakan Pembayaran
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Pembayaran tunai dilakukan saat menerima pesanan</li>
                      <li>Transfer harus dilakukan sebelum pengiriman</li>
                      <li>Harga yang tertera belum termasuk biaya pengiriman</li>
                      <li>Kami berhak menolak pesanan jika pembayaran tidak dapat diverifikasi</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="mb-8 border-orange-100">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Users className="h-8 w-8 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Tanggung Jawab Pelanggan
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Sebagai pelanggan, Anda setuju untuk:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Memberikan informasi yang akurat dan lengkap</li>
                      <li>Memastikan alamat pengiriman benar dan mudah diakses</li>
                      <li>Tersedia saat pengiriman tiba</li>
                      <li>Memeriksa pesanan saat diterima</li>
                      <li>Memberitahukan kami jika ada masalah dengan pesanan</li>
                      <li>Tidak menggunakan layanan untuk tujuan ilegal</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cancellation and Refund */}
            <Card className="mb-8 border-orange-100">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Pembatalan dan Pengembalian
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      Kebijakan Pembatalan
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Pembatalan dapat dilakukan minimal 30 menit sebelum pengiriman</li>
                      <li>Pembatalan kurang dari 30 menit mungkin dikenakan biaya</li>
                      <li>Pesanan yang sudah diproses tidak dapat dibatalkan</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      Kebijakan Pengembalian
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Pengembalian hanya untuk produk yang rusak atau salah</li>
                      <li>Klaim harus diajukan maksimal 1 jam setelah penerimaan</li>
                      <li>Bukti foto/video diperlukan untuk klaim pengembalian</li>
                      <li>Keputusan pengembalian sepenuhnya menjadi hak kami</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Important Notes */}
            <Card className="mb-8 border-orange-100">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <AlertCircle className="h-8 w-8 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Penting untuk Diketahui
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                          Alergi Makanan
                        </h3>
                        <p className="text-gray-600">
                          Jika Anda memiliki alergi makanan tertentu, harap memberitahukan kami saat 
                          pemesanan. Kami tidak bertanggung jawab atas reaksi alergi yang tidak dilaporkan.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                          Ketersediaan Menu
                        </h3>
                        <p className="text-gray-600">
                          Beberapa menu mungkin tidak tersedia karena keterbatasan bahan baku. Kami akan 
                          menginformasikan alternatif jika terjadi hal demikian.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                          Waktu Pengiriman
                        </h3>
                        <p className="text-gray-600">
                          Estimasi waktu pengiriman dapat berubah karena faktor eksternal seperti cuaca, 
                          lalu lintas, atau volume pesanan tinggi.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="mb-8 border-orange-100">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Hubungi Kami
                </h2>
                <p className="text-gray-600 mb-4">
                  Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
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
                    🕐 Jam Operasional: Setiap Hari 08:00 - 22:00 WIB
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Legal */}
            <Card className="border-orange-100">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Hukum yang Berlaku
                </h2>
                <p className="text-gray-600 mb-4">
                  Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum yang berlaku 
                  di Republik Indonesia. Setiap sengketa akan diselesaikan secara musyawarah untuk mufakat.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>ABDUSSALAM</strong> berhak mengubah Syarat dan Ketentuan ini kapan saja. Perubahan 
                  akan berlaku efektif segera setelah dipublikasikan.
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  Syarat dan Ketentuan ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID', { 
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
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
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