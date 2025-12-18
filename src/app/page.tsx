'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Clock, Star, Coffee, Utensils, ChefHat, Loader2 } from 'lucide-react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const menuCategories = [
    { id: 'all', name: 'Semua Menu', icon: Utensils },
    { id: 'makanan', name: 'Makanan', icon: Coffee },
    { id: 'minuman', name: 'Minuman', icon: Coffee },
    { id: 'snack', name: 'Snack', icon: ChefHat }
  ];

  useEffect(() => {
    fetchMenuItems();
  }, [activeCategory]);

  const fetchMenuItems = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/menu?category=${activeCategory}&available=true`);
      const data = await response.json();
      if (data.success) {
        setMenuItems(data.data);
      }
    } catch (error) {
      console.error('Error fetching menu items:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center">
            <div className="mb-6 inline-block">
              <img 
                src="/logo.png" 
                alt="ABDUSSALAM Logo" 
                className="w-32 h-32 mx-auto rounded-full bg-white p-2 shadow-xl"
              />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 animate-fade-in">
              ABDUSSALAM
            </h1>
            <p className="text-2xl lg:text-3xl mb-6 font-light">
              Kedai Makanan Autentik
            </p>
            <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Nikmati cita rasa masakan Indonesia yang autentik dengan bumbu pilihan dan resep turun temurun
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg"
                onClick={() => document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Utensils className="mr-2 h-5 w-5" />
                Lihat Menu
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg"
                onClick={() => window.location.href = 'tel:085285703515'}
              >
                <Phone className="mr-2 h-5 w-5" />
                Pesan Sekarang
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Tentang <span className="text-orange-600">ABDUSSALAM</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Kedai Makanan ABDUSSALAM hadir untuk memberikan pengalaman kuliner yang tak terlupakan dengan 
                menyajikan berbagai masakan khas Indonesia yang kaya akan rempah dan cita rasa. Dengan lokasi 
                strategis di Bangkalan, kami siap melayani kebutuhan kuliner Anda.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Buka Setiap Hari</p>
                    <p className="text-gray-600">08:00 - 22:00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Star className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Rating 4.8+</p>
                    <p className="text-gray-600">Pelayanan Terbaik</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop"
                alt="Restaurant Interior" 
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu-section" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Menu <span className="text-orange-600">Unggulan</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilihan menu terbaik kami dengan harga terjangkau dan rasa yang memukau
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {menuCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full transition-all ${
                    activeCategory === category.id 
                      ? 'bg-orange-600 hover:bg-orange-700 text-white' 
                      : 'border-orange-200 text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {category.name}
                </Button>
              );
            })}
          </div>

          {/* Menu Grid */}
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-orange-600" />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.map((item, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-orange-100">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                        )}
                        <div className="flex items-center mt-2">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">{item.rating || '4.5'}</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                        {item.category}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-orange-600">{formatPrice(item.price)}</span>
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                        Pesan
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Kunjungi <span className="text-yellow-300">Kedai Kami</span>
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Kami siap menyajikan hidangan terbaik untuk Anda dan keluarga. Datang dan rasakan pengalaman kuliner yang berbeda.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-yellow-300 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Alamat</p>
                    <p className="opacity-90">
                      DSN BARA SABA, Desa/Kelurahan Somor Koneng, Kec. Kwanyar, 
                      Kab. Bangkalan, Provinsi Jawa Timur
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-yellow-300 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Telepon</p>
                    <p className="opacity-90">085285703515</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-yellow-300 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Jam Buka</p>
                    <p className="opacity-90">Setiap Hari: 08:00 - 22:00 WIB</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Hubungi Kami</h3>
              <div className="space-y-4">
                <Button 
                  className="w-full bg-white text-orange-600 hover:bg-orange-50 py-3 text-lg"
                  onClick={() => window.location.href = 'tel:085285703515'}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  085285703515
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-white text-white hover:bg-white hover:text-orange-600 py-3 text-lg"
                  onClick={() => window.open('https://maps.google.com/?q=DSN+BARA+SABA+Somor+Koneng+Kwanyar+Bangkalan', '_blank')}
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Petunjuk Arah
                </Button>
              </div>
            </div>
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
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
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