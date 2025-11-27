export const APP_NAME = "Tast of Asia";
export const ADDRESS = "12 Ocean Drive, Newport, RI 02840";
export const PHONE = "+1 (401) 555-0199";
export const EMAIL = "reservations@tasteofasia.com";

export const MENU_ITEMS = [
  {
    id: 's1',
    name: 'Truffle Samosa',
    description: 'Crispy pastry filled with spiced potatoes, peas, and infused with black truffle oil.',
    price: '$14',
    category: 'starter',
    image: 'https://picsum.photos/id/1080/400/300',
    isVegetarian: true
  },
  {
    id: 's2',
    name: 'Scallop Moilee',
    description: 'Pan-seared Atlantic scallops served in a creamy coconut and ginger sauce.',
    price: '$22',
    category: 'starter',
    image: 'https://picsum.photos/id/1060/400/300',
  },
  {
    id: 's3',
    name: 'Onion Bhaji',
    description: 'Crispy spiced onion fritters served with tamarind chutney.',
    price: '$10',
    category: 'starter',
    image: 'https://picsum.photos/id/338/400/300',
    isVegetarian: true
  },
  {
    id: 's4',
    name: 'Aloo Tikki Chaat',
    description: 'Spiced potato patties served with chickpeas, yogurt, and tangy chutneys.',
    price: '$12',
    category: 'starter',
    image: 'https://picsum.photos/id/1025/400/300',
    isVegetarian: true
  },
  {
    id: 's5',
    name: 'Chicken 65',
    description: 'Spicy, deep-fried chicken dish originating from Chennai, flavored with curry leaves.',
    price: '$15',
    category: 'starter',
    image: 'https://picsum.photos/id/1062/400/300',
    isSpicy: true
  },
  {
    id: 'm1',
    name: 'Royal Butter Chicken',
    description: 'Tandoori grilled chicken simmered in a rich tomato, butter, and fenugreek gravy.',
    price: '$28',
    category: 'main',
    image: 'https://picsum.photos/id/102/400/300',
  },
  {
    id: 'm2',
    name: 'Lamb Rogan Josh',
    description: 'Slow-cooked lamb shank with Kashmiri chilies and aromatic spices.',
    price: '$34',
    category: 'main',
    image: 'https://picsum.photos/id/292/400/300',
    isSpicy: true
  },
  {
    id: 'm3',
    name: 'Paneer Lababdar',
    description: 'Cottage cheese cubes in a rich cashew and tomato gravy with cardamom.',
    price: '$26',
    category: 'main',
    image: 'https://picsum.photos/id/225/400/300',
    isVegetarian: true
  },
  {
    id: 'm4',
    name: 'Goan Fish Curry',
    description: 'Fresh catch of the day simmered in a tangy coconut and tamarind sauce.',
    price: '$32',
    category: 'main',
    image: 'https://picsum.photos/id/431/400/300',
  },
  {
    id: 'm5',
    name: 'Chana Masala',
    description: 'Chickpeas cooked in a spicy and tangy tomato-based sauce.',
    price: '$20',
    category: 'main',
    image: 'https://picsum.photos/id/1070/400/300',
    isVegetarian: true
  },
  {
    id: 'm6',
    name: 'Prawn Balchao',
    description: 'A fiery Goan prawn pickle-curry with vinegar and dried red chilies.',
    price: '$30',
    category: 'main',
    image: 'https://picsum.photos/id/1084/400/300',
    isSpicy: true
  },
  {
    id: 'd1',
    name: 'Saffron Pistachio Kulfi',
    description: 'Traditional Indian ice cream flavored with saffron threads and crushed pistachios.',
    price: '$12',
    category: 'dessert',
    image: 'https://picsum.photos/id/429/400/300',
  },
  {
    id: 'd2',
    name: 'Gulab Jamun',
    description: 'Sweet milk dumplings soaked in rose-scented syrup.',
    price: '$10',
    category: 'dessert',
    image: 'https://picsum.photos/id/292/400/300',
  },
  {
    id: 'd3',
    name: 'Rasmalai',
    description: 'Soft paneer balls immersed in chilled, sweetened milk with saffron.',
    price: '$11',
    category: 'dessert',
    image: 'https://picsum.photos/id/1063/400/300',
  }
];

export const FEATURED_DISHES = [
  {
    id: 'f1',
    name: 'Tandoori Platter',
    description: 'An assortment of chicken tikka, lamb seekh, and tandoori prawns grilled to perfection.',
    price: '$38',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'f2',
    name: 'Goan Fish Curry',
    description: 'Fresh catch of the day simmered in a tangy coconut and tamarind sauce.',
    price: '$32',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'f3',
    name: 'Biryani Royale',
    description: 'Aromatic basmati rice cooked with saffron, herbs, and marinated lamb.',
    price: '$30',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'f4',
    name: 'Malai Kofta',
    description: 'Soft potato and paneer dumplings in a luxurious white cashew gravy.',
    price: '$24',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356f36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'f5',
    name: 'Lamb Chops',
    description: 'Tender lamb chops marinated in yogurt and spices, char-grilled.',
    price: '$36',
    image: 'https://images.unsplash.com/photo-1606471191009-63994c53433b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export const REVIEWS = [
  {
    id: 'r1',
    author: 'James C.',
    text: 'The fusion of traditional flavors with modern presentation is unmatched in Newport. A true culinary gem.',
    rating: 5
  },
  {
    id: 'r2',
    author: 'Sarah M.',
    text: 'Impeccable service and the Lamb Rogan Josh was the best I have ever had outside of Delhi.',
    rating: 5
  },
  {
    id: 'r3',
    author: 'The Food Critic',
    text: 'Tast of Asia elevates Indian cuisine to a fine dining art form. The atmosphere is breathtaking.',
    rating: 5
  }
];

export const GOOGLE_REVIEWS = [
  {
    id: 'g1',
    author: 'Michael R.',
    text: 'Found this gem while visiting Newport. The BYOB policy is a game changer! Food was 10/10.',
    date: '2 weeks ago',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 'g2',
    author: 'Emily Watson',
    text: 'Beautiful interior, very romantic. We ordered online for pickup last week and it was still hot and fresh.',
    date: '1 month ago',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 'g3',
    author: 'David Chen',
    text: 'Best Indian food in RI hands down. The staff is so polite and the truffle samosa is a must-try.',
    date: '3 weeks ago',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/86.jpg'
  },
  {
    id: 'g4',
    author: 'Sarah Jenkins',
    text: 'A truly authentic experience. The chef really knows his spices. Will definitely be coming back!',
    date: '2 months ago',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
];

export const FAQS = [
  {
    question: "Do you have vegan options?",
    answer: "Yes, a significant portion of our menu is vegetarian and vegan-friendly. Please ask your server for recommendations."
  },
  {
    question: "Is the restaurant wheelchair accessible?",
    answer: "Absolutely. Our entrance, dining area, and restrooms are fully accessible."
  },
  {
    question: "Do you offer delivery?",
    answer: "We offer takeout via our 'Order Online' button. For delivery, please check our partners UberEats and DoorDash."
  },
  {
    question: "What is your corkage fee?",
    answer: "We are a BYOB establishment and we do not charge any corkage fee. Feel free to bring your favorite wine or beer!"
  }
];

