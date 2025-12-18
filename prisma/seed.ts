import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create menu items
  const menuItems = [
    {
      name: 'Nasi Goreng Special',
      description: 'Nasi goreng dengan telur mata sapi, ayam suwir, dan kerupuk',
      price: 25000,
      category: 'makanan',
      rating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop'
    },
    {
      name: 'Soto Ayam Madura',
      description: 'Soto ayam khas Madura dengan kuah kuning yang gurih',
      price: 22000,
      category: 'makanan',
      rating: 4.9,
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop'
    },
    {
      name: 'Gado-Gado',
      description: 'Sayuran segar dengan bumbu kacang dan kerupuk',
      price: 18000,
      category: 'makanan',
      rating: 4.6,
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop'
    },
    {
      name: 'Ayam Bakar Taliwang',
      description: 'Ayam bakar dengan bumbu khas Lombok yang pedas',
      price: 35000,
      category: 'makanan',
      rating: 4.7,
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop'
    },
    {
      name: 'Es Teh Manis',
      description: 'Teh manis dingin yang menyegarkan',
      price: 5000,
      category: 'minuman',
      rating: 4.7,
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop'
    },
    {
      name: 'Es Campur',
      description: 'Campuran buah segar dengan susu dan sirup',
      price: 12000,
      category: 'minuman',
      rating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop'
    },
    {
      name: 'Jus Alpukat',
      description: 'Jus alpukat segar dengan susu dan madu',
      price: 15000,
      category: 'minuman',
      rating: 4.6,
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop'
    },
    {
      name: 'Kopi Hitam',
      description: 'Kopi hitam khas Indonesia yang nikmat',
      price: 8000,
      category: 'minuman',
      rating: 4.5,
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop'
    },
    {
      name: 'Pisang Goreng',
      description: 'Pisang goreng crispy dengan taburan gula',
      price: 10000,
      category: 'snack',
      rating: 4.5,
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop'
    },
    {
      name: 'Tahu Isi',
      description: 'Tahu goreng dengan sayuran dan daging cincang',
      price: 8000,
      category: 'snack',
      rating: 4.4,
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop'
    },
    {
      name: 'Risoles',
      description: 'Risoles dengan isian sayuran dan daging',
      price: 7000,
      category: 'snack',
      rating: 4.3,
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop'
    },
    {
      name: 'Bakwan',
      description: 'Bakwan sayuran goreng yang renyah',
      price: 5000,
      category: 'snack',
      rating: 4.2,
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop'
    }
  ];

  console.log('Seeding menu items...');
  
  // Clear existing menu items
  await prisma.menuItem.deleteMany({});
  
  // Create new menu items
  for (const item of menuItems) {
    await prisma.menuItem.create({
      data: item
    });
  }

  console.log('Menu items seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });